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

/**
 * Represents a registry of icon components.
 *
 * Maps string keys to `react-icons` components (`IconType`),
 * allowing consistent access to icons across the site.
 *
 * Used to type the central `icons` object in `constants/icons.ts`.
 */
export type IconRegistry = Record<string, IconType>;

/**
 * Represents a single navigation link used in site menus or headers.
 *
 * Each entry includes a text label and its associated URL or route.
 * Used in the main navigation and footer to create link lists.
 */
export type NavLink = {
    /** The visible text displayed for the link */
    label: string;

    /** The internal or external URL path the link points to */
    href: string;
};

/**
 * Represents a collection of named URL paths.
 *
 * Used for defining centralised external links and internal routes
 * to ensure consistent use of URLs throughout the site.
 */
export type SiteLink = Record<string, string>;

/**
 * Represents a social or contact link with an associated icon.
 *
 * Each entry includes a label, link, and `react-icons` component
 * for visual display. Commonly used for footer or contact sections.
 */
export type SocialLink = {
    /** The display name of the social or contact platform */
    label: string;

    /** The URL or mailto link for the platform */
    href: string;

    /** The `react-icons` component representing the platform visually */
    icon: IconType;
};
