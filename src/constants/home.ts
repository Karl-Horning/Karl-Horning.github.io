import { icons } from "./icons";
import { Skill } from "@/types/about";

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
        icon: icons.javaScript,
        colour: "text-yellow-400",
    },
    {
        name: "React",
        icon: icons.react,
        colour: "text-blue-400",
    },
    {
        name: "Accessibility",
        icon: icons.accessibility,
        colour: "text-red",
    },
    {
        name: "SQL & APIs",
        icon: icons.database,
        colour: "text-orange-400",
    },
];
