import { ReactNode } from "react";
import IconBox from "../ui/IconBox";

interface HighlightsCardProps {
    /**
     * The title of the highlight, displayed as a bold heading.
     */
    name: string;

    /**
     * Optional description providing more detail about the highlight.
     */
    description?: string;

    /**
     * The icon element to visually represent the highlight.
     */
    icon: ReactNode;

    /**
     * Tailwind CSS class controlling the main (text/icon) colour.
     * Supports light/dark variants.
     */
    mainColour: string;

    /**
     * Tailwind CSS class controlling the background colour of the icon box.
     * Supports light/dark variants.
     */
    bgColour: string;
}

/**
 * Renders a single highlight card used in the Highlights grid.
 *
 * Each card contains:
 * - An icon inside a coloured `IconBox`
 * - A bold title
 * - An optional descriptive paragraph
 *
 * Used within the `Highlights` section to showcase skills or features.
 *
 * @param props - The properties for the highlight card.
 * @param props.name - Title of the highlight (displayed prominently).
 * @param props.description - Optional supporting text.
 * @param props.icon - The icon element, typically from the highlights constants.
 * @param props.bgColour - Tailwind class for the icon's background colour.
 * @param props.mainColour - Tailwind class for the icon's main (foreground) colour.
 * @returns A styled list item (`<li>`) containing the highlight card.
 */
export default function HighlightsCard({
    name,
    description,
    icon,
    bgColour,
    mainColour,
}: HighlightsCardProps) {
    return (
        <li className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-start gap-3">
                <IconBox
                    icon={icon}
                    bgColour={bgColour}
                    mainColour={mainColour}
                />
                <div>
                    <p className="font-semibold">{name}</p>
                    <p
                        className={`mt-1 text-sm text-slate-600 dark:text-slate-400`}
                    >
                        {description}
                    </p>
                </div>
            </div>
        </li>
    );
}
