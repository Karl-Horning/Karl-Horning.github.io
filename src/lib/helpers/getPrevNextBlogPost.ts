import { BlogPost } from "@/types";
import { promises as fs } from "fs";
import path from "path";
import { cache } from "react";

/**
 * A reduced view of a {@link BlogPost} used for listings and navigation
 * (for example, previous/next links).
 *
 * Includes only the lightweight metadata required for summaries.
 */
type ProjectListItem = Pick<BlogPost, "slug" | "title" | "description"> & {
    /**
     * Topics associated with the post (used for tags/filters).
     * Inherits the shape from {@link BlogPost.topics}.
     */
    topics: BlogPost["topics"];
} & {
    /**
     * Thumbnail image object for the post’s cover image.
     * Inherits the shape from {@link BlogPost.thumbnail}.
     */
    thumbnail: BlogPost["thumbnail"];
};

/**
 * Reads all blog posts from the local JSON data file.
 *
 * The result is memoised with React’s {@link cache} to avoid
 * redundant filesystem reads across server requests.
 *
 * @returns A promise that resolves to an array of summary items for posts.
 */
const readAll = cache(async (): Promise<ProjectListItem[]> => {
    const file = path.join(process.cwd(), "public", "data", "posts.json");
    const json = await fs.readFile(file, "utf-8");
    return JSON.parse(json) as ProjectListItem[];
});

/**
 * Retrieves the previous and next blog posts relative to a given slug.
 *
 * The ordering is based on the array order in the JSON file
 * (typically newest → oldest). If the provided slug does not match
 * any post, both results are `null`.
 *
 * @param slug - The unique slug identifying the current post.
 * @returns An object containing:
 * - `previous`: The newer post (index - 1), or `null` if none exists.
 * - `next`: The older post (index + 1), or `null` if none exists.
 *
 * @example
 * ```ts
 * const { previous, next } = await getPrevNextBlogPost("my-post-slug");
 * console.log(previous?.title, next?.title);
 * ```
 */
export async function getPrevNextBlogPost(slug: string) {
    const items = await readAll();

    const i = items.findIndex((p) => p.slug === slug);
    if (i === -1) return { previous: null, next: null };

    const prevItem = i > 0 ? items[i - 1] : null;
    const nextItem = i < items.length - 1 ? items[i + 1] : null;

    return {
        previous: prevItem
            ? { title: prevItem.title, href: `/blog/${prevItem.slug}` }
            : null,
        next: nextItem
            ? { title: nextItem.title, href: `/blog/${nextItem.slug}` }
            : null,
    };
}
