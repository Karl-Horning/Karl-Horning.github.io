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
        <Section id="blog" header="From the Blog" className="!text-left">
            <div className="grid gap-8 md:grid-cols-2">
                {blogPosts.map(
                    (
                        { title, href, imgUrl, imgAlt, date, snippet, tags },
                        index
                    ) => (
                        <div
                            key={title}
                            data-aos="zoom-in"
                            data-aos-delay={300 + index * 100}
                        >
                            <BlogCard
                                title={title}
                                imgUrl={imgUrl}
                                imgAlt={imgAlt}
                                href={href}
                                date={date}
                                snippet={snippet}
                                tags={tags}
                            />
                        </div>
                    )
                )}
            </div>
        </Section>
    );
}
