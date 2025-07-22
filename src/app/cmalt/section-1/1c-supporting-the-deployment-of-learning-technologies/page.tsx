import CMALTLayout from "@/components/Layouts/CMALTLayout";
import { internalRoutes } from "@/constants/links";
import { createMetadata } from "@/lib/metadata";

const { CmaltRoute } = internalRoutes;

export const metadata = createMetadata({
    title: "1c: Supporting the Deployment of Learning Technologies | CMALT",
    path: CmaltRoute,
});

export default function page() {
    return (
        <CMALTLayout
            title="1c: Supporting the Deployment of Learning Technologies"
            lastUpdated="2025-07-22"
        >
            <section>
                <h2>CMALT Guidance</h2>

                <p>
                    Statements about your involvement in supporting the
                    deployment of Learning Technology might relate to providing
                    technical and/or pedagogic support to teachers or learners,
                    advising on (or redesigning to take account of) technical
                    and usability issues, developing strategies or policies,
                    managing change, providing training or other forms of
                    professional development, securing or deploying dedicated
                    funding and so on, all within the context of the educational
                    use of Learning Technology.
                </p>

                <p>
                    For evidence, you might include the overview section of a
                    strategy document, meeting minutes, summaries of student
                    feedback, testimonials or witness statements from other
                    colleagues.
                </p>
            </section>

            <section>
                <h2>Description</h2>
            </section>

            <section>
                <h2>Reflection</h2>
            </section>

            <section>
                <h2>Summary</h2>
            </section>

            <section>
                <h2>Evidence</h2>
            </section>

            <section>
                <h2>Further Reading</h2>
            </section>
        </CMALTLayout>
    );
}
