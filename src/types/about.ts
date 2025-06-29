import { IconType } from "react-icons";

/**
 * Represents a skill displayed on the About page.
 *
 * @property {string} name - The display name of the skill.
 * @property {IconType} icon - The icon associated with the skill, from react-icons.
 * @property {string} bgColour - The Tailwind colour class used for styling.
 */
export type Skill = {
    name: string;
    icon: IconType;
    colour: string;
};

/**
 * Represents a personal or professional value displayed on the About page.
 *
 * @property {string} title - The title or name of the value.
 * @property {IconType} icon - The icon visually representing the value.
 * @property {string} description - A short explanation or statement of the value.
 */
export type Value = {
    title: string;
    icon: IconType;
    description: string;
};
