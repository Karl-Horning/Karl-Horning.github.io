import BlogLandingFooter from "@/components/blog/BlogLandingFooter";
import TopicChipsList from "@/components/ui/TopicChipsList";
import { icons, internalRoutes } from "@/lib/constants/ui";
import PageIntroSplit from "@/components/ui/PageIntroSplit";
import { createMetadata } from "@/lib/helpers";
import { getAllTags } from "@/lib/server";

const { BlogIcon, ReadMoreIcon, RssIcon } = icons;
const { BlogRoute, RssFeed } = internalRoutes;

export const metadata = createMetadata({
    title: "Blog",
    path: BlogRoute,
});

/**
 * Renders the **Blog Tags** index page.
 *
 * This server component lists all unique tags extracted from blog post metadata
 * and displays them as clickable topic chips. It provides readers with an easy
 * way to browse content by topic or theme.
 *
 * ### Layout structure
 * - {@link PageIntroSplit} — Introductory section explaining the purpose of the page.
 * - {@link TopicChipsList} — Grid of tag links (for example, “React”, “Accessibility”).
 * - {@link BlogLandingFooter} — Footer with navigation and related links.
 *
 * ### Behaviour
 * - Fetches all available tags from local JSON data via {@link getAllTags}.
 * - Each tag links to its corresponding route `/blog/tag/[slug]`.
 * - Fully static page, rebuilt at build time.
 *
 * @async
 * @returns The rendered blog tags page with a hero intro, tag list, and footer.
 *
 * @example
 * ```tsx
 * export default async function Page() {
 *   const tags = await getAllTags();
 *   return (
 *     <>
 *       <PageIntroSplit
 *         title="Blog"
 *         tagline="Writing & Reflections"
 *         leadParagraph="Explore all topics covered in the blog — from JavaScript and React to EdTech and accessibility."
 *         heroIcon={<BlogIcon />}
 *       />
 *       <main id="main" className="mx-auto max-w-6xl px-4 pt-20">
 *         <TopicChipsList topics={tags} className="justify-center" />
 *       </main>
 *       <BlogLandingFooter />
 *     </>
 *   );
 * }
 * ```
 */
export default async function Page() {
    // Retrieve all unique tag names from blog metadata
    const tags = await getAllTags();

    return (
        <>
            <PageIntroSplit
                title="Blog"
                leadParagraph="Explore all topics covered in the blog — from JavaScript and React to EdTech and accessibility."
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

            <main id="main" className="mx-auto max-w-6xl px-4 pt-20">
                <TopicChipsList topics={tags} className="justify-center" />
            </main>

            <BlogLandingFooter />
        </>
    );
}
