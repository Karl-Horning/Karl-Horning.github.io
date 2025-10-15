// scripts/build-rss-from-posts.ts
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";

// ------------------ Config ------------------

const SITE_URL = "https://www.karlhorning.dev";
const BLOG_BASE = `${SITE_URL}/blog`;
const FEED_PATH = path.join(process.cwd(), "public", "rss.xml");

// Channel metadata
const CHANNEL_TITLE = "Karl Horning's Blog";
const CHANNEL_LINK = `${BLOG_BASE}`;
const CHANNEL_DESCRIPTION =
    "Notes on web development, accessibility, and learning tech";

// RSS self link
const FEED_SELF_URL = `${SITE_URL}/rss.xml`;

// Time to use for posts that only have a date (24h, UTC).
const DEFAULT_PUB_HOUR_UTC = 9; // 09:00:00 UTC

// ------------------ Schemas ------------------

const PostSchema = z.object({
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

const PostsSchema = z.array(PostSchema);

// ------------------ Helpers ------------------

function xmlEscape(s: string): string {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

// RFC-822 date (UTC). Many readers accept "GMT"; normalise to "+0000".
function toRfc822UTC(d: Date): string {
    // Example: "Mon, 04 Aug 2025 19:00:00 +0000"
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const dayName = dayNames[d.getUTCDay()];
    const day = String(d.getUTCDate()).padStart(2, "0");
    const month = monthNames[d.getUTCMonth()];
    const year = d.getUTCFullYear();
    const hour = String(d.getUTCHours()).padStart(2, "0");
    const min = String(d.getUTCMinutes()).padStart(2, "0");
    const sec = String(d.getUTCSeconds()).padStart(2, "0");
    return `${dayName}, ${day} ${month} ${year} ${hour}:${min}:${sec} +0000`;
}

function absoluteUrl(relativeOrAbsolute: string): string {
    try {
        // If it's already absolute, new URL succeeds directly
        return new URL(relativeOrAbsolute).toString();
    } catch {
        return `${SITE_URL}${relativeOrAbsolute.startsWith("/") ? "" : "/"}${relativeOrAbsolute}`;
    }
}

// ------------------ Main ------------------

async function run() {
    const postsPath = path.join(process.cwd(), "public", "data", "posts.json");
    const raw = await fs.readFile(postsPath, "utf-8");
    const parsed = PostsSchema.parse(JSON.parse(raw));

    // Defensive as posts.json should already exclude drafts
    const published = parsed.filter((p) => p.draft === false);

    // Sort newest → oldest by date
    published.sort((a, b) => {
        const aTime = new Date(`${a.date}T00:00:00.000Z`).getTime();
        const bTime = new Date(`${b.date}T00:00:00.000Z`).getTime();
        return bTime - aTime;
    });

    // Build items
    const itemsXml = published
        .map((p) => {
            const pubDate = new Date(`${p.date}T00:00:00.000Z`);
            pubDate.setUTCHours(DEFAULT_PUB_HOUR_UTC, 0, 0, 0);

            const link = `${BLOG_BASE}/${p.slug}`;
            const guid = link; // stable URL guid
            const thumb = absoluteUrl(p.thumbnail.src);
            const alt = p.thumbnail.alt;

            return [
                "    <item>",
                `      <title>${xmlEscape(p.title)}</title>`,
                `      <link>${xmlEscape(link)}</link>`,
                `      <pubDate>${toRfc822UTC(pubDate)}</pubDate>`,
                `      <description>\n        <![CDATA[<img src="${xmlEscape(thumb)}" alt="${alt}" /><br>${p.description}]]>\n      </description>`,
                `      <media:thumbnail url="${xmlEscape(thumb)}" />`,
                `      <guid isPermaLink="true"\n        >${xmlEscape(guid)}</guid\n      >`,
                "    </item>",
            ].join("\n");
        })
        .join("\n");

    // Channel dates
    const now = new Date();
    const lastBuildDate = toRfc822UTC(now);

    const rss = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<rss\n  version="2.0"',
        '  xmlns:media="http://search.yahoo.com/mrss/"',
        '  xmlns:atom="http://www.w3.org/2005/Atom"\n>',
        "  <channel>",
        `    <title>${xmlEscape(CHANNEL_TITLE)}</title>`,
        `    <link>${xmlEscape(CHANNEL_LINK)}</link>`,
        `    <description>${xmlEscape(CHANNEL_DESCRIPTION)}</description>`,
        `    <lastBuildDate>${lastBuildDate}</lastBuildDate>`,
        `    <atom:link href="${xmlEscape(FEED_SELF_URL)}" rel="self" type="application/rss+xml" />`,
        itemsXml,
        "  </channel>",
        "</rss>",
        "",
    ].join("\n");

    await fs.writeFile(FEED_PATH, rss, "utf-8");
    console.log(
        `Wrote ${published.length} items → ${path.relative(process.cwd(), FEED_PATH)}`
    );
}

run().catch((err) => {
    console.error(err);
    process.exit(1);
});
