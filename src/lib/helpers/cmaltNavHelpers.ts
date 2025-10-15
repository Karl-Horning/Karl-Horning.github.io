import "server-only";
import { promises as fs } from "fs";
import path from "path";
import { internalRoutes } from "@/lib/constants/ui";

const { CmaltRoute } = internalRoutes;

/**
 * Represents a single navigation link in the CMALT structure.
 *
 * Used by `getCmaltNav()` to build grouped navigation data
 * for the CMALT portfolio site.
 */
export type NavLink = {
    /** Display title of the navigation link. */
    title: string;

    /** Destination URL or path for the link. */
    href: string;

    /**
     * Whether this link should match the route exactly.
     * For example, the homepage link (`/cmalt`) uses `isExact: true`.
     */
    isExact: boolean;

    /**
     * Logical group in which to render the link.
     *
     * - `"top"` → Appears at the top of the navigation.
     * - `"section-n"` → Appears under Section N (for example, "section-1", "section-2").
     */
    group: "top" | `section-${number}`;
};

/**
 * Raw data shape for CMALT entries read from `public/data/cmalt.json`.
 * Represents minimal metadata before transforming into `NavLink` objects.
 */
type RawItem = {
    /** Display title, such as “Section 1a: Context of Professional Practice”. */
    title: string;

    /** URL slug for the CMALT page (empty string for homepage). */
    slug: string;

    /** Optional flag indicating a draft entry (excluded from nav). */
    draft?: boolean;
};

/**
 * Builds a structured navigation model for the CMALT portfolio.
 *
 * Reads data from `public/data/cmalt.json`, filters out drafts,
 * and returns grouped navigation data suitable for rendering
 * in menus or sidebars.
 *
 * Each entry is automatically grouped under `"top"` (for non-section pages)
 * or `"section-n"` (for sectioned entries such as “Section 1a”).
 *
 * @async
 * @returns An object containing:
 * - `top`: An array of top-level `NavLink` items (for example, homepage or intro).
 * - `sections`: An ordered list of section groups, each containing label, key, and items.
 *
 * @example
 * ```ts
 * const { top, sections } = await getCmaltNav();
 * // Render in navigation components
 * ```
 */
export async function getCmaltNav(): Promise<{
    top: NavLink[];
    sections: { label: string; key: `section-${number}`; items: NavLink[] }[];
}> {
    // Load and parse CMALT metadata
    const file = path.join(process.cwd(), "public/data/cmalt.json");
    const json = await fs.readFile(file, "utf-8");
    const items = JSON.parse(json) as RawItem[];

    // Exclude drafts
    const visible = items.filter((i) => !i.draft);

    // Build normalised links with grouping + flags derived from data
    const links: NavLink[] = visible.map((i) => {
        const isHomepage = i.slug === ""; // CMALT homepage has an empty slug
        const href = isHomepage ? CmaltRoute : `${CmaltRoute}/${i.slug}`;

        // Determine if the title starts with “Section <number>”
        const sectionMatch = i.title.match(/^Section\s+(\d+)/i);
        const group: NavLink["group"] = sectionMatch
            ? (`section-${+sectionMatch[1]}` as const)
            : "top";

        return {
            title: i.title,
            href,
            isExact: isHomepage, // only homepage should match exactly
            group,
        };
    });

    // Collect top-level links
    const top = links.filter((l) => l.group === "top");

    // Group and sort sections numerically, then alphabetically within each
    const map = new Map<string, NavLink[]>();
    for (const l of links) {
        if (l.group === "top") continue;
        if (!map.has(l.group)) map.set(l.group, []);
        map.get(l.group)!.push(l);
    }

    const sections = Array.from(map.entries())
        .sort(([a], [b]) => {
            // Sort by section number (for example, section-1, section-2)
            const na = parseInt(a.replace(/\D/g, ""), 10);
            const nb = parseInt(b.replace(/\D/g, ""), 10);
            return na - nb;
        })
        .map(([key, items]) => {
            // Sort items alphabetically within each section (1a, 1b, 1c)
            items.sort((x, y) => {
                const ax =
                    x.title
                        .match(/Section\s+\d+([a-z])/i)?.[1]
                        ?.toLowerCase() ?? "";
                const ay =
                    y.title
                        .match(/Section\s+\d+([a-z])/i)?.[1]
                        ?.toLowerCase() ?? "";
                return ax.localeCompare(ay);
            });

            const n = parseInt(key.replace(/\D/g, ""), 10);
            return {
                label: `Section ${n}`,
                key: key as `section-${number}`,
                items,
            };
        });

    return { top, sections };
}
