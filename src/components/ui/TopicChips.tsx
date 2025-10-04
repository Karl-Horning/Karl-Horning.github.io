import { TopicItem } from "@/types/TopicItem";

interface TopicChipsProps {
    /**
     * Array of topic items to display as clickable chips.
     * Each item includes a title and a corresponding link.
     */
    topics: TopicItem[];

    /**
     * Optional additional classes to customise spacing or layout.
     */
    className?: string;
}

/**
 * Renders a collection of topic chips for quick blog navigation.
 *
 * Each chip represents a blog tag (for example, #React or #Next.js)
 * and links to its corresponding tag page. Accepts any list of
 * {@link TopicItem} objects, making the component reusable across pages.
 *
 * @param props - Component properties.
 * @param props.topics - Array of topic items to render as chips.
 * @param props.className - Optional extra classes to extend or override layout.
 * @returns A flex container of clickable topic chips linking to blog tag pages.
 */
export default function TopicChips({
    topics,
    className = "",
}: TopicChipsProps) {
    return (
        <div className={`mt-6 flex flex-wrap gap-2 text-xs ${className}`}>
            {topics.map(({ title, link }) => (
                <a
                    key={title}
                    href={link}
                    className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                    {title}
                </a>
            ))}
        </div>
    );
}
