import Section from "@/components/Section";
import BlogCard from "@/components/Blog/BlogCard";
import { getBlogPosts } from "@/lib/blog/getBlogPosts";

/**
 * Renders a section containing a list of blog post previews using the `BlogCard` component.
 * Currently uses static post data. To be replaced with dynamic data from an Eleventy blog feed.
 *
 * @component
 *
 * @todo Replace data in `public/data/blogPosts.json` whenever a post is created on Eleventy.
 */
export default async function Blog() {
    const blogPosts = await getBlogPosts();

    return (
        <Section id="blog" header="From the Blog">
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
                {blogPosts.map(({ title, date, snippet, tags }) => (
                    <BlogCard
                        key={title}
                        title={title}
                        date={date}
                        snippet={snippet}
                        tags={tags}
                    />
                ))}
            </div>
        </Section>
    );
}
