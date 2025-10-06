/**
 * Represents a small image preview used for cards,
 * project listings, or summaries.
 */
export type Thumbnail = {
    /**
     * The image source URL or static import path.
     */
    src: string;

    /**
     * Descriptive alternative text for accessibility and SEO.
     */
    alt: string;
};
