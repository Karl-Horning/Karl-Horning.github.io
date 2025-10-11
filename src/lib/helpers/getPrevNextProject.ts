import { ProjectMeta } from "@/types";
import { promises as fs } from "fs";
import path from "path";
import { cache } from "react";

/**
 * A reduced version of {@link ProjectMeta} used for
 * project listings and navigation (for example, previous/next links).
 *
 * Includes only lightweight metadata required for summaries.
 */
type ProjectListItem = Pick<
    ProjectMeta,
    "slug" | "title" | "description" | "repo"
> & {
    /**
     * Topics object containing the display name and slug
     * for the topic link.
     */
    topics: ProjectMeta["topics"];
} & {
    /**
     * Thumbnail image object containing the source and alt text
     * for the project cover image.
     */
    thumbnail: ProjectMeta["thumbnail"];
};

/**
 * Reads all project entries from the local JSON data file.
 *
 * The result is memoised using React’s {@link cache} to avoid
 * redundant file system reads across server requests.
 *
 * @returns A promise resolving to an array of {@link ProjectListItem} objects.
 */
const readAll = cache(async (): Promise<ProjectListItem[]> => {
    const file = path.join(process.cwd(), "public", "data", "projects.json");
    const json = await fs.readFile(file, "utf-8");
    return JSON.parse(json) as ProjectListItem[];
});

/**
 * Retrieves the previous and next project items relative to a given slug.
 *
 * The ordering is based on the array order within the JSON file
 * (typically newest → oldest). If the provided slug does not match
 * any project, both results are `null`.
 *
 * @param slug - The unique slug identifying the current project.
 * @returns An object containing:
 * - `previous`: The newer project (index - 1), or `null` if none exists.
 * - `next`: The older project (index + 1), or `null` if none exists.
 *
 * @example
 * ```ts
 * const { previous, next } = await getPrevNextProject("project-slug");
 * console.log(previous?.title, next?.title);
 * ```
 */
export async function getPrevNextProject(slug: string) {
    const items = await readAll();

    const i = items.findIndex((p) => p.slug === slug);
    if (i === -1) return { previous: null, next: null };

    const prevItem = i > 0 ? items[i - 1] : null;
    const nextItem = i < items.length - 1 ? items[i + 1] : null;

    return {
        previous: prevItem
            ? { title: prevItem.title, href: `/projects/${prevItem.slug}` }
            : null,
        next: nextItem
            ? { title: nextItem.title, href: `/projects/${nextItem.slug}` }
            : null,
    };
}
