import BlogLandingHeader from "@/components/blog/BlogLandingHeader";
import BlogLandingFooter from "@/components/blog/BlogLandingFooter";
import { getAllTags } from "@/lib/helpers/getBlogPosts";
import TopicChipsList from "@/components/ui/TopicChipsList";

/**
 * Server component that displays all blog tags as clickable topic chips.
 *
 * Fetches every unique tag from the blog post metadata using `getAllTags()`
 * and renders them within a simple layout that includes a header, tag grid,
 * and footer. This serves as the "All tags" index page for the blog.
 *
 * @async
 * @returns The blog tag listing page, including header, main content, and footer.
 */
export default async function Page() {
    const tags = await getAllTags();

    return (
        <>
            <BlogLandingHeader title="From the blog: all tags" />
            <main id="main" className="mx-auto max-w-6xl px-4 pt-20">
                <TopicChipsList topics={tags} className="justify-center" />
            </main>
            <BlogLandingFooter />
        </>
    );
}
