import CMALTLayout from "@/components/Layouts/CMALTLayout";
import { cmaltSections } from "@/constants/cmalt";
import { internalRoutes } from "@/constants/links";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

const { CmaltRoute } = internalRoutes;

export const metadata = createMetadata({
    title: "Section 1: Operational Issues | CMALT",
    path: CmaltRoute,
});

export default function Page() {
    const section1 = cmaltSections.find(
        (section) => section.slug === "section-1"
    );

    return (
        <CMALTLayout
            title="Section 1: Operational Issues"
            lastUpdated="2025-07-22"
        >
            <section>
                <h2>CMALT Guidance</h2>

                <p>
                    Candidates should demonstrate both their understanding and
                    use of Learning Technology. &quot;Use&quot; might include
                    the use of technology to enhance learning and teaching, or
                    the development, adoption or deployment of technology to
                    support teaching, training or education.
                </p>
            </section>

            <section>
                <h2>Description</h2>

                <p>
                    Section 1 focuses on the practical and technical aspects of
                    working with learning technologies. It includes examples of
                    how I have addressed organisational constraints, applied
                    technical knowledge, and supported the deployment of systems
                    and services. The following subsections highlight where I
                    provide this evidence:
                </p>

                {section1?.children && (
                    <ul className="ml-4 mt-1 space-y-1 text-sm">
                        {section1.children.map((child) => (
                            <li key={child.slug}>
                                <Link
                                    href={`/cmalt/${section1.slug}/${child.slug}`}
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
