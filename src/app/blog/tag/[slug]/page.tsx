import { notFound } from "next/navigation";
import BlogLandingPosts from "@/components/blog/BlogLandingPosts";
import BlogLandingFooter from "@/components/blog/BlogLandingFooter";
import { getAllTags, getPostsByTag } from "@/lib/helpers/getBlogPosts";
import PageIntroSplit from "@/components/ui/PageIntroSplit";
import { icons, internalRoutes } from "@/lib/constants/ui";

const { BlogIcon, ReadMoreIcon, RssIcon } = icons;
const { BlogRoute, RssFeed } = internalRoutes;

/**
 * Generates static parameters for all blog tag pages.
 *
 * This function runs at build time and produces a list of valid routes
 * under `/blog/tag/[slug]`, where each `slug` corresponds to a unique topic tag.
 *
 * Derived from the local JSON data in `/public/data/posts.json` using
 * {@link getAllTags}, which returns already-normalised, slugified tags.
 *
 * Required for static export builds (e.g. GitHub Pages) when
 * `output: "export"` is enabled in `next.config.js`.
 *
 * @async
 * @returns An array of route parameter objects, each with a `slug` field.
 *
 * @example
 * ```ts
 * export async function generateStaticParams() {
 *   return [{ slug: "react" }, { slug: "nextjs" }, { slug: "accessibility" }];
 * }
 * ```
 */
export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
    const tags = await getAllTags(); // already slugified + sorted
    return tags.map((slug) => ({ slug }));
}

/**
 * Disables dynamic rendering for this route.
 *
 * Ensures tag pages are statically built at compile time and that
 * unknown slugs return a 404 rather than being resolved at runtime.
 */
// export const dynamic = "error";

/**
 * Prevents runtime handling of non-predefined `slug` routes.
 *
 * When a slug does not exist in the generated static parameters,
 * the page returns a 404 automatically.
 */
// export const dynamicParams = false;

/**
 * Renders a statically generated Blog Tag page.
 *
 * Displays all blog posts that share a specific tag (for example,
 * `/blog/tag/react` lists all posts tagged “React”).
 *
 * Fetches data via {@link getPostsByTag}, which filters posts using
 * the same slugification logic as {@link getAllTags}.
 *
 * ### Behaviour
 * - Returns a 404 using {@link notFound} if no posts match the tag.
 * - Uses {@link PageIntroSplit} for a hero section contextualised to the tag.
 * - Includes {@link BlogLandingPosts} and {@link BlogLandingFooter} for
 * consistent visual hierarchy with the main Blog page.
 * - Fully statically rendered — no dynamic fallback.
 *
 * ### Route pattern
 * ```
 * /blog/tag/[slug]
 * ```
 *
 * @async
 * @param props - Component properties.
 * @param props.params - Route parameters from Next.js.
 * @param props.params.slug - The slugified tag name (for example, `"react"`).
 * @returns The rendered blog tag page for the given topic.
 *
 * @example
 * ```tsx
 * // Example: /blog/tag/react
 * export default async function Page({ params }) {
 *   const blogPosts = await getPostsByTag(params.slug);
 *   if (!blogPosts.length) notFound();
 *   return (
 *     <>
 *       <PageIntroSplit
 *         title="Blog"
 *         leadParagraph={<>Posts tagged <strong>#{params.slug}</strong></>}
 *       />
 *       <BlogLandingPosts blogPosts={blogPosts} />
 *       <BlogLandingFooter />
 *     </>
 *   );
 * }
 * ```
 */
export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = await params;

    const blogPosts = await getPostsByTag(slug).catch((e) => {
        throw e;
    });

    if (!blogPosts || blogPosts.length === 0) {
        notFound();
    }

    return (
        <>
            <PageIntroSplit
                title="Blog"
                leadParagraph={
                    <>
                        Insights, tutorials, and reflections tagged{" "}
                        <span className="text-primary-600 font-semibold">
                            #{slug}
                        </span>
                        .
                    </>
                }
                tagline="Writing & Reflections"
                heroIcon={<BlogIcon />}
                primaryCta={{
                    href: `${BlogRoute}#main`,
                    text: "Read latest posts",
                    icon: <ReadMoreIcon />,
                }}
                secondaryCta={{
                    href: RssFeed,
                    text: "Subscribe",
                    icon: <RssIcon />,
                }}
            />
            <BlogLandingPosts blogPosts={blogPosts} />
            <BlogLandingFooter />
        </>
    );
}
