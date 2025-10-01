import { icons } from "@/lib/constants/icons";
import { IconItem } from "@/types/IconItem";

const { AccessibilityIcon, ApiIcon, HigherEducationIcon, PerformanceIcon } =
    icons;

/**
 * Predefined highlight icons representing key technical and professional skills.
 *
 * Each highlight includes:
 * - A human-readable name
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
export const HighlightIcons: IconItem[] = [
    {
        name: "Accessibility-first",
        description: "WCAG-aware design, keyboard and screen-reader friendly.",
        icon: AccessibilityIcon,
        bgColour: "bg-primary/10 dark:bg-primary/70",
        mainColour: "text-primary dark:text-white",
    },
    {
        name: "API-driven",
        description: "REST/GraphQL, typed clients, tests and docs.",
        icon: ApiIcon,
        bgColour: "bg-blue-600/10 dark:bg-blue-600/40",
        mainColour: "text-secondary dark:text-white",
    },
    {
        name: "EdTech expertise",
        description: "LMS evaluation & adoption across HE settings.",
        icon: HigherEducationIcon,
        bgColour: "bg-purple-800/10 dark:bg-purple-800",
        mainColour: "text-purple-800 dark:text-white",
    },
    {
        name: "Performance & DX",
        description: "Vite/Next.js, sensible tooling, CI and quality gates.",
        icon: PerformanceIcon,
        bgColour: "bg-orange-800/10 dark:bg-orange-800/70",
        mainColour: "text-orange-800 dark:text-white",
    },
];
