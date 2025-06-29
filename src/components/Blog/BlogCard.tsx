import Image from "next/image";
import { BlogPost } from "@/types/blog";

/**
 * A card component to display a blog post preview including title, date, snippet,
 * tags, and a thumbnail image. Includes a "Read More" button linking to the blog.
 *
 * @component
 * @param {string} title - The title of the blog post.
 * @param {string} date - The publication date of the blog post.
 * @param {string} snippet - A short excerpt or summary of the blog post content.
 * @param {Array<{ title: string, href: string }>} tags - An array of tags related to the post, each with a label and URL.
 */
export default function BlogCard({
    title,
    href,
    imgUrl,
    imgAlt,
    date,
    snippet,
    tags,
}: BlogPost) {
    return (
        <article className="rounded-lg bg-surface p-8 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <Image
                src={imgUrl}
                alt={imgAlt || ""}
                aria-hidden={!imgAlt ? "true" : undefined}
                className="mb-4 h-48 w-full rounded-md object-cover"
                width={400}
                height={200}
            />
            <h3 className="mb-2 text-2xl font-semibold text-text hover:text-primary hover:underline">
                <a
                    href={href}
                    aria-label={`Read more: ${title}`}
                    className="rounded py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                    {title}
                </a>
            </h3>
            <time
                dateTime={new Date(date).toISOString()}
                className="mb-2 block text-sm text-muted"
            >
                {date}
            </time>
            <p className="mb-4 text-text">{snippet}</p>
            <div className="mb-4 flex flex-wrap gap-2">
                {tags.map(({ title, href }, index) => (
                    <a
                        key={`${title}-${index}`}
                        href={href}
                        className="rounded bg-hero px-2 py-1 text-sm text-muted transition-colors duration-300 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        {title}
                    </a>
                ))}
            </div>
        </article>
    );
}
