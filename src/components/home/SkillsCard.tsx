import { ReactNode } from "react";
import IconBox from "../ui/IconBox";

interface SkillsCardProps {
    /**
     * The title of the skill, displayed as bold text.
     */
    name: string;

    /**
     * The icon element to visually represent the skill.
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
 * Renders a single skills card used in the Skills grid.
 *
 * Each card contains:
 * - An icon inside a coloured `IconBox`
 * - A bold title
 * - An optional descriptive paragraph
 *
 * Used within the `Skills` section to showcase skills or features.
 *
 * @param props - The properties for the skill card.
 * @param props.name - Title of the skill (displayed prominently).
 * @param props.icon - The icon element, typically from the skills constants.
 * @param props.bgColour - Tailwind class for the icon's background colour.
 * @param props.mainColour - Tailwind class for the icon's main (foreground) colour.
 * @returns A styled list item (`<li>`) containing the skill card.
 */
export default function SkillsCard({
    name,
    icon,
    mainColour,
    bgColour,
}: SkillsCardProps) {
    return (
        <li className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-yellow-400/20 text-yellow-500">
                    <IconBox
                        icon={icon}
                        mainColour={mainColour}
                        bgColour={bgColour}
                    />
                </span>
                <span className="text-sm font-semibold">{name}</span>
            </div>
        </li>
    );
}
