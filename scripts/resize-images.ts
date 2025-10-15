// scripts/resize-images.ts
import fg from "fast-glob";
import path from "node:path";
import { promises as fs } from "node:fs";
import sharp from "sharp";

/**
 * Base input directory for source assets (served publicly).
 */
const INPUT_DIR = "public";

/**
 * Subdirectory (under {@link INPUT_DIR}) where optimised derivatives are written.
 */
const OUT_SUBDIR = "_generated";

/**
 * Target widths (in px) for responsive image derivatives.
 */
const TARGET_WIDTHS = [320, 640, 768, 1024, 1280, 1536, 1920];

/**
 * Maximum number of concurrent Sharp pipelines.
 */
const CONCURRENCY = 4;

/**
 * Allowed source file extensions.
 */
const exts = ["jpg", "jpeg", "png", "webp", "avif"];

/**
 * Path to the on-disk cache file tracking source mtimes and generated outputs.
 */
const cachePath = path.join(INPUT_DIR, OUT_SUBDIR, ".image-cache.json");

/**
 * Cache entry describing the source's last-modified time and generated files.
 */
type CacheEntry = {
    /** Source file modification time in milliseconds (from `fs.stat`). */
    mtimeMs: number;
    /** Absolute paths of all outputs produced for this source. */
    outputs: string[];
};

/**
 * Cache map keyed by absolute source path.
 */
type Cache = Record<string, CacheEntry>;

/**
 * Loads the optimisation cache from disk, or returns an empty cache if missing.
 *
 * @returns A parsed {@link Cache} object.
 */
async function loadCache(): Promise<Cache> {
    try {
        const raw = await fs.readFile(cachePath, "utf8");
        return JSON.parse(raw) as Cache;
    } catch {
        return {};
    }
}

/**
 * Persists the optimisation {@link Cache} to disk (pretty-printed JSON).
 *
 * Ensures the cache directory exists before writing.
 *
 * @param cache - The cache object to write.
 */
async function saveCache(cache: Cache) {
    await fs.mkdir(path.dirname(cachePath), { recursive: true });
    await fs.writeFile(cachePath, JSON.stringify(cache, null, 2), "utf8");
}

/**
 * Computes output file paths (original container + WebP + AVIF) for a size variant.
 *
 * @param baseOut - Output path stem without extension (absolute).
 * @param w - Target width in pixels.
 * @param baseExt - Normalised original container extension (e.g. `jpg`, `png`).
 * @returns Paths for the original container (`orig`), `webp`, and `avif`.
 */
function outPathsFor(baseOut: string, w: number, baseExt: string) {
    const stem = `${baseOut}-w${w}`;
    return {
        orig: `${stem}.${baseExt}`,
        webp: `${stem}.webp`,
        avif: `${stem}.avif`,
    };
}

/**
 * Processes a single source image into multiple responsive derivatives.
 *
 * - Skips work if the cache is fresh **and** all expected outputs still exist.
 * - Auto-orients images.
 * - Generates original-container, WebP, and AVIF variants for each target width,
 *   clamped to the source image’s intrinsic width.
 * - Updates the {@link Cache} with outputs and the source `mtimeMs`.
 *
 * @param srcPath - Absolute path to the source image.
 * @param cache - Mutable cache object (will be updated).
 */
