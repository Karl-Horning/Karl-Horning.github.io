import { icons } from "@/lib/constants/ui";
import { Icon } from "@/types";

const {
    GraphQlIcon,
    JavaScriptIcon,
    NodeJsIcon,
    PostgreSqlIcon,
    ReactIcon,
    TailwindIcon,
} = icons;

/**
 * Centralised collection of technical and professional skills.
 *
 * Each skill item includes a title, corresponding icon component,
 * and Tailwind CSS classes for consistent colour styling across
 * light and dark themes.
 *
 * Used in the Skills section to visually represent key development
 * technologies and frameworks.
 */
export const SkillsIcons: Icon[] = [
    {
        title: "JavaScript",
        icon: JavaScriptIcon,
        mainColour: "text-yellow-600 dark:text-white",
        bgColour: "bg-yellow-400/20 dark:bg-yellow-600",
    },
    {
        title: "Node.js",
        icon: NodeJsIcon,
        mainColour: "text-green-600 dark:text-white",
        bgColour: "bg-green-400/20 dark:bg-green-600",
    },
    {
        title: "React",
        icon: ReactIcon,
        mainColour: "text-sky-600 dark:text-white",
        bgColour: "bg-sky-400/20 dark:bg-sky-600",
    },
    {
        title: "GraphQL",
        icon: GraphQlIcon,
        mainColour: "text-pink-600 dark:text-white",
        bgColour: "bg-pink-400/20 dark:bg-pink-600",
    },
    {
        title: "SQL",
        icon: PostgreSqlIcon,
        mainColour: "text-blue-600 dark:text-white",
        bgColour: "bg-blue-400/20 dark:bg-blue-600",
    },
    {
        title: "Tailwind",
        icon: TailwindIcon,
        mainColour: "text-blue-600 dark:text-white",
        bgColour: "bg-blue-400/20 dark:bg-blue-600",
    },
];
