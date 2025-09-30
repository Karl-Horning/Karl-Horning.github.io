import { icons } from "@/lib/constants/icons";
import { IconItem } from "@/types/IconItem";

const {
    AccessibilityIcon,
    GraphQlIcon,
    JavaScriptIcon,
    NodeJsIcon,
    PostgreSqlIcon,
    ReactIcon,
    TailwindIcon,
    TestingIcon,
    UsersIcon,
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
        mainColour: "text-yellow-600",
        bgColour: "bg-yellow-400/20",
    },
    {
        name: "Node.js",
        icon: NodeJsIcon,
        mainColour: "text-green-600",
        bgColour: "bg-green-400/20",
    },
    {
        name: "React",
        icon: ReactIcon,
        mainColour: "text-sky-600",
        bgColour: "bg-sky-400/20",
    },
    {
        name: "GraphQL",
        icon: GraphQlIcon,
        mainColour: "text-pink-600",
        bgColour: "bg-pink-400/20",
    },
    {
        name: "PostgreSQL",
        icon: PostgreSqlIcon,
        mainColour: "text-blue-600",
        bgColour: "bg-blue-400/20",
    },
    {
        name: "Agile",
        icon: UsersIcon,
        mainColour: "text-amber-600",
        bgColour: "bg-amber-400/20",
    },
    {
        name: "Accessibility",
        icon: AccessibilityIcon,
        mainColour: "text-violet-600",
        bgColour: "bg-violet-400/20",
    },
    {
        name: "API Testing",
        icon: TestingIcon,
        mainColour: "text-orange-600",
        bgColour: "bg-orange-400/20",
    },
    {
        name: "Tailwind CSS",
        icon: TailwindIcon,
        mainColour: "text-blue-600",
        bgColour: "bg-blue-400/20",
    },
];
