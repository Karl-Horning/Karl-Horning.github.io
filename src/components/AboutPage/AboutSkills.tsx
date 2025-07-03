import { aboutSkills } from "@/constants/about";

/**
 * A visual skills grid component used on the About page.
 *
 * Displays a collection of technical and professional skills,
 * each represented by an icon and label. Uses a consistent layout
 * with background colours and hover effects.
 *
 * Icons are imported from a shared `icons` constant.
 *
 * This component is presentational and does not accept props.
 *
 * @component
 */
export default function AboutSkills() {
    return (
        <div data-aos="zoom-in" data-aos-delay="400">
            <section
                aria-labelledby="skills-heading"
                className="transform rounded-lg bg-surface p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
                <h2
                    id="skills-heading"
                    className="mb-6 text-center text-2xl text-primary"
                >
                    Skills
                </h2>
                <ul className="grid grid-cols-3 gap-4">
                    {aboutSkills.map(({ name, icon: Icon, colour }) => (
                        <li
                            key={`Icon: ${name}`}
                            className="flex flex-col items-center"
                        >
                            <div
                                className={`flex h-14 w-14 items-center justify-center rounded-full shadow-md ${colour}`}
                            >
                                <Icon
                                    aria-hidden="true"
                                    focusable="false"
                                    className="text-xl text-white"
                                />
                            </div>
                            <span className="mt-1 text-center text-sm">
                                {name}
                            </span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
