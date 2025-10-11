// scripts/build-projects-json.ts
import { promises as fs } from "fs";
import path from "path";
import fg from "fast-glob";
import { pathToFileURL } from "url";
import { z } from "zod";
import "tsconfig-paths/register";

// ---- Schemas ---------------------------------------------------------------

const MetaSchema = z.object({
    slug: z.string(),
    title: z.string(),
    date: z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/)
        .optional(), // not used in output
    readingTime: z.number().int().positive().optional(), // not used in output
    topics: z.array(
        z.object({
            title: z.string(),
            link: z.string(),
        })
    ),
    description: z.string(),
    thumbnail: z.object({
        src: z.string(),
        alt: z.string(),
    }),
    repo: z.string().optional(),
    draft: z.boolean().optional(),
});

const ListItemSchema = z.object({
    title: z.string(),
    description: z.string(),
    topics: z.array(
        z.object({
            title: z.string(),
            link: z.string(),
        })
    ),
    slug: z.string(),
    repo: z.string().optional(),
    thumbnail: z.object({
        src: z.string(),
        alt: z.string(),
    }),
});

type ListItem = z.infer<typeof ListItemSchema>;

// ---- Paths -----------------------------------------------------------------

const ROOT = process.cwd();
const PROJECTS_GLOB = "src/app/projects/**/meta.ts";
const OUTPUT_DIR = path.join(ROOT, "public", "data");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "projects.json");

// ---- Helpers ---------------------------------------------------------------

async function importMeta(tsFilePath: string) {
    // Convert filesystem path to a file:// URL for dynamic import
    const fileUrl = pathToFileURL(path.join(ROOT, tsFilePath)).href;
    const mod = await import(fileUrl);
    // support either `export default` or `export const meta`
    const raw = mod.default ?? mod.meta;
    const parsed = MetaSchema.parse(raw);
    return parsed;
}

function toListItem(m: z.infer<typeof MetaSchema>): ListItem {
    const item = {
        title: m.title,
        description: m.description,
        topics: m.topics,
        slug: m.slug,
        repo: m.repo,
        thumbnail: m.thumbnail,
    };
    return ListItemSchema.parse(item);
}

// ---- Main ------------------------------------------------------------------

async function run() {
    // 1) Find all meta.ts files
    const entries = await fg(PROJECTS_GLOB, { cwd: ROOT });

    // 2) Import and validate all metas
    const metas = await Promise.all(
        entries.map(async (p) => {
            try {
                return await importMeta(p);
            } catch (err) {
                console.error(`Invalid meta at ${p}:`, err);
                return null;
            }
        })
    );

    // 3) Keep only explicit `draft === false`
    const published = metas.filter(
        (m): m is z.infer<typeof MetaSchema> => !!m && m.draft === false
    );

    // 4) Sort newest → oldest by date
    const sorted = published.sort((a, b) => {
        const aDate = new Date(a.date ?? 0).getTime();
        const bDate = new Date(b.date ?? 0).getTime();
        return bDate - aDate; // descending (newest first)
    });

    // 5) Map to list items
    const list: ListItem[] = sorted.map(toListItem);

    // 6) Ensure output dir exists; remove old file if present
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    await fs.rm(OUTPUT_FILE, { force: true });

    // 7) Write pretty JSON
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(list, null, 4), "utf-8");

    console.log(
        `Wrote ${list.length} projects → ${path.relative(ROOT, OUTPUT_FILE)}`
    );
}

run().catch((e) => {
    console.error(e);
    process.exit(1);
});
