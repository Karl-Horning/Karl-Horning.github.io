import { icons } from "@/lib/constants/ui";
import { Icon } from "@/types";

const {
    AccessibilityIcon,
    ApiIcon,
    GraphQlIcon,
    HigherEducationIcon,
    JavaScriptIcon,
    NodeJsIcon,
    PerformanceIcon,
    PostgreSqlIcon,
    ReactIcon,
    TailwindIcon,
} = icons;

/**
 * Predefined highlight icons representing key technical and professional skills.
 *
 * Each highlight includes:
 * - A human-readable title
 * - A short description
 * - An associated SVG icon component
 * - Tailwind CSS classes for text and background colours
 *
 * These icons are rendered in the `Highlights` component to display
 * a responsive grid of skill cards on the homepage.
 *
 * @remarks
 * The colour classes support both light and dark modes, using Tailwind's
 * `dark:` variants for dynamic theming.
 */
export const HighlightIcons: Icon[] = [
    {
        title: "Accessibility-first",
        description: "WCAG-aware design, keyboard and screen-reader friendly.",
        icon: AccessibilityIcon,
        bgColour: "bg-primary/10 dark:bg-primary",
        mainColour: "text-primary dark:text-white",
    },
    {
        title: "API-driven",
        description: "REST/GraphQL, typed clients, tests and docs.",
        icon: ApiIcon,
        bgColour: "bg-blue-600/10 dark:bg-secondary",
        mainColour: "text-secondary dark:text-white",
    },
    {
        title: "EdTech expertise",
        description: "LMS evaluation & adoption across HE settings.",
        icon: HigherEducationIcon,
        bgColour: "bg-purple-800/10 dark:bg-purple-800",
        mainColour: "text-purple-800 dark:text-white",
    },
    {
        title: "Performance & DX",
        description: "Vite/Next.js, sensible tooling, CI and quality gates.",
        icon: PerformanceIcon,
        bgColour: "bg-orange-600/10 dark:bg-orange-600",
        mainColour: "text-orange-600 dark:text-white",
    },
];

/**
 * Centralised collection of technical and professional skills.
 *
 * Each skill item includes a title, corresponding icon component,
 * and Tailwind CSS classes for consistent colour styling across
 * light and dark themes.
 *
 * Used in the Skills section to visually represent key development
 * technologies and frameworks.
 */
export const SkillsIcons: Icon[] = [
    {
        title: "JavaScript",
        icon: JavaScriptIcon,
        mainColour: "text-yellow-600 dark:text-white",
        bgColour: "bg-yellow-400/20 dark:bg-yellow-600",
    },
    {
        title: "Node.js",
        icon: NodeJsIcon,
        mainColour: "text-green-600 dark:text-white",
        bgColour: "bg-green-400/20 dark:bg-green-600",
    },
    {
        title: "React/Next.js",
        icon: ReactIcon,
        mainColour: "text-sky-600 dark:text-white",
        bgColour: "bg-sky-400/20 dark:bg-sky-600",
    },
    {
        title: "GraphQL",
        icon: GraphQlIcon,
        mainColour: "text-pink-600 dark:text-white",
        bgColour: "bg-pink-400/20 dark:bg-pink-600",
    },
    {
        title: "PostgreSQL",
        icon: PostgreSqlIcon,
        mainColour: "text-blue-600 dark:text-white",
        bgColour: "bg-blue-400/20 dark:bg-blue-600",
    },
    {
        title: "Tailwind CSS",
        icon: TailwindIcon,
        mainColour: "text-blue-600 dark:text-white",
        bgColour: "bg-blue-400/20 dark:bg-blue-600",
    },
];
