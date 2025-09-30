import { aboutSkills } from "@/lib/constants/about";

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
        <div data-aos="zoom-in" data-aos-delay="400" className="lg:col-span-2">
            <section
                aria-labelledby="skills-heading"
                className="h-full transform rounded-lg bg-surface p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
                <h2
                    id="skills-heading"
                    className="mb-6 text-center text-2xl text-primary"
                >
                    Skills I&apos;ve Developed
                </h2>
                <ul className="grid grid-cols-2 gap-6 lg:grid-cols-3">
                    {aboutSkills.map(({ name, icon: Icon, colour }) => (
                        <li
                            key={`Icon: ${name}`}
                            className={`flex flex-col items-center justify-center rounded-lg p-4 text-white shadow-sm ${colour} text-center`}
                        >
                            <Icon
                                aria-hidden="true"
                                focusable="false"
                                className="mb-2 text-3xl"
                            />
                            <span className="text-sm font-medium">{name}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
