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
            <section>
                <h2>CMALT Guidance</h2>
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
