import { icons, internalRoutes } from "@/lib/constants/ui";

const { SearchIcon } = icons;
const { BlogRoute } = internalRoutes;

/**
 * Renders an accessible blog search form.
 *
 * Displays a search input field with an accompanying icon for filtering or
 * locating blog posts. Submitting the form sends a query string (`?q=term`)
 * to the `/dev-blog/` route, allowing server-side or client-side search
 * functionality to be implemented later.
 *
 * @remarks
 * The component is fully accessible, using semantic roles and a visually
 * hidden label for screen readers. It supports both light and dark themes
 * and uses Tailwind CSS for styling.
 *
 * @returns A search form element with a text input and decorative icon.
 */
export default function Search() {
    return (
        <form
            role="search"
            aria-label="Site search"
            action={BlogRoute}
            method="get"
        >
            <label htmlFor="blog-search" className="sr-only">
                Search posts
            </label>

            <div className="relative">
                <SearchIcon
                    aria-hidden="true"
                    role="presentation"
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400"
                />
                <input
                    id="blog-search"
                    name="q"
                    type="search"
                    placeholder="Search blog…"
                    className="w-full rounded-full border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-slate-700 dark:bg-slate-900"
                />

                <button type="submit" className="sr-only">
                    Search
                </button>
            </div>
        </form>
    );
}
