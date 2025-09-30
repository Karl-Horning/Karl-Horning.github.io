import CMALTLayout from "@/components/Layouts/CMALTLayout";
import { cmaltSections } from "@/constants/cmalt";
import { internalRoutes } from "@/constants/links";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

const { CmaltRoute } = internalRoutes;

export const metadata = createMetadata({
    title: "Section 4: Communication and Working with Others | CMALT",
    path: CmaltRoute,
});

export default function Page() {
    const section4 = cmaltSections.find(
        (section) => section.slug === "section-4"
    );

    return (
        <CMALTLayout
            title="Section 4: Communication and Working with Others"
            lastUpdated="2025-09-30"
        >
            <section id="description">
                <h2>Description</h2>

                <p>
                    Section 4 highlights how I communicate and collaborate with
                    others in my professional practice. It includes examples of
                    teamwork, peer learning, stakeholder engagement, and the
                    ways I share knowledge through presentations, publications,
                    and informal channels. The following subsection provides
                    evidence of how I contribute to and benefit from working
                    with others:
                </p>

                {section4?.children && (
                    <ul className="ml-4 mt-1 space-y-1 text-sm">
                        {section4.children.map((child) => (
                            <li key={child.slug}>
                                <Link
                                    href={`/cmalt/${section4.slug}/${child.slug}`}
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
