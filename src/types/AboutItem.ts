import { IconType } from "react-icons";

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
