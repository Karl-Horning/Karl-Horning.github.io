import type { BlogPost } from "@/types";
import "server-only";

export const meta = {
    title: "Setting Up Prettier with Tailwind CSS in a React Project (Without Forgetting Next Time)",
    description:
        "A quick walkthrough for setting up Prettier with Tailwind CSS in a new React project using either Next.js or Vite. Written mainly as a reminder to myself — but hopefully useful for others too.",
    date: "2025-08-04",
    readingTime: 4,
    slug: "setting-up-prettier-with-tailwind-css-in-a-react-project",
    thumbnail: {
        src: "/img/blog/prettier_tailwind.webp",
        alt: "The Next.js, React, Vite, Tailwind, and Prettier logos",
    },
    topics: [
        {
            title: "Prettier",
            link: "/blog/tag/prettier",
        },
        {
            title: "Tailwind CSS",
            link: "/blog/tag/tailwindcss",
        },
        {
            title: "React",
            link: "/blog/tag/react",
        },
        {
            title: "Next.js",
            link: "/blog/tag/nextjs",
        },
        {
            title: "Vite",
            link: "/blog/tag/vite",
        },
        {
            title: "JavaScript",
            link: "/blog/tag/javascript",
        },
        {
            title: "Frontend",
            link: "/blog/tag/frontend",
        },
    ],
    draft: false,
} as const satisfies BlogPost;
