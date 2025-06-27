import { FaDatabase, FaJs, FaReact, FaUniversalAccess } from "react-icons/fa6";
import Header from "../Header";
import SkillsCard from "./SkillsCard";

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
            icon: FaJs,
            colour: "text-yellow-400",
        },
        {
            text: "React",
            icon: FaReact,
            colour: "text-blue-400",
        },
        {
            text: "Accessibility",
            icon: FaUniversalAccess,
            colour: "text-red",
        },
        {
            text: "SQL & APIs",
            icon: FaDatabase,
            colour: "text-orange-400",
        },
    ];
    return (
        <section className="bg-background px-6 py-16">
            <div className="mx-auto max-w-6xl">
                <Header text="Skills" />
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
        </section>
    );
}
