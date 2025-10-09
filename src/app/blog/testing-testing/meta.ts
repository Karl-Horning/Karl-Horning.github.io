import { BlogPost } from "@/types";
import "server-only";

export const meta = {
    title: "Testing, Testing",
    description:
        "A light-hearted post about testing my new blog, tweaking layouts, and checking how everything fits together.",
    date: "2025-06-23",
    readingTime: 2,
    slug: "testing-testing",
    thumbnail: {
        src: "/img/blog/pexels-mali-63238.optimised.webp",
        alt: "Graffiti of a monkey wearing sunglasses (placeholder image)",
    },
    topics: [
        {
            title: "meta",
            link: "/blog/tag/meta",
        },
        {
            title: "blog",
            link: "/blog/tag/blog",
        },
        {
            title: "testing",
            link: "/blog/tag/testing",
        },
    ],
    draft: false,
} as const satisfies BlogPost;
