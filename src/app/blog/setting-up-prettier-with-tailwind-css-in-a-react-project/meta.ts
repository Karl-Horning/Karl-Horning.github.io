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
        "Prettier",
        "Tailwind CSS",
        "React",
        "Next.js",
        "Vite",
        "JavaScript",
    ],
    draft: false,
} as const satisfies BlogPost;
