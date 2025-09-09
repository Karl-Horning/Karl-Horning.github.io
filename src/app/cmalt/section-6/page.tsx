import CMALTLayout from "@/components/Layouts/CMALTLayout";
import { cmaltSections } from "@/constants/cmalt";
import { internalRoutes } from "@/constants/links";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

const { CmaltRoute } = internalRoutes;

export const metadata = createMetadata({
    title: "Section 6: Advanced Area(s) | CMALT",
    path: CmaltRoute,
});

export default function Page() {
    const section6 = cmaltSections.find(
        (section) => section.slug === "section-6"
    );

    return (
        <CMALTLayout
            title="Section 6: Advanced Area(s)"
            lastUpdated="2025-09-09"
        >
            <section id="description">
                <h2>Description</h2>

                <p>
                    Section 6 outlines my future plans for continuing
                    professional development and maintaining my CMALT
                    accreditation. It reflects on the direction I want to take
                    in my career, identifies areas for growth, and sets out how
                    I intend to stay current with developments in learning
                    technology and digital education. The following subsections
                    highlight my goals and the steps I plan to take to achieve
                    them:
                </p>

                {section6?.children && (
                    <ul className="ml-4 mt-1 space-y-1 text-sm">
                        {section6.children.map((child) => (
                            <li key={child.slug}>
                                <Link
                                    href={`/cmalt/${section6.slug}/${child.slug}`}
                                    className="cmalt-nav"
                                >
                                    {child.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </CMALTLayout>
    );
}
