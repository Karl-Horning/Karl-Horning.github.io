import { Icon, Topic } from "@/types";
import { icons } from "./icons";
import { externalLinks, internalRoutes } from "./links";

const { BlogLink } = externalLinks;
const { HomeRoute, AboutRoute } = internalRoutes;
const { IdIcon, LocationIcon, RssIcon } = icons;

/**
 * Collection of quick navigation destinations used on the 404 page.
 *
 * Provides users with direct links to key sections of the site such as
 * Home, About, and Blog. Each item includes a title, short description,
 * icon, link, and Tailwind CSS classes for consistent styling in both
 * light and dark modes. Used by the `QuickDestinations` component.
 *
 * @constant
 * @type {Icon[]}
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
        link: BlogLink,
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
 *
 * @constant
 * @type {Topic[]}
 */
export const notFoundTopics: Topic[] = [
    { title: "#React", link: `${BlogLink}/tags/react/` },
    { title: "#Next.js", link: `${BlogLink}/tags/nextjs/` },
    { title: "#APIs", link: `${BlogLink}/tags/api/` },
    { title: "#JavaScript", link: `${BlogLink}/tags/javascript/` },
    { title: "#EdTech", link: `${BlogLink}/tags/edtech/` },
];
