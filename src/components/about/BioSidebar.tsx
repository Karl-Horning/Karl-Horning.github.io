import { bioSidebarItems } from "@/lib/constants/about";
import { icons } from "@/lib/constants/ui";
const { LocationIcon } = icons;
/**
 * Renders a sidebar with key personal and professional details.
 *
 * Displays the `bioSidebarItems` as a list under the heading
 * "At a glance," with each item showing an icon and a short label.
 * Commonly used on the About page to highlight location, sector
 * experience, skills, and focus areas.
 *
 * @returns The "At a glance" sidebar section with a styled list of bio items.
 */
export default function BioSidebar() {
    return (
        <aside aria-labelledby="glance2" className="md:sticky md:top-24">
            <h2 id="glance2" className="mb-4 text-lg font-semibold">
                At a glance
            </h2>
            <ul className="items-start gap-3 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm  dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900">
                {bioSidebarItems.map(({ icon: Icon, title, description }) => (
                    <li key={title} className="flex gap-3 p-4">
                        <span className="grid h-10 w-10 min-w-10 place-items-center rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                            {<Icon />}
                        </span>
                        <div>
                            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                                {title}
                            </p>
                            <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                                {description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
