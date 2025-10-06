import { externalLinks } from "@/lib/constants/links";
import { getBlogPosts } from "@/lib/blog/getBlogPosts";
import { icons } from "@/lib/constants/icons";
import BlogCard from "./BlogCard";
import ButtonLink from "../ui/ButtonLink";

const { ReadMoreIcon } = icons;
const { BlogLink } = externalLinks;

/**
 * Displays the "From the blog" section.
 *
 * Fetches blog posts via `getBlogPosts` and renders them as `BlogCard`
 * components in a responsive grid. Includes a header and a secondary
 * action button that links to the full blog index page.
 *
 * @remarks
 * This is an async server component because it calls `getBlogPosts()`.
 *
 * @returns A `<section>` element containing a heading, a "View all posts"
 * button, and a grid of blog post previews.
 */
export default async function Blog() {
    const blogPosts = await getBlogPosts();

    return (
        <section id="blog" className="mx-auto max-w-6xl px-4 pt-20">
            <div className="flex items-center justify-between gap-6">
                <h2 className="text-2xl font-bold tracking-tight">
                    From the blog
                </h2>
                <ButtonLink
                    text="View all posts"
                    href={BlogLink}
                    icon={<ReadMoreIcon />}
                    type="secondary"
                />
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                {blogPosts.map((post) => (
                    <div key={post.title}>
                        <BlogCard {...post} />
                    </div>
                ))}
            </div>
        </section>
    );
}
