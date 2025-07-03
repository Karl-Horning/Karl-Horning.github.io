import { IconType } from "react-icons";
import { icons } from "./icons";
import { externalLinks, internalRoutes } from "./links";

const { ContactIcon, GitHubIcon, LinkedInIcon, RssIcon } = icons;
const { GitHubLink, LinkedInLink, RssLink } = externalLinks;
const { ContactRoute } = internalRoutes;

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
        href: GitHubLink,
        icon: GitHubIcon,
    },
    {
        label: "LinkedIn",
        href: LinkedInLink,
        icon: LinkedInIcon,
    },
    {
        label: "Contact",
        href: ContactRoute,
        icon: ContactIcon,
    },
    {
        label: "RSS Feed",
        href: RssLink,
        icon: RssIcon,
    },
];
