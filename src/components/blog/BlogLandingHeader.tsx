import Search from "@/components/ui/Search";

/**
 * Displays the blog header with page title, intro copy,
 * a search input, a tag filter, and a sort control.
 *
 * TODOs:
 * - Populate the tag dropdown from all discovered tags.
 * - Wire the search box to query/filter posts.
 * - Sort posts by date (newest/oldest) based on selection.
 *
 * Layout adapts from a single column on mobile to a compact
 * three-column control row on larger screens.
 */
export default function BlogHeader() {
    return (
        <section className={`hero-bg`}>
            <div className="mx-auto max-w-6xl px-4 py-20">
                <h1 className="mt-3 text-pretty text-4xl font-extrabold tracking-tight sm:text-5xl">
                    From the blog
                </h1>

                <p className="mt-3 max-w-prose text-lg text-slate-700 dark:text-slate-300">
                    Tutorials and notes on JavaScript/TypeScript, React/Next.js,
                    APIs, accessibility and EdTech.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto_auto] md:items-center">
                    <label className="relative block">
                        <Search />
                    </label>
                    <label className="md:ml-3">
                        <span className="sr-only">Filter by tag</span>
                        <select
                            id="tagFilter"
                            className="w-full rounded-full border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-slate-700 dark:bg-slate-900"
                        >
                            <option value="">All tags</option>
                        </select>
                    </label>
                    <label className="md:ml-3">
                        <span className="sr-only">Sort</span>
                        <select
                            id="sortBy"
                            className="w-full rounded-full border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-slate-700 dark:bg-slate-900"
                        >
                            <option value="new">Newest first</option>
                            <option value="old">Oldest first</option>
                        </select>
                    </label>
                </div>
            </div>
        </section>
    );
}
