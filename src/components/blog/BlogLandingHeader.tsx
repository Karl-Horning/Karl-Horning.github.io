import Search from "@/components/ui/Search";

interface BlogHeaderProps {
    /**
     * The main heading text displayed at the top of the blog page.
     * Typically a static string such as "From the blog".
     */
    title: string;
}

/**
 * Displays the blog header with page title, intro copy,
 * a search input, a tag filter, and a sort control.
 *
 * TODOs:
 * - Populate the tag dropdown from all discovered tags.
 * - Wire the search box to query/filter posts.
 * - Sort posts by date (newest/oldest) based on selection.
 *
 * @param {BlogHeaderProps} props - Component props.
 * @param {string} props.title - The heading displayed at the top of the blog page.
 * @returns The blog header section, including title, intro, and search/filter controls.
 */
export default function BlogHeader({ title }: BlogHeaderProps) {
    return (
        <section className={`hero-bg`}>
            <div className="mx-auto max-w-6xl px-4 py-20">
                <h1 className="mt-3 text-pretty text-4xl font-extrabold tracking-tight sm:text-5xl">
                    {title}
                </h1>

                <p className="mt-3 max-w-prose text-lg text-slate-700 dark:text-slate-300">
                    Tutorials and notes on JavaScript/TypeScript, React/Next.js,
                    APIs, accessibility and EdTech.
                </p>
            </div>
        </section>
    );
}
