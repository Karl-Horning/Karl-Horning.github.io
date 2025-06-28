import Section from "@/components/Section";
import BlogCard from "@/components/Blog/BlogCard";

/**
 * Renders a section containing a list of blog post previews using the `BlogCard` component.
 * Currently uses hardcoded post data. To be replaced with dynamic data from an Eleventy blog feed.
 *
 * @component
 *
 * @todo Replace static `blogPosts` array with dynamic data pulled from an Eleventy RSS or JSON feed.
 */
export default function Blog() {
    const blogPosts = [
        {
            title: "Exploring Static Site Generators",
            date: "26 June 2025",
            snippet:
                "A look at how tools like Eleventy and Next.js help streamline web development through pre-rendering and modular components.",
            tags: [
                {
                    title: "Eleventy",
                    href: "/blog",
                },
                {
                    title: "Jamstack",
                    href: "/blog",
                },
                {
                    title: "Next.js",
                    href: "/blog",
                },
            ],
        },
        {
            title: "Mastering the Async Request API",
            date: "12 June 2025",
            snippet:
                "A walkthrough of the new Async Request API in Next.js 15 and how it improves server-side data loading.",
            tags: [
                {
                    title: "Next.js",
                    href: "/blog",
                },
                {
                    title: "React",
                    href: "/blog",
                },
                {
                    title: "SSR",
                    href: "/blog",
                },
            ],
        },
    ];

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
