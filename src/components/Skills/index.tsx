import SkillsCard from "@/components/Skills/SkillsCard";
import Section from "@/components/Section";
import { icons } from "@/constants/icons";

/**
 * A section component that displays a grid of skill cards with icons.
 *
 * @component
 * @returns A section containing a heading and a responsive grid of `SkillsCard` components.
 */
export default function Skills() {
    const skills = [
        {
            text: "JavaScript",
            icon: icons.javaScript,
            colour: "text-yellow-400",
        },
        {
            text: "React",
            icon: icons.react,
            colour: "text-blue-400",
        },
        {
            text: "Accessibility",
            icon: icons.accessibility,
            colour: "text-red",
        },
        {
            text: "SQL & APIs",
            icon: icons.database,
            colour: "text-orange-400",
        },
    ];
    return (
        <Section id="skills" header="Skills">
            <div className="mx-auto max-w-6xl">
                <div className="mx-auto grid max-w-4xl grid-cols-2 gap-10 text-center sm:grid-cols-3 md:grid-cols-4">
                    {skills.map(({ text, icon, colour }) => (
                        <SkillsCard
                            key={text}
                            text={text}
                            icon={icon}
                            colour={colour}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}
