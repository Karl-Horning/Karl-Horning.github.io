import { bioSidebarItems } from "@/lib/constants/about";

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
        <aside className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 id="values-heading" className="mb-6 text-lg font-semibold">
                At a glance
            </h3>
            <ul className="space-y-3">
                {bioSidebarItems.map(({ title, icon: Icon }) => (
                    <li key={title} className="flex items-start gap-4">
                        <Icon
                            aria-hidden="true"
                            focusable="false"
                            className="mt-1.5 flex-shrink-0 text-sm text-secondary"
                        />
                        <div className="text-slate-700 dark:text-slate-300">
                            {title}
                        </div>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
