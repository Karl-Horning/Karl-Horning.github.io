import type { ProjectMeta } from "@/types";
import "server-only";

export const meta = {
    slug: "learnlight-platform",
    title: "Learnlight Platform & Mobile Apps",
    date: "2025-10-14",
    readingTime: 8,
    topics: ["GraphQL", "API", "EdTech"],
    description:
        "Full-Stack JavaScript Developer (Backend Focus) at Learnlight (2021-2024). Built and optimised the Apollo-based GraphQL API powering Learnlight's global learning platform, improving scalability, reliability, and developer efficiency for 700k+ registered learners across 180+ countries.",
    thumbnail: {
        src: "/img/screenshots/learnlight-platform.webp",
        alt: "Learnlight platform homepage",
    },
    repo: "",
    draft: false,
} as const satisfies ProjectMeta;
