import { icons } from "@/lib/constants/ui";
import { Icon } from "@/types";

const {
    BlackboardIcon,
    BrightspaceIcon,
    CanvasIcon,
    MoodleIcon,
    SitsVisionIcon,
    TurnitinIcon,
} = icons;

/**
 * Collection of technology items representing platforms and tools
 * used in higher education and EdTech.
 *
 * Each item includes a title, icon, and Tailwind CSS classes for
 * consistent styling across light and dark themes.
 *
 * Used in the `Technologies` section of the About page.
 */
export const technologyItems: Icon[] = [
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
