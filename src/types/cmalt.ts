/**
 * Represents a single CMALT portfolio page.
 *
 * Used for blog-style CMALT entries containing metadata
 * such as title, date, reading time, and description.
 */
export type CmaltPage = {
    /** The display title of the CMALT page. */
    title: string;

    /** Short summary or meta description for the page. */
    description: string;

    /**
     * ISO-like date string in `YYYY-MM-DD` format.
     * Used for sorting and display purposes.
     */
    date: `${number}-${number}-${number}`;

    /**
     * Estimated reading time in minutes.
     * Calculated from word count or content length.
     */
    readingTime: number;

    /** URL-friendly slug identifying the CMALT page. */
    slug: string;

    /**
     * Optional flag indicating the page is a draft.
     * Draft pages are typically excluded from production builds.
     */
    draft?: boolean;
};
