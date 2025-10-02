import { icons } from "@/lib/constants/icons";
import { LogoItem, Skill, Value, WorkExperienceItem } from "@/types/AboutItem";

const {
    AccessibilityIcon,
    CodeIcon,
    GraphQlIcon,
    JavaScriptIcon,
    LearningIcon,
    NodeJsIcon,
    PostgreSqlIcon,
    ReactIcon,
    TailwindIcon,
    TestingIcon,
    ToolsIcon,
    UsersIcon,
} = icons;

/**
 * Array of skill objects representing technical and professional skills.
 * Each skill includes a name, an icon component, and a Tailwind CSS background colour class.
 *
 * @type {Array<{
 *   name: string,
 *   icon: IconType,
 *   bgColour: string
 * }>}
 */
export const aboutSkills: Skill[] = [
    {
        name: "JavaScript",
        icon: JavaScriptIcon,
        colour: "bg-yellow-600",
    },
    {
        name: "Node.js",
        icon: NodeJsIcon,
        colour: "bg-green-700",
    },
    {
        name: "React",
        icon: ReactIcon,
        colour: "bg-blue-700",
    },
    {
        name: "GraphQL",
        icon: GraphQlIcon,
        colour: "bg-pink-700",
    },
    {
        name: "PostgreSQL",
        icon: PostgreSqlIcon,
        colour: "bg-blue-900",
    },
    {
        name: "Agile",
        icon: UsersIcon,
        colour: "bg-amber-600",
    },
    {
        name: "Accessibility",
        icon: AccessibilityIcon,
        colour: "bg-violet-800",
    },
    {
        name: "API Testing",
        icon: TestingIcon,
        colour: "bg-orange-700",
    },
    {
        name: "Tailwind CSS",
        icon: TailwindIcon,
        colour: "bg-blue-700",
    },
];

/**
 * Array of value objects representing personal and professional values.
 * Each value includes a title, an icon component, and a descriptive string.
 *
 * @type {Array<{
 *   title: string,
 *   icon: IconType,
 *   description: string
 * }>}
 */
export const aboutValues: Value[] = [
    {
        title: "Accessibility",
        icon: AccessibilityIcon,
        description: "Building accessible, inclusive interfaces for everyone",
    },
    {
        title: "Clear Code",
        icon: CodeIcon,
        description:
            "Clear, maintainable code that future-me (or someone else) can understand",
    },
    {
        title: "Collaboration",
        icon: UsersIcon,
        description: "Collaborative problem-solving and honest communication",
    },
    {
        title: "Right Tools",
        icon: ToolsIcon,
        description:
            "Using the right tool for the job and knowing when to keep things simple",
    },
    {
        title: "Lifelong Learning",
        icon: LearningIcon,
        description: "Lifelong learning, always exploring new skills and ideas",
    },
];

/**
 * Array of learning technologies used at different universities.
 * Each object includes a display name and path to the logo SVG.
 */
export const aboutTechnologies: LogoItem[] = [
    {
        name: "Blackboard",
        src: "/img/technologies/blackboard-by-anthology.svg",
    },
    {
        name: "Brightspace",
        src: "/img/technologies/brightspace-logo.svg",
    },
    {
        name: "Canvas",
        src: "/img/technologies/canvas-logo.svg",
    },
    {
        name: "Moodle",
        src: "/img/technologies/moodle-logo.svg",
    },
    {
        name: "Turnitin",
        src: "/img/technologies/turnitin-logo.svg",
    },
    {
        name: "SITS:Vision",
        src: "/img/technologies/sits-vision-logo.svg",
    },
];

/**
 * Array of institutions where work has been carried out.
 * Each object includes the institution name and the path to its logo SVG.
 */
export const aboutInstitutions: LogoItem[] = [
    {
        name: "Imperial College London",
        src: "/img/institutions/imperial-logo.svg",
    },
    {
        name: "Kingston University",
        src: "/img/institutions/kingston-university-logo.svg",
    },
    {
        name: "City St George's, University of London",
        src: "/img/institutions/city-st-georges-logo.svg",
    },
    {
        name: "University of Roehampton",
        src: "/img/institutions/roehampton-logo.svg",
    },
];

/**
 * Array of awarded badges and certifications.
 * Each object includes the award name and the path to its logo SVG.
 */
export const aboutBadges: LogoItem[] = [
    {
        name: "Jira Fundamentals",
        src: "/img/badges/atlassian-university-badge.png",
    },
    {
        name: "Dyslexia Awareness",
        src: "/img/badges/dyslexia-awareness-badge.svg",
    },
    {
        name: "Apple Teacher",
        src: "/img/badges/apple-teacher-swift-playgrounds-badge.svg",
    },
];

/**
 * A list of work experience entries displayed in the "Experience" section.
 *
 * Each entry contains:
 * - A date range
 * - A job title, employer, and location
 * - A highlight (displayed as a pill)
 * - A description of responsibilities and achievements
 *
 * Used by the `Experience` component to render `ExperienceCard` items.
 */
export const workExperience: WorkExperienceItem[] = [
    {
        dates: "2022 — Present",
        jobTitle: "Learning Technologist",
        employer: "Imperial College London",
        location: "Hybrid/London, UK",
        highlight: "EdTech",
        description:
            "LMS evaluation and rollout, API integrations, staff/student adoption.",
    },
    {
        dates: "2021 — Present",
        jobTitle: "Full-stack Developer",
        employer: "Freelance & side projects",
        location: "Remote",
        highlight: "Full-stack",
        description:
            "React/Next.js, Node/Express, PostgreSQL, accessibility-focused UI.",
    },
];
