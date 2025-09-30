import { icons } from "./icons";
import { Skill } from "@/types/AboutItem";

const { AccessibilityIcon, ApiIcon, DatabaseIcon, JavaScriptIcon } = icons;

/**
 * An array of skill objects displayed on the homepage.
 *
 * Each object includes:
 * - `text`: the name or label of the skill.
 * - `icon`: a React icon from `react-icons`.
 * - `colour`: a Tailwind class controlling the icon/text colour.
 *
 * @returns An array of skills to render on the homepage.
 */
export const homeSkills: Skill[] = [
    {
        name: "JavaScript",
        icon: JavaScriptIcon,
        colour: "text-yellow-400",
    },
    {
        name: "Accessibility",
        icon: AccessibilityIcon,
        colour: "text-custom-red",
    },
    {
        name: "SQL",
        icon: DatabaseIcon,
        colour: "text-orange-400",
    },
    {
        name: "APIs",
        icon: ApiIcon,
        colour: "text-sky-500",
    },
];
