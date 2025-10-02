import Pill from "../ui/Pill";

interface ExperienceCardProps {
    /**
     * The date range for the experience entry (for example, "2022–2024").
     */
    dates: string;

    /**
     * The job title held during this experience.
     */
    jobTitle: string;

    /**
     * The employer or organisation name.
     */
    employer: string;

    /**
     * The location of the role (for example, "London, UK").
     */
    location: string;

    /**
     * A short highlight or key skill/tag displayed in a pill.
     */
    highlight: string;

    /**
     * A longer description providing more detail about the role.
     */
    description: string;

    /**
     * Tailwind CSS class applied to the pill text colour.
     * Defaults to `"text-slate-800 dark:text-slate-200"`.
     */
    mainColour?: string;

    /**
     * Tailwind CSS class applied to the pill background colour.
     * Defaults to `"bg-slate-200 dark:bg-slate-800"`.
     */
    bgColour?: string;
}

/**
 * Renders a card component representing a single work experience entry.
 *
 * Each card contains:
 * - A date range
 * - A job title, employer, and location
 * - A highlight displayed as a `Pill`
 * - A descriptive paragraph about the role
 *
 * Commonly used in a CV, portfolio, or "Experience" section.
 *
 * @param props - The properties for the ExperienceCard component.
 * @param props.dates - The date range of the experience entry.
 * @param props.jobTitle - The job title for this role.
 * @param props.employer - The employer or organisation name.
 * @param props.location - The location of the role.
 * @param props.highlight - A key skill, tag, or achievement displayed in a pill.
 * @param props.description - A longer description of the role.
 * @param props.mainColour - Tailwind class for pill text colour.
 * @param props.bgColour - Tailwind class for pill background colour.
 * @returns A styled `<li>` element containing the experience entry.
 */
export default function ExperienceCard({
    dates,
    description,
    employer,
    highlight,
    jobTitle,
    location,
    mainColour = "text-slate-800 dark:text-slate-200",
    bgColour = "bg-slate-200 dark:bg-slate-800",
}: ExperienceCardProps) {
    return (
        <li className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                    <p className="text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        {dates}
                    </p>
                    <p className="font-semibold">
                        {jobTitle} &bull; {employer} &bull; {location}
                    </p>
                </div>
                <Pill
                    text={highlight}
                    className="text-xs"
                    bgColour={bgColour}
                    mainColour={mainColour}
                />
            </div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                {description}
            </p>
        </li>
    );
}
