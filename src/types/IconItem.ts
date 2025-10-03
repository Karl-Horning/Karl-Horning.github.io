import { IconType } from "react-icons";

/**
 * Represents an item that combines a title, icon, and optional styling metadata.
 *
 * Used for values, sidebar entries, and other UI elements that pair
 * descriptive text with an icon and consistent Tailwind colour classes.
 */
export type IconItem = {
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
