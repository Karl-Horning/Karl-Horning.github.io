import { icons } from "@/lib/constants/icons";
import { LogoItem, Skill, Value, WorkExperienceItem } from "@/types/AboutItem";
import { IconItem } from "@/types/IconItem";

const {
    AccessibilityIcon,
    ApiIcon,
    BlackboardIcon,
    BrightspaceIcon,
    CanvasIcon,
    CodeIcon,
    GraphQlIcon,
    HigherEducationIcon,
    HireMeIcon,
    JavaScriptIcon,
    LearningIcon,
    LocationIcon,
    MoodleIcon,
    NodeJsIcon,
    PerformanceIcon,
    PostgreSqlIcon,
    ReactIcon,
    SitsVisionIcon,
    TailwindIcon,
    TestingIcon,
    ToolsIcon,
    TurnitinIcon,
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
 * Collection of technology items representing platforms and tools
 * used in higher education and EdTech.
 *
 * Each item includes a title, icon, and Tailwind CSS classes for
 * consistent styling across light and dark themes. Used in the
 * `Technologies` section of the About page.
 *
 * @constant
 * @type {IconItem[]}
 */
export const technologyItems: IconItem[] = [
    {
        title: "Blackboard",
        icon: BlackboardIcon,
        mainColour: "text-blue-800 dark:text-white",
        bgColour: "bg-blue-800/10 dark:bg-blue-800",
    },
    {
        title: "Moodle",
        icon: MoodleIcon,
        mainColour: "text-orange-600 dark:text-white",
        bgColour: "bg-orange-600/10 dark:bg-orange-600",
    },
    {
        title: "Canvas",
        icon: CanvasIcon,
        mainColour: "text-red-600 dark:text-white",
        bgColour: "bg-red-600/10 dark:bg-red-600",
    },
    {
        title: "Turnitin",
        icon: TurnitinIcon,
        mainColour: "text-blue-600 dark:text-white",
        bgColour: "bg-blue-600/10 dark:bg-blue-600",
    },
    {
        title: "Brightspace",
        icon: BrightspaceIcon,
        mainColour: "text-orange-600 dark:text-white",
        bgColour: "bg-orange-600/10 dark:bg-orange-600",
    },
    {
        title: "SITS:Vision",
        icon: SitsVisionIcon,
        mainColour: "text-blue-500 dark:text-white",
        bgColour: "bg-blue-500/10 dark:bg-blue-500",
    },
];

/**
 * Collection of value items that represent personal and professional principles.
 *
 * Each item includes a title, description, icon, and Tailwind CSS classes
 * for consistent styling across light and dark themes. Used in the
 * `Values` component to render the "What I value" grid.
 *
 * @constant
 * @type {IconItem[]}
 */
export const valueItems: IconItem[] = [
    {
        title: "Inclusive by default",
        description: "WCAG-aware patterns, keyboard support and good copy.",
        icon: AccessibilityIcon,
        mainColour: "text-primary dark:text-white",
        bgColour: "bg-primary/10 dark:bg-primary",
    },
    {
        title: "APIs as products",
        description: "Typed clients, clear docs, sensible versioning.",
        icon: ApiIcon,
        mainColour: "text-secondary dark:text-white",
        bgColour: "bg-blue-600/10 dark:bg-secondary",
    },
    {
        title: "Calm collaboration",
        description: "Small feedback loops. Honest communication.",
        icon: HireMeIcon,
        mainColour: "text-yellow-600 dark:text-white",
        bgColour: "bg-yellow-600/10 dark:bg-yellow-700",
    },
    {
        title: "Performance & DX",
        description: "Fast UIs, fast builds, tests that matter.",
        icon: PerformanceIcon,
        mainColour: "text-green-600 dark:text-white",
        bgColour: "bg-green-600/10 dark:bg-green-700",
    },
];

/**
 * Sidebar items for the biography section.
 *
 * Each item represents a key piece of personal or professional
 * information, such as location, sector experience, technical
 * skills, or focus areas. Items are displayed with an icon and
 * styled consistently for light and dark themes.
 *
 * @constant
 * @type {IconItem[]}
 */
export const bioSidebarItems: IconItem[] = [
    {
        title: "London, UK",
        icon: LocationIcon,
        mainColour: "text-secondary dark:text-white",
        bgColour: "bg-blue-600/10 dark:bg-secondary",
    },
    {
        title: "HE & EdTech, Blackboard/Brightspace/Canvas",
        icon: HigherEducationIcon,
        mainColour: "text-secondary dark:text-white",
        bgColour: "bg-blue-600/10 dark:bg-secondary",
    },
    {
        title: "JS/TS, React/Next, Node, Postgres, GraphQL/APIs",
        icon: CodeIcon,
        mainColour: "text-secondary dark:text-white",
        bgColour: "bg-blue-600/10 dark:bg-secondary",
    },
    {
        title: "Accessibility & performance",
        icon: AccessibilityIcon,
        mainColour: "text-secondary dark:text-white",
        bgColour: "bg-blue-600/10 dark:bg-secondary",
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
 * @constant
 * @type {WorkExperienceItem[]}
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
