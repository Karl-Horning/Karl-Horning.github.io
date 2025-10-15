interface LighthouseGridProps {
    /**
     * Key-value pairs representing Lighthouse category names and their respective scores.
     *
     * @example
     * {
     *   Performance: 98,
     *   Accessibility: 96,
     *   "Best Practices": 100,
     *   SEO: 100
     * }
     */
    data: Record<string, number>;
}

/**
 * Renders a responsive grid of **Lighthouse audit scores**.
 *
 * Displays performance metrics (for example, *Performance*, *Accessibility*,
 * *Best Practices*, and *SEO*) in a clean, compact card layout.
 *
 * Each category is presented with a label and numeric score,
 * using light and dark theme styles for readability.
 *
 * ### Layout
 * - Uses a two-column grid on mobile and four columns on larger screens.
 * - Each grid cell is a rounded, bordered card with consistent spacing and colour contrast.
 *
 * @param props - The component properties.
 * @param props.data - A record of Lighthouse category labels mapped to numeric scores.
 *
 * @example
 * ```tsx
 * <LighthouseGrid
 *   data={{
 *     Performance: 98,
 *     Accessibility: 96,
 *     "Best Practices": 100,
 *     SEO: 100,
 *   }}
 * />
 * ```
 *
 * @returns A responsive grid displaying Lighthouse category scores.
 */
export default function LighthouseGrid({ data }: LighthouseGridProps) {
    return (
        <div className="not-prose my-4 grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
            {Object.entries(data).map(([label, score]) => (
                <div
                    key={label}
                    className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
                >
                    <p className="text-slate-500 dark:text-slate-300">
                        {label}
                    </p>
                    <p className="text-lg font-semibold">{score}</p>
                </div>
            ))}
        </div>
    );
}
