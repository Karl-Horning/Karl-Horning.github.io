import IconCard from "@/components/ui/IconCard";
import { contactItems } from "@/lib/constants/contact";

/**
 * Renders a grid of quick contact cards.
 *
 * Each card is sourced from `contactItems` and displayed using
 * the `IconCard` component. Cards provide visitors with key
 * contact methods such as email, LinkedIn, GitHub, or availability.
 * The grid is responsive, adapting from a single column on small
 * screens up to four columns on large displays.
 *
 * @returns The contact cards section with multiple `IconCard` entries.
 */
export default function QuickCards() {
    return (
        <section className="mx-auto max-w-6xl px-4 pt-20">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {contactItems.map(({ title, icon: Icon, ...props }) => (
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
