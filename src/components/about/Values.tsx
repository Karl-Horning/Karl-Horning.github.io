import { valueItems } from "@/lib/constants/about";
import IconCard from "../ui/IconCard";

/**
 * Displays a grid of personal and professional values.
 *
 * Each value item is sourced from `valueItems` and rendered
 * using the `IconCard` component, including a title, icon,
 * and descriptive text. Shown as a four-column grid on large
 * screens and responsive down to single column on mobile.
 *
 * @returns The "What I value" section with a responsive grid of value cards.
 */
export default function Values() {
    return (
        <section className="mx-auto max-w-6xl px-4 pt-20">
            <h2 className="text-2xl font-bold tracking-tight">What I value</h2>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {valueItems.map(({ title, icon: Icon, ...props }) => (
                    <IconCard
                        key={title}
                        title={title}
                        icon={<Icon />}
                        {...props}
                    />
                ))}
            </ul>
        </section>
    );
}
