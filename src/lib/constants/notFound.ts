import { Icon, Topic } from "@/types";
import { icons, internalRoutes } from "./ui";

const { HomeRoute, AboutRoute, BlogRoute } = internalRoutes;
const { IdIcon, LocationIcon, RssIcon } = icons;

/**
 * Collection of quick navigation destinations used on the 404 page.
 *
 * Provides users with direct links to key sections of the site such as
 * Home, About, and Blog. Each item includes a title, short description,
 * icon, link, and Tailwind CSS classes for consistent styling in both
 * light and dark modes. Used by the `QuickDestinations` component.
 */
export const quickDestinationItems: Icon[] = [
    {
        title: "Home",
        description: "Start here",
        link: HomeRoute,
        icon: LocationIcon,
        mainColour: "text-secondary dark:text-white",
        bgColour: "bg-blue-600/10 dark:bg-secondary",
    },
    {
        title: "About",
        description: "Who I am",
        link: AboutRoute,
        icon: IdIcon,
        mainColour: "text-secondary dark:text-white",
        bgColour: "bg-blue-600/10 dark:bg-secondary",
    },
    {
        title: "Blog",
        description: "Latest posts",
        link: BlogRoute,
        icon: RssIcon,
        mainColour: "text-secondary dark:text-white",
        bgColour: "bg-blue-600/10 dark:bg-secondary",
    },
];

/**
 * Collection of popular blog topics used for tag-style navigation.
 *
 * Each item includes a title representing a tag and a link to its
 * corresponding filtered view on the blog. Commonly displayed as
 * clickable chips or badges for quick topic access.
 */
export const notFoundTopics: Topic[] = [
    { title: "#React", link: `${BlogRoute}/tags/react/` },
    { title: "#Next.js", link: `${BlogRoute}/tags/nextjs/` },
    { title: "#APIs", link: `${BlogRoute}/tags/api/` },
    { title: "#JavaScript", link: `${BlogRoute}/tags/javascript/` },
    { title: "#EdTech", link: `${BlogRoute}/tags/edtech/` },
];
