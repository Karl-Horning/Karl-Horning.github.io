// scripts/build-cmalt-json.ts
import { promises as fs } from "fs";
import path from "path";
import fg from "fast-glob";
import { pathToFileURL } from "url";
import { z } from "zod";
import "tsconfig-paths/register";

// ---- Schemas ---------------------------------------------------------------
// All fields are required, matching CmaltPage meta shape exactly.
const CmaltMetaSchema = z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    readingTime: z.number().int().positive(),
    slug: z.string(),
    draft: z.boolean(),
});

type CmaltItem = z.infer<typeof CmaltMetaSchema>;

// ---- Paths -----------------------------------------------------------------

const ROOT = process.cwd();
const CMALT_GLOB = "src/app/cmalt/**/meta.ts";
const OUTPUT_DIR = path.join(ROOT, "public", "data");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "cmalt.json");

// ---- Helpers ---------------------------------------------------------------

async function importMeta(tsFilePath: string): Promise<CmaltItem> {
    const fileUrl = pathToFileURL(path.join(ROOT, tsFilePath)).href;
    const mod = await import(fileUrl);
    const raw = (mod as any).default ?? (mod as any).meta;
    return CmaltMetaSchema.parse(raw);
}

// ---- Main ------------------------------------------------------------------

async function run() {
    // 1) Find all cmalt meta.ts files
    const entries = await fg(CMALT_GLOB, { cwd: ROOT });

    // 2) Import & validate all metas
    const metas = await Promise.all(
        entries.map(async (p) => {
            try {
                return await importMeta(p);
            } catch (err) {
                console.error(`Invalid CMALT meta at ${p}:`, err);
                return null;
            }
        })
    );

    // 3) Keep only `draft === false`
    const published: CmaltItem[] = metas.filter(
        (m): m is CmaltItem => !!m && m.draft === false
    );

    // 4) Sort alphabetically by title (A → Z)
    const sorted = published.sort((a, b) =>
        a.title.localeCompare(b.title, "en", { sensitivity: "base" })
    );

    // 5) Ensure output dir exists; remove old file if present
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    await fs.rm(OUTPUT_FILE, { force: true });

    // 6) Write pretty JSON including all fields
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(sorted, null, 4), "utf-8");

    console.log(
        `Wrote ${sorted.length} CMALT pages → ${path.relative(ROOT, OUTPUT_FILE)}`
    );
}

run().catch((e) => {
    console.error(e);
    process.exit(1);
});
