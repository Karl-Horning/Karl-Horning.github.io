import { icons } from "@/lib/constants/ui";
import { Icon } from "@/types";

const { AccessibilityIcon, ApiIcon, HireMeIcon, PerformanceIcon } = icons;

/**
 * Collection of value items representing key personal and professional principles.
 *
 * Each item includes a title, description, and icon with Tailwind CSS classes
 * for consistent styling across light and dark themes.
 *
 * Used in the `Values` component to render the "What I value" grid.
 */
export const valueItems: Icon[] = [
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
