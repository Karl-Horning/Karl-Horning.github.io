import { cmaltSections } from "@/constants/cmalt";
import Link from "next/link";

/**
 * CMALTNav component displaying a navigation menu for the CMALT portfolio.
 * 
 * Renders top-level sections and nested items based on the `cmaltSections` constant.
 * Intended for use in a sidebar or page layout to help users navigate through the portfolio.
 *
 * @component
 * @returns The rendered navigation for CMALT sections and sub-sections.
 */
export default function CMALTNav() {
    return (
        <section aria-label="CMALT Sections" className="mt-6 text-left">
            <h3 className="mb-2 text-lg">CMALT Portfolio</h3>
            <nav className="space-y-2">
                {cmaltSections.map(({ slug, label, children }) => (
                    <div key={slug}>
                        <Link
                            href={`/cmalt/${slug}`}
                            className="cmalt-nav font-semibold"
                        >
                            {label}
                        </Link>
                        {children && (
                            <ul className="ml-4 mt-1 space-y-1 text-sm">
                                {children.map((child) => (
                                    <li key={child.slug}>
                                        <Link
                                            href={`/cmalt/${slug}/${child.slug}`}
                                            className="cmalt-nav"
                                        >
                                            {child.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </nav>
        </section>
    );
}
