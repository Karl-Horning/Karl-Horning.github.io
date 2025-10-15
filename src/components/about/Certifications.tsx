import { certificationItems } from "@/lib/constants/about";
import CertificationsCard from "./CertificationsCard";

/**
 * Renders the "Certifications & badges" section.
 *
 * Displays a list of earned certifications and professional badges,
 * sourced from `certificationItems`. Each item is rendered using
 * the `CertificationsCard` component, showing its title, issuing
 * organisation, date, badge image, and optional verification link.
 *
 * @returns The "Certifications & badges" section containing a list of certification cards.
 */
export default function Certifications() {
    return (
        <section className="mx-auto max-w-6xl px-4 pt-20">
            <h2 className="text-2xl font-bold tracking-tight">
                Certifications & badges
            </h2>
            <ul className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900">
                {certificationItems.map(({ title, ...props }) => (
                    <CertificationsCard key={title} title={title} {...props} />
                ))}
            </ul>
        </section>
    );
}
