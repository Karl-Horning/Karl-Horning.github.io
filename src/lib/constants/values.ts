import { IconItem } from "@/types/IconItem";
import { icons } from "@/lib/constants/icons";

const { AccessibilityIcon, CodeIcon, LearningIcon, ToolsIcon, UsersIcon } =
    icons;

/**
 * Array of value objects representing personal and professional values.
 * Each value includes a title, an icon component, descriptive text,
 * and Tailwind classes for icon and background colours.
 */
export const aboutValues: IconItem[] = [
    {
        title: "Accessibility",
        icon: AccessibilityIcon,
        description: "Building accessible, inclusive interfaces for everyone",
        mainColour: "text-violet-600",
        bgColour: "bg-violet-400/20",
    },
    {
        title: "Clear Code",
        icon: CodeIcon,
        description:
            "Clear, maintainable code that future-me (or someone else) can understand",
        mainColour: "text-emerald-600",
        bgColour: "bg-emerald-400/20",
    },
    {
        title: "Collaboration",
        icon: UsersIcon,
        description: "Collaborative problem-solving and honest communication",
        mainColour: "text-orange-600",
        bgColour: "bg-orange-400/20",
    },
    {
        title: "Right Tools",
        icon: ToolsIcon,
        description:
            "Using the right tool for the job and knowing when to keep things simple",
        mainColour: "text-sky-600",
        bgColour: "bg-sky-400/20",
    },
    {
        title: "Lifelong Learning",
        icon: LearningIcon,
        description: "Lifelong learning, always exploring new skills and ideas",
        mainColour: "text-pink-600",
        bgColour: "bg-pink-400/20",
    },
];
