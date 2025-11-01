import { useMemo } from "react";
import { demoItems } from "@/lib/constants/demos";
import DemosCard from "./DemosCard";
import type { DemoItem } from "@/types";

// Map importance → priority (lower number shows earlier).
// Kept local for clarity; avoids magic numbers in the sort.
const importanceOrder: Record<DemoItem["importance"], number> = {
    highest: 1,
    high: 2,
    medium: 3,
    low: 4,
    lowest: 5,
};

/** Selected demo section.
 *
 * Display a responsive grid of demo cards, ordered by declared
 * importance. Sorting is memoised for predictable render cost.
 *
 * @example
 * <SelectedDemos /> // highest → lowest
 */
export default function SelectedDemos() {
    // Run sorting once per mount; inputs are stable.
    // Clone the array to avoid mutating the imported constant.
    const sortedDemos = useMemo(() => {
        return [...demoItems].sort(
            (a, b) =>
                importanceOrder[a.importance] - importanceOrder[b.importance]
        );
    }, []);

    return (
        <section id="recentDemos" className="mx-auto max-w-6xl px-4 pt-20">
            {/* Grid adapts 1 → 2 → 3 columns for responsiveness. */}
            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Titles are unique within demoItems, so safe as keys. */}
                {sortedDemos.map(({ title, ...props }) => (
                    <DemosCard key={title} title={title} {...props} />
                ))}
            </ul>
        </section>
    );
}
