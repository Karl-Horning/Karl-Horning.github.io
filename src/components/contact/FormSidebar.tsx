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
        <aside className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <p className="font-semibold">Typical turnaround</p>
                <p className="mt-1 text-slate-600 dark:text-slate-400">
                    1-2 working days (Mon-Fri, UK time).
                </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <p className="font-semibold">What helps me help you</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-600 dark:text-slate-400">
                    <li>Goal and audience</li>
                    <li>Rough scope & timeline</li>
                    <li>Links to any specs or repos</li>
                </ul>
            </div>
        </aside>
    );
}
