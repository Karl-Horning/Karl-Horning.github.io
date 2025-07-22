import CMALTLayout from "@/components/Layouts/CMALTLayout";
import { cmaltSections } from "@/constants/cmalt";
import { internalRoutes } from "@/constants/links";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

const { CmaltRoute } = internalRoutes;

export const metadata = createMetadata({
    title: "Section 5: Specialist Area(s) | CMALT",
    path: CmaltRoute,
});

export default function Page() {
    const section5 = cmaltSections.find(
        (section) => section.slug === "section-5"
    );

    return (
        <CMALTLayout title="Section 5: Specialist Area(s)" lastUpdated="2025-07-22">
            <h2>CMALT Guidance</h2>

            <p>
                As well as the core areas, candidates are required to
                demonstrate evidence of independent practice in one or more
                specialist areas. This reflects the fact that, although there
                are common areas of work for learning technologists, practice is
                extremely diverse and everyone specialises in something
                different.
            </p>

            <p>
                Your specialist topic should reflect an area where you have
                particular expertise. This may be unique to you or common across
                your team, but goes beyond what would be expected of any
                learning‌ technologist. Below are examples of specialist areas
                chosen by CMALT holders. You are free to choose from it, or to
                select a different area that reflects your expertise. It is
                recognised that practice is constantly evolving and that CMALT
                candidates come from very diverse contexts; this list of
                examples is neither comprehensive nor prescriptive.
            </p>

            <ul>
                <li>producing learning materials/content/courseware;</li>
                <li>
                    project management, including resource management, in
                    Learning Technology;
                </li>

                <li>training, mentoring and developing others;</li>

                <li>evaluation;</li>

                <li>research;</li>

                <li>
                    management/administration of a sustainable e-learning
                    process;
                </li>

                <li>supporting and tutoring learners;</li>

                <li>designing tools and systems;</li>

                <li>institutional development/strategic work;</li>
                <li>
                    knowledge and application of emerging standards for Learning
                    Technology;
                </li>
                <li>assistive technologies;</li>
                <li>VLE administration and maintenance;</li>

                <li>interface design;</li>
                <li>distance learning/blended learning;</li>
                <li>managing and sourcing content;</li>
                <li>copyright;</li>
                <li>learner support;</li>
                <li>accessibility;</li>
                <li>sustainability</li>
                <li>inclusive learning practice</li>
                <li>open education resources (OER)</li>
                <li>MOOCs.</li>
            </ul>

            <h3>Defining and evidencing your specialist area(s)</h3>

            <p>
                In describing your specialist area(s) you should refer to the
                core values listed at the top of these guidelines. Because these
                are specialist areas you should be clear what makes your work
                distinct from common practice; many people teach on online
                courses, but designing and delivering fully online courses
                requires specific skills and would be considered specialist.
                Similarly, many teachers provide blended learning, but
                developing and sharing guidelines for such practice or working
                with a distinctive blend of contexts might distinguish your work
                as specialist. It may be that your specialist area is common
                amongst the group that you work in as you all work in a similar
                area; that is perfectly acceptable.
            </p>

            <p>
                Evidence for your specialist activity is likely to be very
                specific but could include: reports, papers or presentations you
                have written; this could be backed up by a job description plus
                written statements supporting your specialist knowledge from
                colleagues, clients or managers; active membership of
                professional or other bodies; certificates of completion of
                specialist training programmes or courses.
            </p>

            <h2>Description</h2>

            <p>
                This section describes my specialist area of full-stack
                JavaScript development, focusing on building and optimising
                GraphQL APIs and working with PostgreSQL databases. It
                highlights how I apply these technical skills within educational
                technology to enhance learner access, platform performance, and
                system reliability. The following subsection provides evidence
                of how my combined experience in education and development
                enables me to deliver efficient, user-centred solutions that
                support inclusive and scalable learning environments:
            </p>

            {section5?.children && (
                <ul className="ml-4 mt-1 space-y-1 text-sm">
                    {section5.children.map((child) => (
                        <li key={child.slug}>
                            <Link
                                href={`/cmalt/${section5.slug}/${child.slug}`}
                                className="cmalt-nav"
                            >
                                {child.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </CMALTLayout>
    );
}
