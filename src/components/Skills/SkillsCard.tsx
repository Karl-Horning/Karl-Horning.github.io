import { ElementType } from "react";

interface SkillsCardProps {
    text: string;
    icon: ElementType;
    colour?: string;
}

/**
 * A card component to display a skill with an icon and label.
 *
 * @component
 * @param {string} text - The label for the skill.
 * @param {ElementType} icon - A React component representing the icon (for example, from `react-icons`).
 * @param {string} [colour] - Optional Tailwind text colour class (for example, `text-primary`).
 */
export default function SkillsCard({
    text,
    icon: Icon,
    colour,
}: SkillsCardProps) {
    return (
        <div className="flex flex-col items-center rounded-lg bg-surface p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <Icon
                className={`mb-4 text-5xl ${colour ? colour : "text-primary"}`}
            />

            <p className="text-lg font-semibold text-text">{text}</p>
        </div>
    );
}
