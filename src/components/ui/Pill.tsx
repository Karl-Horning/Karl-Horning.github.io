interface PillProps {
    text: string;
    mainColour: string;
    bgColour: string;
}

/**
 * A small rounded label component styled with Tailwind classes.
 *
 * Commonly used for tags, values, or metadata in lists and grids.
 *
 * @param props - Component properties.
 * @param props.text - The text displayed inside the pill.
 * @param props.mainColour - Tailwind CSS class applied to the text colour.
 * @param props.bgColour - Tailwind CSS class applied to the background colour.
 * @returns A styled pill element containing the provided text.
 */
export default function Pill({ text, mainColour, bgColour }: PillProps) {
    return (
        <span
            className={`${mainColour} ${bgColour} rounded-full px-3 py-1 font-semibold`}
        >
            {text}
        </span>
    );
}
