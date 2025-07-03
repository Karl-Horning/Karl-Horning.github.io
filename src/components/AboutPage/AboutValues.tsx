import { aboutValues } from "@/constants/about";

/**
 * A presentational component that displays a list of personal values.
 *
 * Renders a section with a heading and a vertical list of values,
 * each accompanied by an icon and a descriptive text.
 * Uses consistent styling with background colours and hover effects.
 *
 * The values are imported from a shared `aboutValues` constant.
 *
 * This component is static and does not accept any props.
 *
 * @component
 */
export default function AboutValues() {
    return (
        <div data-aos="zoom-in" data-aos-delay="300">
            <section
                aria-labelledby="values-heading"
                className="transform rounded-lg bg-surface p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
                <h2
                    id="values-heading"
                    className="mb-6 text-center text-2xl text-primary"
                >
                    What I Value
                </h2>
                <ul className="space-y-3">
                    {aboutValues.map(({ title, icon: Icon, description }) => (
                        <li key={title} className="flex items-start gap-4">
                            <Icon
                                aria-hidden="true"
                                focusable="false"
                                className="mt-2 flex-shrink-0 text-sm text-primary"
                            />
                            <div className="text-base text-text">
                                {description}
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
