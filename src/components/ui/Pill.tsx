import { decorateIcon } from "@/lib/helpers/iconHelpers";
import { ReactNode } from "react";

interface PillProps {
    /**
     * The text displayed inside the pill.
     */
    text: ReactNode;

    /**
     * An optional icon displayed alongside the text.
     */
    icon?: ReactNode;

    /**
     * Tailwind CSS class applied to the text colour.
     * Defaults to `"text-slate-800 dark:text-slate-200"`.
     */
    mainColour?: string;

    /**
     * Tailwind CSS class applied to the background colour.
     * Defaults to `"bg-slate-200 dark:bg-slate-800"`.
     */
    bgColour?: string;

    /**
     * Additional Tailwind classes for custom styling or layout.
     * Defaults to an empty string.
     */
    className?: string;
}

/**
 * Renders a small, rounded "pill" label component styled with Tailwind CSS.
 *
 * Typically used for tags, values, or metadata in lists, cards, or grids.
 *
 * @param props - The properties for the Pill component.
 * @param props.text - The text displayed inside the pill.
 * @param props.icon - Optional icon displayed before the text.
 * @param props.mainColour - Tailwind class for text colour (with light/dark mode support).
 * @param props.bgColour - Tailwind class for background colour (with light/dark mode support).
 * @param props.className - Additional custom classes for styling or layout adjustments.
 * @returns A styled `<span>` element containing the provided text and optional icon.
 */
export default function Pill({
    text,
    icon,
    mainColour = "text-slate-800 dark:text-slate-200",
    bgColour = "bg-slate-200 dark:bg-slate-800",
    className = "",
}: PillProps) {
    return (
        <span
            className={`${mainColour} ${bgColour} inline-flex items-center gap-2 rounded-full px-3 py-1 font-semibold ${className}`}
        >
            {icon && (
                <span className="flex-shrink-0">{decorateIcon(icon)}</span>
            )}
            <span>{text}</span>
        </span>
    );
}
