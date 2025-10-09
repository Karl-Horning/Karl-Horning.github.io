import BlogLandingHeader from "@/components/blog/BlogLandingHeader";
import BlogLandingPosts from "@/components/blog/BlogLandingPosts";
import BlogLandingFooter from "@/components/blog/BlogLandingFooter";

/**
 * Displays the "From the blog" section.
 *
 * Fetches blog posts via `getBlogPosts` and renders them as `BlogCard`
 * components in a responsive grid. Includes a header and a secondary
 * action button that links to the full blog index page.
 */
export default function Page() {
    return (
        <>
            <BlogLandingHeader />
            <BlogLandingPosts />
            <BlogLandingFooter />
        </>
    );
}
