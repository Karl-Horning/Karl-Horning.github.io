"use client";

import { usePathname } from "next/navigation";
import { cmaltSections } from "@/lib/constants/cmalt";
import Link from "next/link";

/**
 * Renders the sticky sidebar navigation for the CMALT portfolio pages.
 *
 * Displays a hierarchical list of navigation links sourced from
 * `cmaltSections`, including both top-level and child pages. Highlights
 * the active link based on the current route.
 *
 * @remarks
 * This component is client-side (`"use client"`) because it relies on
 * `usePathname()` from Next.js to determine the active route dynamically.
 *
 * The sidebar remains fixed within the viewport and supports light/dark
 * mode styling for accessibility and contrast.
 *
 * @returns A sticky `<aside>` element containing structured navigation links
 * for the CMALT portfolio.
 */
export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside
            aria-label="CMALT navigation"
            className="sticky top-[4.5rem] hidden max-h-[calc(100vh-6rem)] overflow-auto rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:block dark:border-slate-800 dark:bg-slate-900"
        >
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
                CMALT Portfolio
            </h3>
            <nav className="space-y-2 text-sm">
                {cmaltSections.map(({ slug, label, children }) => {
                    const topHref = slug ? `/cmalt/${slug}` : `/cmalt`;
                    const isActive = pathname === topHref;

                    return (
                        <div key={slug}>
                            <Link
                                href={topHref}
                                className={`flex cursor-pointer items-center justify-between rounded px-2 py-1 font-semibold hover:bg-slate-50 dark:hover:bg-slate-600 ${
                                    isActive
                                        ? "text-primary dark:bg-primary dark:text-white"
                                        : ""
                                }`}
                                aria-current={isActive ? "page" : undefined}
                            >
                                {label}
                            </Link>

                            {children && (
                                <ul className="ml-4 mt-1 space-y-1 text-sm">
                                    {children.map((child) => {
                                        const childHref = `${topHref}/${child.slug}`;
                                        const isChildActive =
                                            pathname === childHref;

                                        return (
                                            <li key={child.slug}>
                                                <Link
                                                    href={childHref}
                                                    className={`block w-full rounded px-2 py-1 hover:bg-slate-50 dark:hover:bg-slate-600 ${
                                                        isChildActive
                                                            ? "text-primary dark:bg-primary dark:text-white"
                                                            : ""
                                                    }`}
                                                    aria-current={
                                                        isChildActive
                                                            ? "page"
                                                            : undefined
                                                    }
                                                >
                                                    {child.label}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </div>
                    );
                })}
            </nav>
        </aside>
    );
}
