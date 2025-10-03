import { technologyItems } from "@/lib/constants/about";
import IconCard from "../ui/IconCard";

/**
 * Displays a grid of technology platforms the author has worked with.
 *
 * Sources its data from `technologyItems`, with each platform rendered
 * as an `IconCard` showing its name and associated icon. The grid is
 * responsive, adapting from two columns on small screens up to six
 * columns on extra-large displays.
 *
 * @returns The "Platforms I've worked with" section containing technology cards.
 */
export default function Platforms() {
    return (
        <section className="mx-auto max-w-6xl px-4 pt-20">
            <h2 className="text-2xl font-bold tracking-tight">
                Platforms I&apos;ve worked with
            </h2>
            <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-6">
                {technologyItems.map(({ title, icon: Icon, ...props }) => (
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
