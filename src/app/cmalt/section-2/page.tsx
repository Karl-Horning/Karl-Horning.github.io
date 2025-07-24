import CMALTLayout from "@/components/Layouts/CMALTLayout";
import { cmaltSections } from "@/constants/cmalt";
import { internalRoutes } from "@/constants/links";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

const { CmaltRoute } = internalRoutes;

export const metadata = createMetadata({
    title: "Section 2: Learning, Teaching and Assessment Processes | CMALT",
    path: CmaltRoute,
});

export default function Page() {
    const section2 = cmaltSections.find(
        (section) => section.slug === "section-2"
    );

    return (
        <CMALTLayout
            title="Section 2: Learning, Teaching and Assessment Processes"
            lastUpdated="2025-07-24"
        >
            <section id="cmalt-guidance">
                <h2>CMALT Guidance</h2>

                <p>
                    Candidates should demonstrate their understanding of and
                    engagement with teaching, learning and assessment processes.
                    &apos;Engagement&apos; may include using understanding to
                    inform the development, adaptation or application of
                    technology.
                </p>

                <p>
                    Note that your learners are the people with whom you work.
                    For teaching staff this will typically be students. For many
                    learning technologists this may be students or the staff
                    that you support and train.
                </p>
            </section>

            <section id="description">
                <h2>Description</h2>

                <p>
                    Section 2 focuses on my engagement with teaching, learning,
                    and assessment processes. I reflect on how my understanding
                    of these areas has shaped the ways I support staff and
                    students, design learning experiences, and use technology to
                    enhance pedagogy. The following subsections illustrate how I
                    apply this understanding in my practice:
                </p>

                {section2?.children && (
                    <ul className="ml-4 mt-1 space-y-1 text-sm">
                        {section2.children.map((child) => (
                            <li key={child.slug}>
                                <Link
                                    href={`/cmalt/${section2.slug}/${child.slug}`}
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
