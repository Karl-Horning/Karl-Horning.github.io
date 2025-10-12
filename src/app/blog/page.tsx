import BlogLandingHeader from "@/components/blog/BlogLandingHeader";
import BlogLandingPosts from "@/components/blog/BlogLandingPosts";
import BlogLandingFooter from "@/components/blog/BlogLandingFooter";
import { getBlogPosts } from "@/lib/helpers/getBlogPosts";
import { BlogPost } from "@/types";

/**
 * Forces static generation of the blog landing page
 * at build time to improve performance and reliability.
 */
export const dynamic = "force-static";

/**
 * Server component for the main Blog landing page.
 *
 * Fetches all blog post metadata via {@link getBlogPosts}
 * and renders a header, a grid of posts, and a footer.
 *
 * This page is statically generated (`force-static`) for fast load times.
 *
 * @async
 * @returns The fully rendered blog index page including header, posts, and footer.
 *
 * @example
 * ```tsx
 * // Automatically generated at build time
 * export default async function Page() {
 *   const blogPosts = await getBlogPosts();
 *   return (
 *     <>
 *       <BlogLandingHeader title="From the blog" />
 *       <BlogLandingPosts blogPosts={blogPosts} />
 *       <BlogLandingFooter />
 *     </>
 *   );
 * }
 * ```
 */
export default async function Page() {
    // Fetch all blog post metadata for listing
    const blogPosts: BlogPost[] = await getBlogPosts();

    return (
        <>
            <BlogLandingHeader title="From the blog" />
            <BlogLandingPosts blogPosts={blogPosts} />
            <BlogLandingFooter />
        </>
    );
}
