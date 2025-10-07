import { HighlightIcons } from "@/lib/constants/home";
import IconCard from "../ui/IconCard";

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
        <section id="highlights" className="mx-auto max-w-6xl px-4 pt-20">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {HighlightIcons.map(
                    ({
                        title,
                        description,
                        icon: Icon,
                        bgColour,
                        mainColour,
                    }) => (
                        <IconCard
                            key={title}
                            title={title}
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
