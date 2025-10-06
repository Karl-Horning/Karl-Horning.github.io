import { ProjectMeta } from "@/types";
import "server-only";

export const meta = {
    slug: "generic-project",
    title: "Generic Project — Case Study Template ",
    date: "2025-09-11",
    readingTime: 5,
    topics: ["React", "API", "Accessibility"],
    description:
        "Use this as a scaffold for any project. Replace the placeholder copy with your own and keep the sections concise and outcomes‑focused.",
    thumbnail: {
        src: "/img/screenshots/example.jpg",
        alt: "Project cover image",
    },
    repo: "Karl-Horning.github.io",
    draft: false,
} as const satisfies ProjectMeta;
