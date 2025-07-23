import CMALTLayout from "@/components/Layouts/CMALTLayout";
import { internalRoutes } from "@/constants/links";
import { createMetadata } from "@/lib/metadata";

const { CmaltRoute } = internalRoutes;

export const metadata = createMetadata({
    title: "Future Plans (CMALT)",
    path: CmaltRoute,
});

export default function FuturePlansPage() {
    return (
        <CMALTLayout title="Future Plans" lastUpdated="2025-07-22">
            <section id="cmalt-guidance">
                <h2>CMALT Guidance</h2>

                <p>
                    This section is not assessed, but it is still a required
                    section, of between 200 - 500 words. The purpose of this is
                    not only to give the assessor a sense of your future aims,
                    but also help you plan for your professional development. It
                    will be useful when preparing to keep your CMALT
                    accreditation current by undertaking a review of your
                    practice every 3 years.
                </p>
            </section>

            <section>
                <h2>Future Directions in Learning Technology</h2>

                <p>
                    Looking ahead, I intend to further integrate the learning
                    technology and development aspects of my practice, with a
                    particular focus on accessibility, open standards, and
                    learner agency. My experience supporting the selection and
                    deployment of learning technologies at the institutional
                    level has reaffirmed my commitment to designing tools and
                    systems that are inclusive, evidence-informed, and sensitive
                    to diverse learning contexts.
                </p>

                <p>
                    Over the next few years, I plan to deepen my engagement with
                    accessibility standards such as WCAG 2.2 and EN 301 549, and
                    to work more actively with user-centred design and
                    co-creation practices, ensuring that learners and educators
                    are directly involved in shaping the tools they use.
                </p>

                <p>
                    I&apos;m increasingly drawn to the intersection of pedagogy
                    and code, especially in projects involving LMS platforms,
                    open educational resources, and interactive front ends built
                    with technologies like React, GraphQL, and PostgreSQL. I
                    hope to contribute to open-source tools or standards in this
                    space, whether through code contributions or by developing
                    guidance to support collaboration between educators and
                    developers.
                </p>

                <p>
                    Continuing professional development will remain a priority.
                    I plan to undertake further formal training in digital
                    accessibility and ethics in AI, and to stay actively engaged
                    with ALT and other professional networks that foster the
                    sharing of inclusive, evidence-based practice. I am also
                    considering CMALT Lead or Senior CMALT in the future,
                    particularly if I move into a role with strategic oversight
                    of learning technologies or staff development.
                </p>

                <p>
                    Finally, I aim to mentor others entering the learning
                    technology profession, particularly those from
                    underrepresented or non-traditional backgrounds. Having
                    benefited from strong peer networks myself, I believe it is
                    important to give back by encouraging reflective,
                    learner-centred practice and by supporting the professional
                    growth of others through initiatives like CMALT.
                </p>
            </section>
        </CMALTLayout>
    );
}
