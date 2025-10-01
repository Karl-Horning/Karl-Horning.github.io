import { ReactNode } from "react";

interface IconBoxProps {
    /**
     * The icon element to render inside the box.
     * Typically a React component from the highlights constants.
     */
    icon: ReactNode;

    /**
     * Tailwind CSS class controlling the background colour of the box.
     * Supports both light and dark mode variants.
     */
    bgColour: string;

    /**
     * Tailwind CSS class controlling the colour of the icon.
     * Supports both light and dark mode variants.
     */
    mainColour: string;
}

/**
 * A small square container for rendering an icon with consistent sizing,
 * rounded corners, and colour theming.
 *
 * Commonly used inside `HighlightsCard` to visually represent
 * a skill or feature with a coloured background.
 *
 * @param props - The properties for the icon box.
 * @param props.icon - The icon element to display.
 * @param props.bgColour - Tailwind class for the background colour.
 * @param props.mainColour - Tailwind class for the icon colour.
 * @returns A styled `<span>` element containing the icon.
 */
export default function IconBox({ icon, bgColour, mainColour }: IconBoxProps) {
    return (
        <span
            className={`grid h-10 w-10 min-w-10 place-items-center rounded-lg ${bgColour} ${mainColour}`}
        >
            {icon}
        </span>
    );
}
