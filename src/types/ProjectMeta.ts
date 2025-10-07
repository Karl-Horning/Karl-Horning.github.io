import { Thumbnail } from "@/types";

/**
 * Metadata describing an individual project entry.
 *
 * Used for generating project listings, individual project pages,
 * and structured metadata such as JSON-LD or Open Graph tags.
 */
export type ProjectMeta = {
    /**
     * The project title displayed in the page header.
     */
    title: string;

    /**
     * A short description or summary of the project’s content.
     */
    description: string;

    /**
     * The ISO 8601 date (for example, `"2025-10-07"`) representing
     * when the project was created or last updated.
     */
    date: `${number}-${number}-${number}`;

    /**
     * Estimated reading time in minutes for the project content.
     */
    readingTime: number;

    /**
     * The unique slug for the project, used to build URLs
     * for sharing and navigation.
     */
    slug: string;

    /**
     * Thumbnail image object containing the source and alt text
     * for the project cover image.
     */
    thumbnail: Thumbnail;

    /**
     * An array of topic strings used as tags or metadata
     * for filtering or categorising projects.
     */
    topics: readonly string[];

    /**
     * Optional GitHub repository name or URL associated with the project.
     * Used to display repo links in project cards and details.
     */
    repo?: string;

    /**
     * Marks the project as a draft, preventing it from appearing
     * in public listings until published.
     */
    draft?: boolean;
};
