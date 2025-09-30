import { cmaltSections } from "@/lib/constants/cmalt";

/**
 * A node in the CMALT section hierarchy.
 *
 * Represents either a top-level section (for example, "Section 1")
 * or a child subsection (for example, "1a: Constraints and Benefits").
 */
export type CmaltNode = {
    slug: string;
    label: string;
    children?: CmaltNode[];
};

/**
 * A flattened page entry used for navigation.
 *
 * Contains the resolved href (for example, "/cmalt/section-1/1a-...") and label
 * shown to the user in navigation.
 */
export type CmaltPage = {
    href: string;
    label: string;
};

/**
 * Builds a single, ordered list of CMALT pages by flattening
 * the `cmaltSections` tree.
 *
 * The order is:
 * - Overview
 * - Each top-level section
 * - Each child section, immediately after its parent
 *
 * This linearised list is later used to compute previous/next neighbours.
 *
 * @returns A flat array of CMALT pages in reading order.
 *
 * @example
 * const pages = buildLinearCmaltPages();
 * // => [
 * //   { href: "/cmalt", label: "Overview" },
 * //   { href: "/cmalt/contextual-statement", label: "Contextual Statement" },
 * //   { href: "/cmalt/section-1", label: "Section 1: Operational Issues" },
 * //   { href: "/cmalt/section-1/1a-an-understanding-...", label: "1a: Constraints and Benefits" },
 * //   ...
 * // ]
 */
export function buildLinearCmaltPages(): CmaltPage[] {
    const pages: CmaltPage[] = [];

    for (const top of cmaltSections as CmaltNode[]) {
        // Top-level section (or overview if slug is empty string)
        const topHref = top.slug ? `/cmalt/${top.slug}` : `/cmalt`;
        const topLabel = top.label;

        pages.push({ href: topHref, label: topLabel });

        // Add all children (subsections) immediately after the parent
        if (top.children?.length) {
            for (const child of top.children) {
                pages.push({
                    href: `${topHref}/${child.slug}`,
                    label: child.label,
                });
            }
        }
    }

    return pages;
}

// Precompute the linear page list and a quick lookup map for pathname → index.
const linearPages = buildLinearCmaltPages();
const hrefToIndex = new Map(linearPages.map((p, i) => [p.href, i]));

/**
 * Gets the previous, current, and next CMALT pages for a given pathname.
 *
 * Automatically normalises trailing slashes (for example, "/cmalt/section-1/" → "/cmalt/section-1").
 *
 * @param pathname - The current Next.js pathname (for example, "/cmalt/section-1/1a-constraints").
 * @returns An object containing:
 * - `current` - The current CMALT page (if found).
 * - `prev` - The previous page in the reading order, if any.
 * - `next` - The next page in the reading order, if any.
 *
 * @example
 * const { prev, current, next } = getPrevNext("/cmalt/section-1/1a-...");
 * // prev = { href: "/cmalt/section-1", label: "Section 1: Operational Issues" }
 * // current = { href: "/cmalt/section-1/1a-...", label: "1a: Constraints and Benefits" }
 * // next = { href: "/cmalt/section-1/1b-...", label: "1b: Technical Knowledge and Ability" }
 */
export function getPrevNext(pathname: string): {
    prev?: CmaltPage;
    next?: CmaltPage;
    current?: CmaltPage;
} {
    // Normalise by removing trailing slash (except for root "/")
    const path =
        pathname.endsWith("/") && pathname !== "/"
            ? pathname.slice(0, -1)
            : pathname;

    const idx = hrefToIndex.get(path);
    if (idx === undefined) return {};

    const current = linearPages[idx];
    const prev = idx > 0 ? linearPages[idx - 1] : undefined;
    const next =
        idx < linearPages.length - 1 ? linearPages[idx + 1] : undefined;

    return { prev, next, current };
}
