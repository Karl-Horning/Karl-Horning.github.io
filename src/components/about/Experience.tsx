import { workExperience } from "@/lib/constants/about";
import ExperienceCard from "./ExperienceCard";

/**
 * Renders the "Experience" section of the site.
 *
 * This section displays a heading and a list of work experience entries,
 * each rendered as an `ExperienceCard`. The data is sourced from the
 * `workExperience` constants.
 *
 * @returns A styled `<section>` element containing a heading and a list of experience cards.
 */
export default function Experience() {
    return (
        <section className="mx-auto max-w-6xl px-4 pt-20">
            <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
            <ol className="mt-6 space-y-4">
                {workExperience.map((params) => (
                    <ExperienceCard
                        key={`${params.jobTitle} ${params.employer}`}
                        {...params}
                    />
                ))}
            </ol>
        </section>
    );
}
