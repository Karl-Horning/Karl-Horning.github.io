import { IconType } from "react-icons";
import { icons } from "./icons";

/**
 * Represents a single skill with a label, an icon, and a text colour class.
 */
type HomeSkills = {
    text: string;
    icon: IconType;
    colour: string;
};

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
export const homeSkills: HomeSkills[] = [
    {
        text: "JavaScript",
        icon: icons.javaScript,
        colour: "text-yellow-400",
    },
    {
        text: "React",
        icon: icons.react,
        colour: "text-blue-400",
    },
    {
        text: "Accessibility",
        icon: icons.accessibility,
        colour: "text-red",
    },
    {
        text: "SQL & APIs",
        icon: icons.database,
        colour: "text-orange-400",
    },
];
