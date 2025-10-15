// scripts/build-posts-json.ts
import { promises as fs } from "fs";
import path from "path";
import fg from "fast-glob";
import { pathToFileURL } from "url";
import { z } from "zod";
import "tsconfig-paths/register";

// ---- Schemas ---------------------------------------------------------------
// Every field required; mirrors BlogPost meta exactly.
const BlogMetaSchema = z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    readingTime: z.number().int().positive(),
    slug: z.string(),
    thumbnail: z.object({
        src: z.string(),
        alt: z.string(),
    }),
    topics: z.array(z.string()),
    draft: z.boolean(),
});

// Output item is identical to the meta (all fields included).
type PostItem = z.infer<typeof BlogMetaSchema>;

// ---- Paths -----------------------------------------------------------------

const ROOT = process.cwd();
const BLOG_GLOB = "src/app/blog/**/meta.ts";
const OUTPUT_DIR = path.join(ROOT, "public", "data");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "posts.json");

// ---- Helpers ---------------------------------------------------------------

async function importMeta(tsFilePath: string): Promise<PostItem> {
    const fileUrl = pathToFileURL(path.join(ROOT, tsFilePath)).href;
    const mod = await import(fileUrl);
    const raw = (mod as any).default ?? (mod as any).meta;
    return BlogMetaSchema.parse(raw);
}

// ---- Main ------------------------------------------------------------------

async function run() {
    // 1) Find all blog meta.ts files
    const entries = await fg(BLOG_GLOB, { cwd: ROOT });

    // 2) Import & validate metas (strict; any failure logs and skips)
    const metas = await Promise.all(
        entries.map(async (p) => {
            try {
                return await importMeta(p);
            } catch (err) {
                console.error(`Invalid blog meta at ${p}:`, err);
                return null;
            }
        })
    );

    // 3) Keep only explicit `draft === false`
    const published: PostItem[] = metas.filter(
        (m): m is PostItem => !!m && m.draft === false
    );

    // 4) Sort newest → oldest by required date
    const sorted = published.sort((a, b) => {
        const aDate = new Date(a.date).getTime();
        const bDate = new Date(b.date).getTime();
        return bDate - aDate;
    });

    // 5) Ensure output dir exists; remove old file if present
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    await fs.rm(OUTPUT_FILE, { force: true });

    // 6) Write pretty JSON with ALL fields
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(sorted, null, 4), "utf-8");

    console.log(
        `Wrote ${sorted.length} posts → ${path.relative(ROOT, OUTPUT_FILE)}`
    );
}

run().catch((e) => {
    console.error(e);
    process.exit(1);
});
