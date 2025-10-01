import Image from "next/image";
import { BlogPost } from "@/types/BlogItem";

/**
 * A card component for displaying a single blog post preview.
 *
 * Shows:
 * - A featured image
 * - Post title (linked to the full article)
 * - Publication date
 * - A short snippet/summary
 * - A list of tags (linked to related content)
 *
 * Used in blog listing pages to provide a quick overview of recent
 * or related articles.
 *
 * @param props - The blog post properties.
 * @param props.title - The title of the blog post.
 * @param props.href - The URL to the full blog post.
 * @param props.imgUrl - Path or URL to the featured image.
 * @param props.imgAlt - Optional alt text for the image (improves accessibility).
 * @param props.date - The publication date as a string.
 * @param props.snippet - A short excerpt or teaser for the blog post.
 * @param props.tags - An array of tags associated with the post. Each tag includes a title and link.
 * @returns A styled `<article>` element representing a blog post card.
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
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <Image
                src={imgUrl}
                alt={imgAlt || ""}
                aria-hidden={!imgAlt ? "true" : undefined}
                className="mb-4 h-48 w-full rounded-md object-cover"
                loading="lazy"
                width={400}
                height={200}
            />
            <a
                href={href}
                aria-label={`Read more: ${title}`}
                className="text-lg font-semibold hover:text-secondary hover:underline"
            >
                {title}
            </a>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-300">
                {date}
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {snippet}
            </p>
            <ul className="mt-2 flex flex-wrap">
                {tags.map(({ title, href }, index) => (
                    <li key={`${title}-${index}`}>
                        <a
                            href={href}
                            className="pr-2 text-xs font-semibold text-secondary hover:underline"
                        >
                            #{title}
                        </a>
                    </li>
                ))}
            </ul>
        </article>
    );
}
