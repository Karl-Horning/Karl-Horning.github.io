import { icons } from "@/constants/icons";
import { Skill, Value } from "@/types/about";

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
        icon: icons.javaScript,
        bgColour: "bg-yellow-600",
    },
    {
        name: "Node.js",
        icon: icons.nodeJs,
        bgColour: "bg-green-700",
    },
    {
        name: "React",
        icon: icons.react,
        bgColour: "bg-blue-700",
    },
    {
        name: "GraphQL",
        icon: icons.graphQl,
        bgColour: "bg-pink-700",
    },
    {
        name: "PostgreSQL",
        icon: icons.postgreSql,
        bgColour: "bg-blue-900",
    },
    {
        name: "Agile",
        icon: icons.users,
        bgColour: "bg-amber-600",
    },
    {
        name: "Accessibility",
        icon: icons.accessibility,
        bgColour: "bg-violet-800",
    },
    {
        name: "API Testing",
        icon: icons.testing,
        bgColour: "bg-orange-700",
    },
    {
        name: "Tailwind CSS",
        icon: icons.tailwind,
        bgColour: "bg-blue-700",
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
        icon: icons.accessibility,
        description: "Building accessible, inclusive interfaces for everyone",
    },
    {
        title: "Clear Code",
        icon: icons.code,
        description:
            "Clear, maintainable code that future-me (or someone else) can understand",
    },
    {
        title: "Collaboration",
        icon: icons.users,
        description: "Collaborative problem-solving and honest communication",
    },
    {
        title: "Right Tools",
        icon: icons.tools,
        description:
            "Using the right tool for the job and knowing when to keep things simple",
    },
    {
        title: "Lifelong Learning",
        icon: icons.learning,
        description: "Lifelong learning, always exploring new skills and ideas",
    },
];
