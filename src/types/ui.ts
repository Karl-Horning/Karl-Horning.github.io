import { IconType } from "react-icons";

/**
 * Represents an item that combines a title, icon, and optional styling metadata.
 *
 * Used for values, sidebar entries, and other UI elements that pair
 * descriptive text with an icon and consistent Tailwind colour classes.
 */
export type Icon = {
    /**
     * The display name or label for the item.
     */
    title: string;

    /**
     * The React Icon component representing the item visually.
     */
    icon: IconType;

    /**
     * Optional longer text providing context or detail.
     */
    description?: string;

    /**
     * Optional URL. If provided, the description will be rendered as a clickable link.
     */
    link?: string;

    /**
     * Tailwind CSS class applied to the icon (for example, text colour).
     */
    mainColour: string;

    /**
     * Tailwind CSS class applied to the background behind the icon.
     */
    bgColour: string;
};

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

/**
 * Represents a single blog topic or tag link.
 *
 * Used to create navigable topic chips or lists that
 * direct users to filtered blog views by tag.
 */
export type Topic = {
    /**
     * The display name or label for the topic (for example, "#React").
     */
    title: string;

    /**
     * The URL path or link target for the topic (usually internal).
     */
    link: string;
};
