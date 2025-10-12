import { BlogPost, CmaltPage, ProjectMeta } from "@/types";
import { createPrevNext } from "./createPrevNext";

/**
 * Simplified representation of a blog post
 * used for generating previous/next navigation.
 *
 * Includes only the fields required for linking
 * and minimal display info.
 */
type BlogListItem = Pick<BlogPost, "slug" | "title" | "description"> & {
    /** Associated topics/tags for the blog post. */
    topics: BlogPost["topics"];

    /** Optional thumbnail image for the post. */
    thumbnail: BlogPost["thumbnail"];
};

/**
 * Minimal CMALT page shape for navigation.
 *
 * Contains only the `slug`, `title`, and `description`
 * needed for previous/next link generation.
 */
type CmaltItem = Pick<CmaltPage, "slug" | "title" | "description">;

/**
 * Simplified project metadata for navigation.
 *
 * Includes the core identifying fields plus
 * topic tags and a thumbnail reference.
 */
type ProjectListItem = Pick<
    ProjectMeta,
    "slug" | "title" | "description" | "repo"
> & {
    /** Tags or technologies associated with the project. */
    topics: ProjectMeta["topics"];

    /** Thumbnail or preview image for the project. */
    thumbnail: ProjectMeta["thumbnail"];
};

/**
 * Retrieves the previous and next blog posts based on a given slug.
 *
 * Reads from `/public/data/posts.json` and constructs
 * links under the `/blog` route.
 *
 * @see createPrevNext
 */
export const getPrevNextBlogPost = createPrevNext<BlogListItem>(
    "public/data/posts.json",
    "/blog"
);

/**
 * Retrieves the previous and next CMALT pages based on a given slug.
 *
 * Reads from `/public/data/cmalt.json` and constructs
 * links under the `/cmalt` route.
 *
 * @see createPrevNext
 */
export const getPrevNextCmalt = createPrevNext<CmaltItem>(
    "public/data/cmalt.json",
    "/cmalt"
);

/**
 * Retrieves the previous and next project pages based on a given slug.
 *
 * Reads from `/public/data/projects.json` and constructs
 * links under the `/projects` route.
 *
 * @see createPrevNext
 */
export const getPrevNextProject = createPrevNext<ProjectListItem>(
    "public/data/projects.json",
    "/projects"
);
