import SkillsCard from "@/components/Skills/SkillsCard";
import Section from "@/components/Section";
import { homeSkills } from "@/constants/home";

/**
 * A section component that displays a grid of skill cards with icons.
 *
 * @component
 * @returns A section containing a heading and a responsive grid of `SkillsCard` components.
 */
export default function Skills() {
    return (
        <Section id="skills" header="Skills">
            <div className="mx-auto max-w-6xl">
                <div
                    className="mx-auto grid max-w-4xl grid-cols-2 gap-10 text-center sm:grid-cols-3 md:grid-cols-4"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                >
                    {homeSkills.map(({ name, icon, colour }, index) => (
                        <div
                            key={name}
                            data-aos="zoom-in"
                            data-aos-delay={300 + index * 100}
                        >
                            <SkillsCard
                                text={name}
                                icon={icon}
                                colour={colour}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
