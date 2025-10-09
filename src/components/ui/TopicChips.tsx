import { Topic } from "@/types";
import Link from "next/link";

interface TopicChipsProps {
    /**
     * Array of topic items to display as clickable chips.
     * Each item includes a title and a corresponding link.
     */
    topics: Topic[];

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
 * {@link Topic} objects, making the component reusable across pages.
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
        <div className={`flex flex-wrap gap-2 text-xs ${className}`}>
            {topics.map(({ title, link }) => (
                <Link
                    key={title}
                    href={link}
                    className="rounded-full bg-blue-300/10 px-3 py-1 text-blue-700 transition hover:bg-blue-400/10 dark:bg-blue-200/10 dark:text-secondary dark:hover:bg-blue-200/20"
                >
                    #{title}
                </Link>
            ))}
        </div>
    );
}
