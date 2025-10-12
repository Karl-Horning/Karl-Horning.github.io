import BlogLandingHeader from "@/components/blog/BlogLandingHeader";
import BlogLandingPosts from "@/components/blog/BlogLandingPosts";
import BlogLandingFooter from "@/components/blog/BlogLandingFooter";
import { getBlogPosts, searchBlogPosts } from "@/lib/helpers/getBlogPosts";
import { BlogPost } from "@/types";

/**
 * Server component for rendering the main blog landing page.
 *
 * Fetches and displays blog posts in a structured layout with a header,
 * a responsive post grid, and a footer section containing follow or
 * subscription links.
 *
 * If a search query (`?q=term`) is provided, the results are filtered
 * using {@link searchBlogPosts}. Otherwise, the component defaults to
 * the latest posts from {@link getBlogPosts}.
 *
 * @remarks
 * This page is pre-rendered for static export (GitHub Pages). Because
 * GitHub Pages is static hosting, per-request server filtering by `?q=`
 * is not available at runtime. The default build will therefore render
 * the non-filtered list; client-side filtering can be added separately
 * if you want `?q=` to work on the client after load.
 *
 * @param props - Component props.
 * @param props.searchParams - URL search parameters used to filter posts
 * (shape provided by the App Router: plain object; values may be string or string[]).
 *
 * @returns The complete blog landing layout, including header, grid of posts, and footer.
 *
 * @example
 * ```tsx
 * // Renders all posts
 * /blog
 *
 * // Intended filter form (works at build time only unless you add client-side filtering)
 * /blog?q=react
 * ```
 */
type BlogPageProps = {
    /** App Router shape: plain object; values can be string or string[]. */
    searchParams?: { q?: string | string[] };
};

/** Ensure pre-render for `output: "export"` (no per-request server work). */
export const dynamic = "force-static";

export default async function Page({ searchParams }: BlogPageProps) {
    // Normalise ?q to a single string
    const raw = searchParams?.q;
    const query = Array.isArray(raw) ? (raw[0] ?? "") : (raw ?? "");

    // Build-time filtering if a query is present; otherwise latest posts
    let blogPosts: BlogPost[] = query
        ? await searchBlogPosts(query)
        : await getBlogPosts();

    // Fallback: if nothing found and no query, load latest posts
    if (!query && blogPosts.length < 1) {
        blogPosts = await getBlogPosts();
    }

    return (
        <>
            <BlogLandingHeader
                title={!query ? "From the blog" : `Searched for #${query}`}
            />
            <BlogLandingPosts blogPosts={blogPosts} />
            <BlogLandingFooter />
        </>
    );
}
