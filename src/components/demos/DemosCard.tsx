import { DemoItem } from "@/types";
import { icons } from "@/lib/constants/ui";

const { FolderIcon, GitHubIcon } = icons;

/** Demo/repo card renderer.
 *
 * Render a list item for a demo or repository.
 * Focuses on:
 * - clear, accessible labelling
 * - predictable link behaviour
 * - dark mode contrast
 *
 * Links and icons render only when provided.
 * Emoji is decorative and hidden from assistive tech.
 *
 * @example
 * // Inside a <ul>
 * <DemosCard
 *   title="Image Optimiser"
 *   description="Next.js demo for image pipelines"
 *   type="demo"
 *   demoLink="https://example.com/demo"
 *   repoLink="https://github.com/acme/demo"
 * />
 */
export default function DemosCard({
    title,
    description,
    type,
    demoLink,
    repoLink,
}: DemoItem) {
    // Single source of truth for display state.
    const isDemo = type === "demo";

    // Badge colours favour legibility across light/dark themes.
    const badgeStyles = isDemo
        ? "bg-blue-100 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300"
        : "bg-purple-100 text-purple-700 dark:bg-purple-400/10 dark:text-purple-300";

    // Emoji aids quick scanning; hidden from screen readers.
    const badgeEmoji = isDemo ? "🧪" : "💾";
    const badgeLabel = isDemo ? "Demo" : "Repo";

    return (
        <li className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-transform hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            {/* Content section */}
            <div>
                <h2 className="text-lg font-semibold leading-tight text-slate-900 dark:text-slate-100">
                    {/* Prefer demo link; fall back to repo to keep card usable. */}
                    <a
                        href={demoLink || repoLink}
                        className="transition-colors hover:text-primary"
                    >
                        {title}
                    </a>
                </h2>
                <p className="mt-2 text-sm text-slate-600/90 dark:text-slate-400">
                    {description}
                </p>
            </div>

            {/* Footer section */}
            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 dark:border-slate-800">
                {/* Left: Demo/Repo badge */}
                <div className="flex items-center gap-2 text-xs font-medium">
                    <span
                        className={`flex items-center rounded-full px-2 py-0.5 ${badgeStyles}`}
                    >
                        {/* Decorative emoji; hide from AT for clarity. */}
                        <span className="mr-1" aria-hidden="true">
                            {badgeEmoji}
                        </span>
                        {badgeLabel}
                    </span>
                </div>

                {/* Right: Action icons */}
                <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
                    {demoLink && (
                        <a
                            href={demoLink}
                            aria-label="View demo"
                            title="View demo"
                            className="transition-colors hover:text-primary"
                        >
                            <FolderIcon className="h-5 w-5" />
                        </a>
                    )}
                    {repoLink && (
                        <a
                            href={repoLink}
                            aria-label="View repository on GitHub"
                            title="View repository on GitHub"
                            className="transition-colors hover:text-primary"
                        >
                            <GitHubIcon className="h-5 w-5" />
                        </a>
                    )}
                </div>
            </div>
        </li>
    );
}
