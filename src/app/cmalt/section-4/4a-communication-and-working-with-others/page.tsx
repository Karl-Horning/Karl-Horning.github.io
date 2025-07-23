import CMALTLayout from "@/components/Layouts/CMALTLayout";
import { internalRoutes } from "@/constants/links";
import { createMetadata } from "@/lib/metadata";

const { CmaltRoute } = internalRoutes;

export const metadata = createMetadata({
    title: "4a: Communication and Working With Others | CMALT",
    path: CmaltRoute,
});

export default function page() {
    return (
        <CMALTLayout
            title="4a: Communication and Working With Others"
            lastUpdated="2025-07-22"
        >
            <section id="cmalt-guidance">
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

            <section id="description">
                <h2>Description</h2>
            </section>

            <section id="reflection">
                <h2>Reflection</h2>
            </section>

            <section id="summary">
                <h2>Summary</h2>
            </section>

            <section id="evidence">
                <h2>Evidence</h2>
            </section>

            <section id="further-reading">
                <h2>Further Reading</h2>
            </section>
        </CMALTLayout>
    );
}
