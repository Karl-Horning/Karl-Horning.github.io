import { HighlightItems } from "@/lib/constants/highlights";
import HighlightsCard from "./HighlightsCard";

/**
 * Displays a grid of highlight cards for technical and professional skills.
 *
 * Each card includes an icon, title, and optional description. The data
 * is sourced from `HighlightItems` in the constants library and rendered
 * responsively as a four-column grid on large screens.
 *
 * @returns A section containing a responsive grid of `HighlightsCard` components.
 */
export default function Highlights() {
    return (
        <section className="mx-auto max-w-6xl px-4 pb-4 pt-[5.5rem]">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {HighlightItems.map(
                    ({
                        name,
                        description,
                        icon: Icon,
                        bgColour,
                        mainColour,
                    }) => (
                        <HighlightsCard
                            key={name}
                            name={name}
                            description={description}
                            icon={<Icon />}
                            bgColour={bgColour}
                            mainColour={mainColour}
                        />
                    )
                )}
            </ul>
        </section>
    );
}