async function processOne(srcPath: string, cache: Cache) {
    const stat = await fs.stat(srcPath);
    const lastMod = stat.mtimeMs;
    const cached = cache[srcPath];

    // Fast path: cache hit + outputs still present
    if (cached && cached.mtimeMs === lastMod) {
        const exists = await Promise.all(
            cached.outputs.map(async (p) => {
                try {
                    await fs.access(p);
                    return true;
                } catch {
                    return false;
                }
            })
        );
        if (exists.every(Boolean)) return;
    }

    const rel = path.relative(INPUT_DIR, srcPath);
    const dirname = path.dirname(rel);
    const parsed = path.parse(rel);
    const baseOut = path.join(INPUT_DIR, OUT_SUBDIR, dirname, parsed.name);
    await fs.mkdir(path.dirname(baseOut), { recursive: true });

    // Inspect source to choose safe target widths
    const img = sharp(srcPath, { failOn: "error" }).rotate();
    const meta = await img.metadata();
    const maxWidth = meta.width ?? Infinity;

    const widths = TARGET_WIDTHS.filter((w) => w <= maxWidth && w > 0);
    if (widths.length === 0) {
        // Source already smaller than smallest target
        return;
    }

    const srcExt = (parsed.ext.replace(".", "") || "jpg").toLowerCase();
    const baseExt = exts.includes(srcExt)
        ? srcExt === "jpeg"
            ? "jpg"
            : srcExt
        : "jpg";

    const outputs: string[] = [];

    // Simple concurrency limiter
    const queue: Promise<void>[] = [];
    let active = 0;
    const run = async (fn: () => Promise<void>) => {
        while (active >= CONCURRENCY) {
            await Promise.race(queue);
        }
        const p = (async () => {
            active++;
            try {
                await fn();
            } finally {
                active--;
            }
        })();
        queue.push(p);
        p.finally(() => {
            const i = queue.indexOf(p);
            if (i >= 0) queue.splice(i, 1);
        });
    };

    for (const w of widths) {
        const outs = outPathsFor(baseOut, w, baseExt);

        await run(async () => {
            const pipeline = sharp(srcPath)
                .rotate()
                .resize({ width: w, withoutEnlargement: true });

            // Original container derivative
            if (baseExt === "jpg" || baseExt === "jpeg") {
                await pipeline
                    .clone()
                    .jpeg({ quality: 82, mozjpeg: true, progressive: true })
                    .toFile(outs.orig);
            } else if (baseExt === "png") {
                await pipeline
                    .clone()
                    .png({ compressionLevel: 9, palette: true })
                    .toFile(outs.orig);
            } else if (baseExt === "webp") {
                await pipeline.clone().webp({ quality: 82 }).toFile(outs.orig);
            } else if (baseExt === "avif") {
                await pipeline.clone().avif({ quality: 50 }).toFile(outs.orig);
            } else {
                await pipeline
                    .clone()
                    .jpeg({ quality: 82, mozjpeg: true, progressive: true })
                    .toFile(outs.orig);
            }
            outputs.push(outs.orig);
        });

        // WebP
        await run(async () => {
            await sharp(srcPath)
                .rotate()
                .resize({ width: w, withoutEnlargement: true })
                .webp({ quality: 82 })
                .toFile(outs.webp);
            outputs.push(outs.webp);
        });

        // AVIF
        await run(async () => {
            await sharp(srcPath)
                .rotate()
                .resize({ width: w, withoutEnlargement: true })
                .avif({ quality: 50 })
                .toFile(outs.avif);
            outputs.push(outs.avif);
        });
    }

    // Wait for outstanding work
    await Promise.all(queue);

    cache[srcPath] = { mtimeMs: lastMod, outputs };
}

/**
 * CLI entry point.
 *
 * - Globs image files under {@link INPUT_DIR} (excluding generated outputs/SVGs).
 * - Loads the on-disk cache and processes each source via {@link processOne}.
 * - Saves the updated cache and prints a brief summary.
 *
 * @async
 * @returns Resolves when processing completes or rejects on error.
 */
async function main() {
    const patterns = exts.map((e) => `${INPUT_DIR}/**/*.${e}`);
    const files = await fg(patterns, {
        ignore: [
            `${INPUT_DIR}/${OUT_SUBDIR}/**/*`,
            `${INPUT_DIR}/**/*.svg`,
            "**/node_modules/**",
        ],
    });

    const cache = await loadCache();

    for (const f of files) {
        await processOne(path.resolve(f), cache);
    }

    await saveCache(cache);

    // Console summary for wiring up <img> / Next <Image>
    console.log(`\nOptimised ${files.length} source image(s).`);
    console.log(
        `Derivatives written under: ${path.join(INPUT_DIR, OUT_SUBDIR)}\n`
    );
}

// Execute
main().catch((err) => {
    console.error(err);
    process.exit(1);
});
