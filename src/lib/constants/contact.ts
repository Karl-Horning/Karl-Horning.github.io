import { externalLinks, icons } from "./ui";
import { Icon } from "@/types";

const { CalendarIcon, ContactIcon, GitHubIcon, LinkedInIcon } = icons;
const { GitHubLink, LinkedInLink } = externalLinks;

/**
 * Centralised collection of contact methods and related details.
 *
 * Each item includes a title, optional description, icon, link,
 * and Tailwind CSS classes for consistent styling across light
 * and dark themes.
 *
 * Used in the `Contact` section to provide visitors with clear
 * ways to get in touch or connect on external platforms.
 */
export const contactItems: Icon[] = [
    {
        title: "Email",
        description: "test@example.com",
        link: "mailto:test@example.com",
        icon: ContactIcon,
        mainColour: "text-primary dark:text-white",
        bgColour: "bg-primary/10 dark:bg-primary",
    },
    {
        title: "LinkedIn",
        description: "/in/karl-horning",
        link: LinkedInLink,
        icon: LinkedInIcon,
        mainColour: "text-blue-700 dark:text-white",
        bgColour: "bg-slate-100 dark:bg-blue-700",
    },
    {
        title: "GitHub",
        description: "@Karl-Horning",
        link: GitHubLink,
        icon: GitHubIcon,
        mainColour: "text-black",
        bgColour: "bg-slate-100 dark:bg-white",
    },
    {
        title: "Availability",
        description: "Typically replies in 1-2 working days.",
        icon: CalendarIcon,
        mainColour: "text-primary dark:text-white",
        bgColour: "bg-primary/10 dark:bg-primary",
    },
];
