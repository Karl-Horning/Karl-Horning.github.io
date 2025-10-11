import TopicChips from "@/components/ui/TopicChips";
import { slugify } from "@/lib/helpers/textHelpers";
import { internalRoutes } from "@/lib/constants/ui";

const { BlogRoute } = internalRoutes;

/**
 * Props for the TopicChipsList component.
 */
type TopicChipsListProps = {
    /**
     * List of topic names to render as chips.
     * Falsy/empty will render nothing.
     */
    topics?: string[] | null;

    /**
     * Base path for tag links (joined with the slugified topic).
     * @default `${BlogRoute}/tag`
     */
    basePath?: string;

    /**
     * Optional className passthrough for layout tweaks.
     */
    className?: string;

    /**
     * Limit how many chips to show (0 hides all).
     * No “+N more” UX here to keep it simple.
     */
    max?: number;
};

/**
 * Renders a list of topic chips linking to their tag pages.
 *
 * Topics are optionally limited, slugified for URL safety,
 * and safely keyed to avoid collisions when duplicates appear.
 *
 * @param props - Component properties.
 * @param props.topics - Array of topic names to render; falsy/empty returns null.
 * @param props.basePath - Base path for tag links (default: `${BlogRoute}/tag`).
 * @param props.className - Optional className for layout/spacing tweaks.
 * @param props.max - Optional maximum number of chips to render (0 hides all).
 * @returns An unordered list of clickable topic chips, or null when there are no topics.
 */
export default function TopicChipsList({
    topics,
    basePath = `${BlogRoute}/tag`,
    className,
    max,
}: TopicChipsListProps) {
    // Guard: nothing to render if topics are missing or empty.
    if (!topics || topics.length === 0) return null;

    // Helper: clamp max to a safe non-negative number; undefined means "no limit".
    const limit = typeof max === "number" ? Math.max(0, max) : undefined;

    // Helper: apply the limit (if provided). Using `limit` (not `max`) ensures clamping is respected.
    const sliced = typeof limit === "number" ? topics.slice(0, limit) : topics;

    // Helper: map topics to { title, slug } pairs and drop any that fail to slugify.
    const items = sliced
        .map((t) => {
            const title = t ?? ""; // normalise to empty string to avoid undefined/null
            const slug = slugify(title); // turns "React Basics" -> "react-basics"
            return { title, slug };
        })
        .filter((x) => x.slug); // skip if slugify produced an empty string

    // Helper: track how many times we've seen a slug to generate stable, unique keys.
    const seen = new Map<string, number>();

    return (
        <ul
            className={`flex flex-wrap gap-2${className ? ` ${className}` : ""}`}
        >
            {items.map(({ title, slug }, index) => {
                // Helper: bump the seen count for this slug.
                const count = (seen.get(slug) ?? 0) + 1;
                seen.set(slug, count);

                // Helper: first occurrence uses the slug; duplicates get a disambiguated key.
                const key = count === 1 ? slug : `${slug}-${count}-${index}`;

                return (
                    <TopicChips
                        key={key}
                        title={title}
                        link={`${basePath}/${slug}`}
                    />
                );
            })}
        </ul>
    );
}
