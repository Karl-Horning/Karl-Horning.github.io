import CMALTLayout from "@/components/Layouts/CMALTLayout";
import { cmaltSections } from "@/lib/constants/cmalt";
import { internalRoutes } from "@/lib/constants/links";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

const { CmaltRoute } = internalRoutes;

export const metadata = createMetadata({
    title: "Section 5: Specialist Area(s) | CMALT",
    path: CmaltRoute,
});

export default function Page() {
    const section5 = cmaltSections.find(
        (section) => section.slug === "section-5"
    );

    return (
        <CMALTLayout
            title="Section 5: Specialist Area(s)"
            lastUpdated="2025-09-09"
        >
            <section id="description">
                <h2>Description</h2>

                <p>
                    This section describes my specialist area of full-stack
                    JavaScript development, focusing on building and optimising
                    GraphQL APIs and working with PostgreSQL databases. It
                    highlights how I apply these technical skills within
                    educational technology to enhance learner access, platform
                    performance, and system reliability. The following
                    subsection provides evidence of how my combined experience
                    in education and development enables me to deliver
                    efficient, user-centred solutions that support inclusive and
                    scalable learning environments:
                </p>

                {section5?.children && (
                    <ul className="ml-4 mt-1 space-y-1 text-sm">
                        {section5.children.map((child) => (
                            <li key={child.slug}>
                                <Link
                                    href={`/cmalt/${section5.slug}/${child.slug}`}
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
