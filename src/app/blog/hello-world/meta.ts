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
    topics: ["meta", "blog", "personal", "technology"],
    draft: false,
} as const satisfies BlogPost;
