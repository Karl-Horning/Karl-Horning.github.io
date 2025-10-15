import { ReactNode } from "react";
import IconBox from "../ui/IconBox";
import Link from "next/link";

interface IconCardProps {
    /**
     * The main title displayed prominently.
     */
    title: string;

    /**
     * Optional description providing supporting details.
     */
    description?: string;

    /**
     * Optional URL. If provided, the description will be rendered as a clickable link.
     */
    link?: string;

    /**
     * The icon element to visually represent the content.
     */
    icon: ReactNode;

    /**
     * Tailwind CSS class controlling the main (icon/text) colour.
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
 * Renders a reusable card with an icon, a title, and optional description.
 *
 * Each card contains:
 * - An icon inside a coloured `IconBox`
 * - A bold title
 * - An optional descriptive paragraph
 *
 * Suitable for displaying features, highlights, or informational items.
 *
 * @param props - The properties for the card.
 * @param props.title - Title text displayed prominently.
 * @param props.description - Optional supporting text.
 * @param props.icon - The icon element.
 * @param props.bgColour - Tailwind class for the icon's background colour.
 * @param props.mainColour - Tailwind class for the icon's main (foreground) colour.
 * @returns A styled list item (`<li>`) containing the card content.
 */
export default function IconCard({
    title,
    description,
    link,
    icon,
    bgColour,
    mainColour,
}: IconCardProps) {
    // Automatically treat links starting with 'http' as external URLs
    const isExternal = link?.startsWith("http");

    let descriptionContent: ReactNode = null;

    // Conditionally render description based on whether a link is provided
    if (description) {
        if (link) {
            const commonClasses = "mt-1 text-sm text-secondary hover:underline";

            // Render as external link (opens in new tab)
            descriptionContent = isExternal ? (
                <p className={commonClasses}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        {description}
                    </a>
                </p>
            ) : (
                // Render as internal Next.js <Link>
                <p className={commonClasses}>
                    <Link href={link}>{description}</Link>
                </p>
            );
        } else {
            // Render plain text if no link is provided
            descriptionContent = (
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {description}
                </p>
            );
        }
    }

    return (
        <li
            className={`flex rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${
                description ? "items-start" : "items-center"
            } gap-3`}
        >
            <div className={`${description && "mt-1"}`}>
                <IconBox
                    icon={icon}
                    bgColour={bgColour}
                    mainColour={mainColour}
                />
            </div>
            <div>
                <p className="font-semibold">{title}</p>
                {descriptionContent}
            </div>
        </li>
    );
}
