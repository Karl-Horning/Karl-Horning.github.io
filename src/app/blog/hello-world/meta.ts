import { BlogPost } from "@/types";
import "server-only";

export const meta = {
    title: "Hello, World!",
    description:
        "A quick introduction to the blog: what it's for, what I might write about, and why I'm building it in the first place.",
    date: "2025-06-22",
    readingTime: 2,
    slug: "hello-world",
    thumbnail: {
        src: "/img/blog/pexels-meruyert-gonullu-7317281.optimised.webp",
        alt: "A neon sign saying 'hello'",
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
            title: "personal",
            link: "/blog/tag/personal",
        },
        {
            title: "technology",
            link: "/blog/tag/technology",
        },
    ],
    draft: false,
} as const satisfies BlogPost;
