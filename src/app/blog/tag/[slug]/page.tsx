import { notFound } from "next/navigation";
import BlogLandingHeader from "@/components/blog/BlogLandingHeader";
import BlogLandingPosts from "@/components/blog/BlogLandingPosts";
import BlogLandingFooter from "@/components/blog/BlogLandingFooter";
import { getAllTags, getPostsByTag } from "@/lib/helpers/getBlogPosts";

/**
 * Blog Tag Page (SSG)
 *
 * Statically generates pages for `/blog/tag/[slug]`, where `slug` is the
 * slugified form of a topic (for example, "Tailwind CSS" → "tailwind-css").
 *
 * Data comes from `/public/data/posts.json` via helper functions:
 * - `getAllTags()` returns all unique, slugified topic strings
 * - `getPostsByTag(slug)` returns posts whose topics slugify to `slug`
 *
 * Notes:
 * - `generateStaticParams()` is required for `output: "export"` (GitHub Pages).
 * - `params` is a plain object (not a Promise).
 */
export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
    const tags = await getAllTags(); // already slugified + sorted
    return tags.map((slug) => ({ slug }));
}

export const dynamic = "error"; // forbid runtime dynamic rendering
export const dynamicParams = false; // unknown slugs => 404

export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const blogPosts = await getPostsByTag(slug); // uses the same slugify logic

    if (!blogPosts || blogPosts.length === 0) {
        notFound();
    }

    return (
        <>
            <BlogLandingHeader title={`From the blog: #${slug}`} />
            <BlogLandingPosts blogPosts={blogPosts} />
            <BlogLandingFooter />
        </>
    );
}
