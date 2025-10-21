import { promises as fs } from "fs";
import path from "path";
import { cache } from "react";

/**
 * Minimum shape required for any item used with `createPrevNext`.
 *
 * Items must include a `slug` (unique identifier, often URL-safe)
 * and a `title` (used as link text).
 */
type HasSlugAndTitle = {
    slug: string;
    title: string;
};

/**
 * Represents a single link to a previous or next item.
 *
 * Used in `PrevNextResult` to define navigation targets.
 */
export type PrevNextLink = {
    /** The display title for the linked item. */
    title: string;

    /** The full URL or path to the linked item. */
    href: string;
};

/**
 * The combined result of calling `getPrevNext()`.
 *
 * Contains optional `previous` and `next` navigation links,
 * both of which may be `null` if there's no adjacent item.
 */
export type PrevNextResult = {
    /** The previous item in sequence, or `null` if none exists. */
    previous: PrevNextLink | null;

    /** The next item in sequence, or `null` if none exists. */
    next: PrevNextLink | null;
};

/**
 * Creates a cached helper function to find the previous and next items
 * within a JSON data list based on a given `slug`.
 *
 * The returned `getPrevNext` function reads and parses the JSON file,
 * locates the current item, and returns the neighbouring entries with
 * their titles and URLs. Designed for static collections such as blog posts,
 * projects, or portfolio items.
 *
 * Example usage:
 * ```ts
 * const getPrevNext = createPrevNext("src/data/posts.json", "/blog");
 * const { previous, next } = await getPrevNext("my-post-slug");
 * ```
 *
 * @template T - The item type, which must include `slug` and `title` fields.
 * @param relativeJsonPath - Path (relative to the project root) of the JSON file containing the ordered list of items.
 * @param baseHref - Base URL prefix to use when constructing navigation links.
 * @returns An async function `getPrevNext(slug)` that resolves to the previous and next link objects, or `null` when not found.
 */
export function createPrevNext<T extends HasSlugAndTitle>(
    relativeJsonPath: string,
    baseHref: string
) {
    /**
     * Reads and parses the JSON file containing all items.
     * Cached using React's `cache()` to avoid redundant disk reads.
     */
    const readAll = cache(async (): Promise<T[]> => {
        const file = path.join(process.cwd(), relativeJsonPath);
        const json = await fs.readFile(file, "utf-8");
        return JSON.parse(json) as T[];
    });

    /**
     * Retrieves the previous and next items surrounding the provided slug.
     *
     * @param slug - The slug of the current item to find neighbours for.
     * @returns An object with `previous` and `next` links (or `null` if at the start or end).
     */
    return async function getPrevNext(slug: string): Promise<PrevNextResult> {
        // Read cached list of all items from JSON
        const items = await readAll();

        // Find the index of the current item
        const i = items.findIndex((p) => p.slug === slug);
        if (i === -1) return { previous: null, next: null };

        // Determine adjacent items (if any)
        const prevItem = i > 0 ? items[i - 1] : null;
        const nextItem = i < items.length - 1 ? items[i + 1] : null;

        // Return structured links for easier use in UI components
        return {
            previous: prevItem
                ? {
                      title: prevItem.title,
                      href: `${baseHref}/${prevItem.slug}`,
                  }
                : null,
            next: nextItem
                ? {
                      title: nextItem.title,
                      href: `${baseHref}/${nextItem.slug}`,
                  }
                : null,
        };
    };
}
