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

/**
 * Represents an organisation or technology logo used on the About page.
 *
 * Used for institutions (for example, universities) and platforms (for example, LMSs, tools).
 *
 * @property {string} name - The display name of the item.
 * @property {string} src - The path to the SVG or image logo.
 */
export type LogoItem = {
    name: string;
    src: string;
};

/**
 * Represents a single work experience entry used in the "Experience" section.
 */
export type WorkExperienceItem = {
    /**
     * The date range for the experience (for example, "2022–2024").
     */
    dates: string;

    /**
     * The job title held during this experience.
     */
    jobTitle: string;

    /**
     * The employer or organisation name.
     */
    employer: string;

    /**
     * The location of the role (for example, "London, UK").
     */
    location: string;

    /**
     * A short highlight, tag, or key skill displayed in a pill.
     */
    highlight: string;

    /**
     * A longer description providing more details about the role.
     */
    description: string;
};

/**
 * Represents a single certification or professional badge entry.
 *
 * Used to display achievements such as online course completions,
 * professional accreditations, or skill-based badges.
 */
export type CertificationItem = {
    /**
     * The name of the certification or badge.
     */
    title: string;

    /**
     * A short description or context about the certification.
     */
    body: string;

    /**
     * The date the certification was earned (for example, "2024-06-01").
     */
    date: string;

    /**
     * Path or URL to the image representing the certification badge.
     */
    image: string;

    /**
     * A URL to verify the certification, if available.
     */
    verification: string;
};
