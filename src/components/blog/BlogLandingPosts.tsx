import { getBlogPosts } from "@/lib/helpers/getBlogPosts";
import BlogCard from "@/components/ui/BlogCard";

/**
 * Displays a responsive grid of blog posts.
 *
 * Fetches blog post metadata via `getBlogPosts()` and renders
 * each entry as a `BlogCard` component. The grid adapts from
 * a single column on mobile to multiple columns on larger screens.
 *
 * TODO: The `<nav>` element at the bottom is reserved for future
 * pagination controls.
 */
export default async function PostsGrid() {
    const blogPosts = await getBlogPosts();
    return (
        <main id="main" className="mx-auto max-w-6xl px-4 pt-20">
            <div
                id="grid"
                className="grid grid-cols-1 gap-4 md:grid-cols-2 md:[grid-auto-rows:1fr] lg:grid-cols-3"
            >
                {blogPosts.map((post) => (
                    <div key={post.title}>
                        <BlogCard {...post} />
                    </div>
                ))}
            </div>

            <nav
                id="pager"
                className="mt-8 flex items-center justify-center gap-2"
            ></nav>
        </main>
    );
}
