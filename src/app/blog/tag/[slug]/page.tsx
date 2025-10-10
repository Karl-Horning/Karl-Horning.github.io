import BlogLandingHeader from "@/components/blog/BlogLandingHeader";
import BlogLandingPosts from "@/components/blog/BlogLandingPosts";
import BlogLandingFooter from "@/components/blog/BlogLandingFooter";
import { getPostsByTag } from "@/lib/helpers/getBlogPosts";

/**
 * Server component for rendering a filtered list of blog posts by tag.
 *
 * Dynamically generates pages for URLs matching `/blog/tag/[slug]`,
 * displaying only posts that include the given tag.
 *
 * Uses {@link getPostsByTag} to retrieve all posts associated with the
 * specified tag, and reuses shared components for consistent layout
 * and styling across the blog section.
 *
 * @remarks
 * This route is statically generated or server-rendered via Next.js,
 * depending on the build configuration. It consumes data from the
 * local `/public/data/posts.json` file at request time.
 *
 * @param {Object} props - Component props.
 * @param {Promise<{ slug: string }>} props.params - Dynamic route parameters.
 * The `slug` corresponds to the tag name (for example, `"react"`).
 *
 * @returns A complete blog page layout filtered by the specified tag.
 *
 * @example
 * ```tsx
 * // Displays posts tagged "react"
 * /blog/tag/react
 *
 * // Displays posts tagged "accessibility"
 * /blog/tag/accessibility
 * ```
 */
export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const blogPosts = await getPostsByTag(slug);
    return (
        <>
            <BlogLandingHeader title={`Posts tagged with #${slug}`} />
            <BlogLandingPosts blogPosts={blogPosts} />
            <BlogLandingFooter />
        </>
    );
}
