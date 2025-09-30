import CMALTLayout from "@/components/Layouts/CMALTLayout";
import { cmaltSections } from "@/lib/constants/cmalt";
import { internalRoutes } from "@/lib/constants/links";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

const { CmaltRoute } = internalRoutes;

export const metadata = createMetadata({
    title: "Overview | CMALT",
    path: CmaltRoute,
});

export default function page() {
    return (
        <CMALTLayout title="Overview" lastUpdated="2025-07-24">
            <h2>Description</h2>

            <p>
                This overview provides a structured map of the CMALT portfolio,
                aligning with the assessment framework and linking directly to
                each submission section.
            </p>

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
        </CMALTLayout>
    );
}
