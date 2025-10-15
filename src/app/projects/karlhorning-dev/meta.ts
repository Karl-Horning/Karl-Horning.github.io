import type { ProjectMeta } from "@/types";
import "server-only";

export const meta = {
    slug: "karlhorning-dev",
    title: "KarlHorning.dev - Building a Modern, Accessible Developer Portfolio",
    date: "2025-10-15",
    readingTime: 6,
    topics: [
        "Next.js",
        "TypeScript",
        "Accessibility",
        "Tailwind CSS",
        "Portfolio",
    ],
    description:
        "A TypeScript-based Next.js portfolio focused on accessibility, performance, and clean documentation.",
    thumbnail: {
        src: "/img/projects/karlhorning-dev.webp",
        alt: "Screenshot of Karl Horning's portfolio homepage",
    },
    repo: "https://github.com/Karl-Horning/Karl-Horning.github.io",
    draft: true,
} as const satisfies ProjectMeta;
