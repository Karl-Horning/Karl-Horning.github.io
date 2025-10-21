import { SocialLink } from "@/types";
import { internalRoutes } from "./internal.routes";
import { icons } from "./icons";
import { externalLinks } from "./external.links";

/**
 * A collection of social navigation links, each with a label, URL, and icon.
 * Includes links to external profiles and internal routes.
 */
export const socialLinks: SocialLink[] = [
    {
        label: "About",
        href: internalRoutes.AboutRoute,
        icon: icons.InfoIcon,
    },
    {
        label: "GitHub",
        href: externalLinks.GitHubLink,
        icon: icons.GitHubIcon,
    },
    {
        label: "LinkedIn",
        href: externalLinks.LinkedInLink,
        icon: icons.LinkedInIcon,
    },
    {
        label: "Contact",
        href: internalRoutes.ContactRoute,
        icon: icons.ContactIcon,
    },
    {
        label: "RSS Feed",
        href: internalRoutes.RssFeed,
        icon: icons.RssIcon,
    },
];
