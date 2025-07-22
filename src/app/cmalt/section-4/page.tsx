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
            lastUpdated="2025-07-22"
        >
            <section>
                <h2>CMALT Guidance</h2>

                <p>
                    Candidates should demonstrate their knowledge and skills in
                    communication through working with others. Statements could
                    describe the way in which your work involves collaboration,
                    for example through participation in a team or acting as an
                    interface to other groups. Also discuss how you disseminate
                    your practice, for example through presentation or
                    publications.
                </p>

                <p>
                    This section can help you directly address some of the CMALT
                    core principles: you might discuss how you communicate to
                    keep up to date, how you learn from peers and colleagues, or
                    how you disseminate your practice, for example through
                    presentation, publications, or other forms of communication.
                    You may also choose to discuss how you select appropriate
                    forms of communication and utilise different technologies.
                </p>

                <p>
                    Relevant evidence might include reflection on collaborations
                    with others and testimonials from colleagues, or evidence
                    showing your activity within a team process, how you have
                    brokered support for a particular initiative (for example
                    from a technical or legal support service), or how you have
                    worked with others to solve problems. Where your evidence
                    involved collaboration, please acknowledge the contribution
                    of others; and remember that it is your responsibility to
                    ensure that evidence is appropriately anonymised and/or that
                    appropriate permissions have been obtained.
                </p>
            </section>

            <section>
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
