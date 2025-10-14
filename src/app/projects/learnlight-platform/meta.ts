import type { ProjectMeta } from "@/types";
import "server-only";

export const meta = {
    slug: "learnlight-platform",
    title: "Learnlight Platform & Mobile Apps",
    date: "2025-10-14",
    readingTime: 5,
    topics: ["GraphQL", "API", "EdTech"],
    description:
        "Full-Stack JavaScript Developer (Backend Focus) at Learnlight (2021-2024). Built and maintained the GraphQL API powering Learnlight's web and mobile learning platforms, improving performance, scalability, and reliability for 700k+ learners worldwide.",
    thumbnail: {
        src: "/img/screenshots/learnlight-platform.webp",
        alt: "Learnlight platform homepage",
    },
    repo: "",
    draft: true,
} as const satisfies ProjectMeta;
