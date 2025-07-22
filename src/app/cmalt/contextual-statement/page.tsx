import CMALTLayout from "@/components/Layouts/CMALTLayout";
import { internalRoutes } from "@/constants/links";
import { createMetadata } from "@/lib/metadata";

const { CmaltRoute } = internalRoutes;

export const metadata = createMetadata({
    title: "Contextual Statement (CMALT)",
    path: CmaltRoute,
});

export default function ContextualStatementPage() {
    return (
        <CMALTLayout title="Contextual Statement" lastUpdated="2025-07-22">
            <section>
                <h2>CMALT Guidance</h2>

                <p>
                    Your portfolio should begin with a contextual statement —
                    the kind of thing you might write in a cover letter for a
                    job application. It should provide a concise biography
                    outlining your career history with Learning Technology and
                    your current role(s). Highlight briefly the operational
                    context in which you work or have worked, and reflect on why
                    you are submitting your portfolio for CMALT and how this
                    relates to your future career aspirations.
                </p>

                <p>
                    If you have previously been awarded Associate CMALT, you
                    should indicate this and also indicate briefly how and to
                    what extent your existing portfolio has been revised and
                    amplified.
                </p>

                <p>
                    This section is not assessed but will be very helpful for
                    the assessors as they approach the rest of your portfolio.
                </p>
            </section>

            <section>
                <h2>My Journey in Learning Technology</h2>

                <p>
                    I have over a decade of experience in blended and digital
                    learning, combining pedagogical expertise with technical
                    development to improve learning experiences. Beginning as a
                    CELTA-qualified English teacher, I&apos;ve delivered over
                    10,000 lessons with consistently high ratings, and used my{" "}
                    <em>
                        Level 4 Preparing to Teach in the Lifelong Learning
                        Sector
                    </em>{" "}
                    (PTLLS) to design and deliver training in academic English
                    and study skills in both further and higher education.
                </p>

                <p>
                    Alongside this, I&apos;ve led the development of scalable
                    backend systems and optimised GraphQL APIs for a custom
                    Learning Management System (LMS) supporting over 700,000
                    learners. This dual perspective — both educational and
                    technical — enables me to design learner-centred solutions
                    grounded in pedagogical principles and responsive to
                    real-world needs.
                </p>

                <p>
                    Throughout my career, I&apos;ve remained passionate about
                    using digital tools to enhance teaching and learning. As a
                    Virtual Onboarder, I trained new teachers in a custom LMS
                    via Microsoft Teams, supported by tailored sessions and
                    video training. I&apos;ve also created bespoke business
                    English courses for professionals, adapting content to
                    learner needs and industry contexts.
                </p>

                <p>
                    My experience as a university administrator using Moodle and
                    SharePoint helped shape the design of an intuitive LMS for
                    international use. Drawing on my teaching background, I
                    refined features such as automated flashcards and
                    pronunciation feedback to support personalisation and
                    engagement.
                </p>

                <p>
                    Accessibility is a key focus of my work. I&apos;ve created
                    content to support non-native speakers and neurodiverse
                    learners — including visual documentation, explainer videos,
                    and GIFs designed for clarity and retention. In a prior role
                    as Transformation Project Manager, I automated financial
                    workflows using Python and Pandas, and led Excel training to
                    promote data literacy.
                </p>

                <p>
                    My professional development includes training in user story
                    writing, manual testing, Confluence, Jira, and several
                    programming languages. I aim to deliver user-centred,
                    accessible solutions grounded in good practice.
                </p>

                <p>
                    I currently work as a Learning Technologist at Imperial
                    College London, where I support the migration to a new LMS.
                    This includes writing user stories, conducting manual
                    testing, and gathering user feedback to enhance digital
                    learning for staff and students.
                </p>

                <p>
                    I am submitting this portfolio for CMALT accreditation to
                    formally recognise my contributions to learning technology.
                    It marks a key step in my professional development,
                    reflecting my commitment to innovation and inclusion in
                    education. While I have not previously held Associate CMALT,
                    this portfolio demonstrates the depth and breadth of my
                    practice and its impact across the sector.
                </p>
            </section>
        </CMALTLayout>
    );
}
