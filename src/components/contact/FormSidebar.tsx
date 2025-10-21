import { externalLinks, icons } from "@/lib/constants/ui";
import { decorateIcon } from "@/lib/helpers";

const { GitHubIcon, LinkedInIcon } = icons;
const { GitHubLink, LinkedInLink } = externalLinks;

/**
 * Displays supporting information alongside the contact form.
 *
 * Provides context such as typical response turnaround time and
 * suggestions for what details are most useful to include in a
 * contact enquiry. Designed to complement the `Form` component,
 * appearing in the sidebar on wider screens.
 *
 * @returns The sidebar section with turnaround details and enquiry tips.
 */
export default function FormSidebar() {
    return (
        <section className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 className="font-semibold">Availability & turnaround</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-600 dark:text-slate-400">
                    <li>
                        <span className="font-medium">Typical reply:</span> 1-2
                        working days
                    </li>
                    <li>
                        <span className="font-medium">Hours:</span> Mon-Fri (UK
                        time)
                    </li>
                </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 className="font-semibold">What helps me help you</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-600 dark:text-slate-400">
                    <li>Goal and audience</li>
                    <li>Rough scope & timeline</li>
                    <li>Links to any specs or repos</li>
                </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 className="mb-3 font-semibold">Connect</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                    I&apos;m most active on LinkedIn and GitHub.
                </p>
                <div className="mt-4 flex gap-3">
                    <a
                        href={LinkedInLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="grid h-9 w-9 place-items-center rounded-lg bg-slate-100 text-slate-700 transition-colors duration-300 hover:bg-primary hover:text-white dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-primary"
                    >
                        {decorateIcon(<LinkedInIcon className="text-lg" />)}
                    </a>
                    <a
                        href={GitHubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="grid h-9 w-9 place-items-center rounded-lg bg-slate-100 text-slate-700 transition-colors duration-300 hover:bg-primary hover:text-white dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-primary"
                    >
                        {decorateIcon(<GitHubIcon className="text-lg" />)}
                    </a>
                </div>
            </div>
        </section>
    );
}
