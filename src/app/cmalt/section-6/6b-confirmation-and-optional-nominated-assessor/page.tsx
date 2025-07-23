import CMALTLayout from "@/components/Layouts/CMALTLayout";
import { internalRoutes } from "@/constants/links";
import { createMetadata } from "@/lib/metadata";

const { CmaltRoute } = internalRoutes;

export const metadata = createMetadata({
    title: "6b: Declaration and Nominated Assessor (optional) | CMALT",
    path: CmaltRoute,
});

export default function page() {
    return (
        <CMALTLayout title="6b: Declaration and Nominated Assessor (optional)" lastUpdated="2025-07-22">
            <section id="cmalt-guidance">
                <h2>CMALT Guidance</h2>
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
