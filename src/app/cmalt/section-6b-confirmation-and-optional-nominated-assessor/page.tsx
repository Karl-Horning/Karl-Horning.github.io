import CmaltLayout from "@/components/layouts/CmaltLayout";
import { internalRoutes } from "@/lib/constants/ui";
import { createMetadata } from "@/lib/metadata";
import { meta } from "./meta";

const { CmaltRoute } = internalRoutes;

// Metadata
export const metadata = createMetadata({
    title: `${meta.title} | CMALT`,
    path: `${CmaltRoute}/${meta.slug}`,
});

// Section 6b
export default function Page() {
    return (
        <CmaltLayout {...meta}>
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
                    Signed: <strong>Karl Horning</strong>
                </p>
                <p>
                    Date: <strong>21 October 2025</strong>
                </p>
            </section>

            <section id="nominated-assessor">
                <h2>Nominated Assessor (optional)</h2>

                <p>I am not nominating an assessor for this submission.</p>
            </section>
        </CmaltLayout>
    );
}
