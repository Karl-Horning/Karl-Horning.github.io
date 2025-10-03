import { icons } from "@/lib/constants/icons";
import { CertificationItem, WorkExperienceItem } from "@/types/AboutItem";
import { IconItem } from "@/types/IconItem";
import { cmaltEvidence } from "./cmalt";

const { certificates } = cmaltEvidence;
const { celtaCertificate, ptllsCertificate } = certificates;
const {
    AccessibilityIcon,
    ApiIcon,
    BlackboardIcon,
    BrightspaceIcon,
    CanvasIcon,
    CodeIcon,
    HigherEducationIcon,
    HireMeIcon,
    LocationIcon,
    MoodleIcon,
    PerformanceIcon,
    SitsVisionIcon,
    TurnitinIcon,
} = icons;

/**
 * Collection of professional certifications and badges.
 *
 * Each item includes metadata such as the certification title,
 * issuing organisation, date earned, badge image, and a link
 * for external verification. Used in the Certifications section
 * to showcase validated skills and achievements.
 *
 * @constant
 * @type {CertificationItem[]}
 */
export const certificationItems: CertificationItem[] = [
    {
        title: "Jira Fundamentals",
        body: "Atlassian University",
        date: "2024-08-15",
        image: "/img/badges/atlassian-university-badge.png",
        verification:
            "https://university.atlassian.com/student/award/RhE4JXVHSg7trwMkqLsi6pE4",
    },
    {
        title: "Registered Scrum Basics",
        body: "Scrum Inc.",
        date: "2025-09-30",
        image: "/img/badges/registered-scrum-basics-badge.png",
        verification: "https://s3.amazonaws.com/scruminc-certs/RSB-8515474",
    },
    {
        title: "Dyslexia Awareness",
        body: "Made By Dyslexia",
        date: "2025-09-05",
        image: "/img/badges/dyslexia-awareness-badge.svg",
        verification:
            "https://learn.microsoft.com/en-us/users/karlhorning-7806/achievements/uyj64lz3",
    },
    {
        title: "Certificate in Teaching English to Speakers of Other Languages (CELTA)",
        body: "University of Cambridge",
        date: "2013-11-22",
        image: "/img/badges/cambridge-badge.png",
        verification: celtaCertificate,
    },
    {
        title: "Preparing to Teach in the Lifelong Learning Sector (PTLLS) Level 4",
        body: "City & Guilds",
        date: "2012-08-29",
        image: "/img/badges/city-and-guilds-badge.png",
        verification: ptllsCertificate,
    },
    {
        title: "Apple Teacher with Swift Playgrounds",
        body: "Apple",
        date: "2025-06-06",
        image: "/img/badges/apple-teacher-swift-playgrounds-badge.png",
        verification: "",
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
        image: "/img/institutions/imperial-logo.svg",
    },
    {
        dates: "2021 — Present",
        jobTitle: "Full-stack Developer",
        employer: "Freelance & side projects",
        location: "Remote",
        highlight: "Full-stack",
        description:
            "React/Next.js, Node/Express, PostgreSQL, accessibility-focused UI.",
        image: "/android-chrome-512x512.png",
    },
];
