import type { ProjectMeta } from "@/types";
import "server-only";

export const meta = {
    slug: "developer-portfolio",
    title: "Developer Portfolio",
    date: "2025-10-07",
    readingTime: 5,
    topics: ["Next.js", "TypeScript", "Tailwind CSS"],
    description:
        "My personal portfolio, built with Next.js, TypeScript, and Tailwind CSS, showcases my work, values, and technical skills through a clean, accessible, and high-performance design. It scores 90+ across all Lighthouse categories and reflects my focus on thoughtful development, usability, and attention to detail.",
    thumbnail: {
        src: "/img/projects/example.jpg",
        alt: "Project cover image",
    },
    repo: "Karl-Horning.github.io",
    draft: true,
} as const satisfies ProjectMeta;
