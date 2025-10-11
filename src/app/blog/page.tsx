import BlogLandingHeader from "@/components/blog/BlogLandingHeader";
import BlogLandingPosts from "@/components/blog/BlogLandingPosts";
import BlogLandingFooter from "@/components/blog/BlogLandingFooter";
import { getBlogPosts, searchBlogPosts } from "@/lib/helpers/getBlogPosts";
import { BlogPost } from "@/types";

interface BlogPageProps {
    /**
     * Optional URL search parameters used to filter blog posts.
     * For example, `?q=react` will display only posts matching “react”.
     */
    searchParams?: Promise<{ q?: string }>;
}

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
 * This page runs on the server and uses static JSON data from
 * `/public/data/posts.json` during build or request time.
 *
 * @param {BlogPageProps} props - Component props.
 * @param {{ q?: string }} [props.searchParams] - URL search parameters used for filtering posts.
 * @returns The complete blog landing layout, including header, grid of posts, and footer.
 *
 * @example
 * ```tsx
 * // Renders all posts
 * /blog
 *
 * // Filters posts containing the term "react"
 * /blog?q=react
 * ```
 */
export default async function Page(props: BlogPageProps) {
    const searchParams = await props.searchParams;
    const query = searchParams?.q || "";

    let blogPosts: BlogPost[] = await searchBlogPosts(query);

    if (blogPosts.length < 1 && !query) blogPosts = await getBlogPosts();

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
