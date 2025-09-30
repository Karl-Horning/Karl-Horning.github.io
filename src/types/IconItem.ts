import { IconType } from "react-icons";

/**
 * Represents an item that pairs a display name with an icon and optional styling.
 *
 * @property {string} name - The human-readable name or label for the item.
 * @property {IconType} icon - The associated React Icon component.
 * @property {string} [description] - Optional longer text describing the item's purpose or context.
 * @property {string} mainColour - A Tailwind CSS class applied to the icon (for example, text colour).
 * @property {string} bgColour - A Tailwind CSS class applied to the icon's background.
 */
export type IconItem = {
    name: string;
    icon: IconType;
    description?: string;
    mainColour: string;
    bgColour: string;
};
