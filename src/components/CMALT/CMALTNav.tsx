"use client";

import { usePathname } from "next/navigation";
import { cmaltSections } from "@/lib/constants/cmalt";
import Link from "next/link";

/**
 * CMALTNav component displaying a navigation menu for the CMALT portfolio.
 *
 * Renders top-level sections and nested items based on the `cmaltSections` constant.
 * Highlights the current page based on pathname.
 * Intended for use in a sidebar or page layout to help users navigate through the portfolio.
 *
 * @component
 * @returns The rendered navigation for CMALT sections and sub-sections.
 */
export default function CMALTNav() {
    const pathname = usePathname();

    return (
        <section aria-label="CMALT Sections" className="mt-6 text-left">
            <h3 className="mb-2 text-lg">CMALT Portfolio</h3>
            <nav className="space-y-2">
                {cmaltSections.map(({ slug, label, children }) => {
                    const topHref = slug ? `/cmalt/${slug}` : `/cmalt`;
                    const isActive = pathname === topHref;

                    return (
                        <div key={slug}>
                            <Link
                                href={topHref}
                                className={`cmalt-nav font-semibold ${
                                    isActive ? "text-primary" : ""
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
                                                    className={`cmalt-nav ${
                                                        isChildActive
                                                            ? "text-primary"
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
        </section>
    );
}
