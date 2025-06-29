import { IconType } from "react-icons";
import { icons } from "./icons";
import { externalLinks, internalRoutes } from "./links";

/**
 * Represents a single footer navigation item.
 */
type FooterLink = {
    label: string;
    href: string;
    icon: IconType;
};

/**
 * A collection of footer navigation links, each with a label, URL, and icon.
 * Includes links to external profiles and internal routes.
 */
export const footerLinks: FooterLink[] = [
    {
        label: "GitHub",
        href: externalLinks.gitHub,
        icon: icons.gitHub,
    },
    {
        label: "LinkedIn",
        href: externalLinks.linkedIn,
        icon: icons.linkedIn,
    },
    {
        label: "Contact",
        href: internalRoutes.contact,
        icon: icons.contact,
    },
    {
        label: "RSS Feed",
        href: internalRoutes.rss,
        icon: icons.rss,
    },
];
