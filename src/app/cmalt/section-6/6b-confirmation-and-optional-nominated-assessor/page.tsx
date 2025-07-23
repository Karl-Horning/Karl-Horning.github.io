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
        <CMALTLayout
            title="6b: Declaration and Nominated Assessor (optional)"
            lastUpdated="2025-07-22"
        >
            <section id="declaration">
                <h2>Declaration</h2>

                <p>I confirm that:</p>

                <ul>
                    <li>
                        I am the author of this portfolio and that it represents
                        my own work.
                    </li>
                    <li>
                        Where collaboration with others is discussed, their
                        contributions have been appropriately acknowledged.
                    </li>
                    <li>
                        Evidence included is appropriately anonymised or
                        included with permission.
                    </li>
                    <li>
                        I understand that by submitting this portfolio, I am
                        applying for CMALT accreditation and that the
                        information provided will be reviewed by assessors
                        appointed by ALT.
                    </li>
                </ul>

                <p>
                    <strong>Signed</strong> <em>Karl Horning</em>
                </p>
                <p>
                    <strong>Date</strong> <em>22 July 2025</em>
                </p>
            </section>

            <section id="nominated-assessor">
                <h2>Nominated Assessor (optional)</h2>

                <p>I am not nominating an assessor for this submission.</p>
            </section>
        </CMALTLayout>
    );
}
