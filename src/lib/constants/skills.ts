import { icons } from "@/lib/constants/icons";
import { IconItem } from "@/types/IconItem";

const {
    GraphQlIcon,
    JavaScriptIcon,
    NodeJsIcon,
    PostgreSqlIcon,
    ReactIcon,
    TailwindIcon,
} = icons;

/**
 * Array of skill objects representing technical and professional skills.
 * Each skill includes a name, an icon component, and Tailwind CSS main and background colour classes.
 *
 * @type {Array<{
 *   name: string,
 *   icon: IconType,
 *   mainColour: string
 *   bgColour: string
 * }>}
 */
export const SkillsIcons: IconItem[] = [
    {
        name: "JavaScript",
        icon: JavaScriptIcon,
        mainColour: "text-yellow-600 dark:text-white",
        bgColour: "bg-yellow-400/20 dark:bg-yellow-600",
    },
    {
        name: "Node.js",
        icon: NodeJsIcon,
        mainColour: "text-green-600 dark:text-white",
        bgColour: "bg-green-400/20 dark:bg-green-600",
    },
    {
        name: "React/Next.js",
        icon: ReactIcon,
        mainColour: "text-sky-600 dark:text-white",
        bgColour: "bg-sky-400/20 dark:bg-sky-600",
    },
    {
        name: "GraphQL",
        icon: GraphQlIcon,
        mainColour: "text-pink-600 dark:text-white",
        bgColour: "bg-pink-400/20 dark:bg-pink-600",
    },
    {
        name: "PostgreSQL",
        icon: PostgreSqlIcon,
        mainColour: "text-blue-600 dark:text-white",
        bgColour: "bg-blue-400/20 dark:bg-blue-600",
    },
    {
        name: "Tailwind CSS",
        icon: TailwindIcon,
        mainColour: "text-blue-600 dark:text-white",
        bgColour: "bg-blue-400/20 dark:bg-blue-600",
    },
];
