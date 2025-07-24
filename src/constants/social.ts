import { IconType } from "react-icons";
import { icons } from "./icons";
import { externalLinks, internalRoutes } from "./links";

const { ContactIcon, GitHubIcon, InfoIcon, LinkedInIcon, RssIcon } = icons;
const { GitHubLink, LinkedInLink, RssLink } = externalLinks;
const { AboutRoute, ContactRoute } = internalRoutes;

/**
 * Represents a single social navigation item.
 */
type SocialLink = {
    label: string;
    href: string;
    icon: IconType;
};

/**
 * A collection of social navigation links, each with a label, URL, and icon.
 * Includes links to external profiles and internal routes.
 */
export const socialLinks: SocialLink[] = [
    {
        label: "About",
        href: AboutRoute,
        icon: InfoIcon,
    },
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
