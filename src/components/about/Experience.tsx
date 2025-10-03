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
            <ol className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900">
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
