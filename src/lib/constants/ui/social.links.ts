import { SocialLink } from "@/types";
import { internalRoutes } from "./internal.routes";
import { icons } from "./icons";
import { externalLinks } from "./external.links";

const { CodePenIcon, GitHubIcon, InfoIcon, LinkedInIcon, RssIcon } = icons;
const { HomeRoute, RssFeed } = internalRoutes;
const { CodePenLink, GitHubLink, LinkedInLink } = externalLinks;

/**
 * A collection of social navigation links, each with a label, URL, and icon.
 * Includes links to external profiles and internal routes.
 */
export const socialLinks: SocialLink[] = [
    {
        label: "KarlHorning.dev",
        href: HomeRoute,
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
        label: "CodePen",
        href: CodePenLink,
        icon: CodePenIcon,
    },
    {
        label: "RSS Feed",
        href: RssFeed,
        icon: RssIcon,
    },
];
