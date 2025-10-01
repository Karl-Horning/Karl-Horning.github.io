import { internalRoutes } from "@/lib/constants/links";
import { SkillsIcons } from "@/lib/constants/skills";
import { icons } from "@/lib/constants/icons";
import ButtonLink from "../ui/ButtonLink";
import SkillsCard from "./SkillsCard";

const { ContactRoute } = internalRoutes;
const { HireMeIcon } = icons;

/**
 * Displays a grid of skill cards for technical and professional skills.
 *
 * Each card includes an icon and title. The data
 * is sourced from `SkillIcons` in the constants library and rendered
 * responsively as a six-column grid on large screens.
 *
 * @returns A section containing a responsive grid of `SkillsCard` components.
 */
export default function Skills() {
    return (
        <section id="skills" className="mx-auto max-w-6xl px-4 py-20">
            <div className="flex items-end justify-between gap-6">
                <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
                <ButtonLink
                    text="Available for work"
                    href={ContactRoute}
                    icon={<HireMeIcon />}
                    type="secondary"
                />
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {SkillsIcons.map(
                    ({ name, icon: Icon, bgColour, mainColour }) => (
                        <SkillsCard
                            key={name}
                            name={name}
                            icon={<Icon />}
                            bgColour={bgColour}
                            mainColour={mainColour}
                        />
                    )
                )}
            </ul>
        </section>
    );
}
