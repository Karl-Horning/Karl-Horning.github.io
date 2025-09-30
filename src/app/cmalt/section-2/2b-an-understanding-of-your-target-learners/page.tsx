import CMALTLayout from "@/components/Layouts/CMALTLayout";
import { cmaltEvidence } from "@/constants/cmalt";
import { internalRoutes } from "@/constants/links";
import { createMetadata } from "@/lib/metadata";

const { CmaltRoute } = internalRoutes;
const { documents } = cmaltEvidence;
const {
    designingAnEnglishCourse,
    exampleFeedbackCompleteFull,
    firstSessionQuestions,
} = documents;

export const metadata = createMetadata({
    title: "2b: An Understanding of Your Target Learners | CMALT",
    path: CmaltRoute,
});

export default function page() {
    return (
        <CMALTLayout
            title="2b: An Understanding of Your Target Learners"
            lastUpdated="2025-09-30"
        >
            <section id="description">
                <h2>Description</h2>

                <p>
                    Understanding my learners&apos; individual needs and
                    professional contexts has been central to my practice as an
                    English language teacher. Since 2013, I have worked with
                    adult learners from a range of professional backgrounds,
                    including finance, IT, sales, and administration, most of
                    whom were working in international environments. These
                    learners often needed English for real-world interactions
                    such as client meetings, presentations, or internal
                    communications.
                </p>

                <p>
                    To tailor the learning experience from the start, I created
                    a document titled{" "}
                    <a
                        href={firstSessionQuestions}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        First Session Questions (PDF)
                    </a>
                    , which I used as a structured needs analysis tool. It
                    covered learners&apos; current proficiency, goals, work
                    tasks requiring English, confidence levels in speaking,
                    listening, reading, and writing, and any past difficulties
                    or frustrations with the language.
                </p>

                <p>
                    Based on this information,{" "}
                    <a
                        href={designingAnEnglishCourse}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        I designed bespoke ten-week courses
                    </a>
                    . For example, one group needed to improve clarity in
                    introductions and requests during meetings. Their curriculum
                    included topics such as:
                </p>

                <ul>
                    <li>Face-to-face and telephone introductions</li>
                    <li>Making polite requests</li>
                    <li>Managing phone calls</li>
                    <li>Cultural differences in business</li>
                    <li>Numbers and prepositions</li>
                    <li>Business idioms</li>
                </ul>

                <p>
                    Many learners struggled with numbers in different contexts
                    (for example, dates, years, telephone numbers), so I devoted
                    a full session to this topic, incorporating audio practice,
                    dictation, and roleplays.
                </p>

                <p>
                    I also sent preparatory materials at least five working days
                    before each lesson, allowing learners time to engage in
                    advance, which helped reduce anxiety and boost
                    participation.
                </p>

                <p>
                    Written feedback is a core part of my teaching. I provide
                    detailed corrections and explanations, particularly around
                    grammar, vocabulary, and pronunciation. This is delivered
                    via documents and, in the past, a bespoke language learning
                    LMS. Feedback is individualised and responsive to
                    learners&apos; first language influences. For example,
                    Latin-based speakers often confuse &apos;complete&apos; with
                    &apos;full&apos; due to false friends (<em>completo</em> is
                    used to mean <em>full</em> in Portuguese, Spanish, and
                    Italian). To address this, I gave the following explanation:
                </p>

                <h3>Example Feedback: Complete &amp; Full</h3>

                <h4>complete (whole)</h4>
                <p>
                    &apos;Complete&apos; is usually used to mean <em>whole</em>{" "}
                    (containing all the parts or pieces):
                </p>
                <ul>
                    <li>
                        A <em>complete</em> set of dishes.
                    </li>
                    <li>
                        The <em>complete</em> works of Dickens.
                    </li>
                </ul>
                <h4>full (no more space)</h4>
                <p>
                    &apos;Full&apos; is usually used to mean that a space holds
                    or contains <em>as much as possible</em>:
                </p>
                <ul>
                    <li>
                        This cup is <em>very full</em> so be careful with it.
                    </li>
                    <li>
                        My plate was already <em>full</em>.
                    </li>
                    <li>
                        I tried to get into the cinema last night but it was{" "}
                        <em>full</em>.
                    </li>
                </ul>

                <p>
                    This level of detail helped learners build not only
                    vocabulary but awareness of nuance and usage.
                </p>
            </section>

            <section id="reflection">
                <h2>Reflection</h2>

                <p>
                    While I initially relied on a fixed structure for needs
                    assessments, experience taught me the importance of a more
                    conversational and collaborative approach. Learners were
                    more engaged when they felt they had agency in shaping their
                    course. I also learned that cultural context affected
                    learners&apos; confidence, especially in phone conversations
                    or group settings. This insight shaped both course content
                    and delivery style. For example, by introducing roleplays
                    with escalating levels of difficulty, learners could
                    gradually build confidence.
                </p>

                <p>
                    Learners frequently commented that the focus on realistic
                    tasks (such as presentations and meetings) directly improved
                    their confidence at work. For instance, one learner later
                    reported that they successfully gave a regional presentation
                    with questions and answers after practising through
                    scaffolded roleplays. This success highlighted the value of
                    scenario-based tasks, but I also recognised that supporting
                    these tasks required more focused language input. The same
                    principle shapes my staff training at Imperial: I prioritise
                    practice in real scenarios — such as using Canvas analytics
                    to evaluate engagement — so that colleagues leave sessions
                    with applied confidence rather than only theoretical
                    knowledge.
                </p>

                <p>
                    Previously, I relied on comprehensive lists of topic-based
                    vocabulary, assuming volume equated to value. However,
                    learners struggled to retain and apply this material. Based
                    on their feedback and observed difficulties, I revised my
                    approach to provide shorter, situation-specific vocabulary
                    lists followed by immediate application in roleplay or
                    dialogue. This improved learner recall and confidence.
                    Similarly, when designing training at Imperial, I break down
                    complex technical features into smaller, task-specific
                    activities. This mirrors the way shorter vocabulary sets
                    once helped language learners, ensuring that staff can
                    absorb key concepts without cognitive overload.
                </p>

                <p>
                    Over time, I began to integrate learner feedback mid-course
                    rather than waiting until the end. This allowed me to adjust
                    the focus dynamically, ensuring that learners&apos; needs
                    remained central and up-to-date. I also adjusted the balance
                    between input and output: early in my career, I overloaded
                    learners with material; later, I shifted toward enabling
                    application, reflection, and review — essential principles
                    in language acquisition.
                </p>

                <p>
                    These changes are supported by wider research into
                    employability and workplace English needs. Samantha Ball
                    (2024) highlights that learners often face a lack of
                    real-world conversation practice in class and insufficient
                    opportunities to use English outside of it. Similarly,
                    Bridge Education Group and Pearson (2023) advocate for a
                    practical, scenario-based approach to English teaching, such
                    as roleplays around workplace communication, writing emails,
                    and preparing for interviews. My focus on realistic
                    contexts, spoken fluency, and confidence-building directly
                    addresses these recognised gaps in English language
                    education.
                </p>

                <p>
                    Although I developed my approach years prior, recent
                    guidance by Ohidujjaman (2023) further supports the
                    importance of thorough needs analysis for adult learners.
                    Ohidujjaman outlines that this process enhances engagement,
                    improves goal-setting, focuses lesson time on meaningful
                    outcomes, and fosters learner-centred environments. This
                    mirrors my own experience:{" "}
                    <strong>
                        learner motivation and progress significantly increased
                        when their real-world needs were prioritised and
                        continuously re-evaluated
                    </strong>
                    .
                </p>

                <p>
                    Building directly on these earlier insights, these same
                    learner-centred approaches now inform my current practice at
                    Imperial. For example, in preparing Canvas training for
                    staff, I have emphasised scenario-based activities (for
                    example, using analytics) rather than abstract feature
                    lists, mirroring the workplace-focused roleplays I once used
                    with English learners. This ensures staff are confident
                    applying the tools in their own contexts, rather than
                    passively hearing about functionality without having the
                    opportunity to practice.
                </p>
            </section>

            <section id="summary">
                <h2>Summary</h2>

                <ul>
                    <li>
                        Conducted structured and conversational needs
                        assessments to personalise learning
                    </li>
                    <li>
                        Designed and adapted bespoke course structures based on
                        learner goals and workplace demands
                    </li>
                    <li>
                        Provided detailed written feedback to address common
                        errors and clarify usage
                    </li>
                    <li>
                        Incorporated learner feedback and reflection into
                        ongoing course adjustments
                    </li>
                    <li>
                        Recognised cultural and linguistic influences on learner
                        confidence and adapted delivery accordingly
                    </li>
                    <li>
                        Shifted from rigid to flexible approaches to maximise
                        learner engagement and autonomy
                    </li>
                    <li>
                        Aligned my teaching with sector recommendations to embed
                        real-world, scenario-based language use for
                        employability
                    </li>
                </ul>
            </section>

            <section id="evidence">
                <h2>Evidence</h2>
                <ul>
                    <li>
                        <a
                            href={firstSessionQuestions}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            First Session Questions (PDF)
                        </a>{" "}
                        <em>
                            {" "}
                            Demonstrates a structured approach to identifying
                            learners&apos; individual goals, workplace needs,
                            and confidence levels across language skills.
                            Informs personalised course design and
                            learner-centred planning.
                        </em>
                    </li>
                    <li>
                        <a
                            href={designingAnEnglishCourse}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Designing a Bespoke English Course for Professionals
                            (PDF)
                        </a>{" "}
                        <em>
                            {" "}
                            Provides an example curriculum tailored to
                            real-world communication needs. Includes session
                            outlines that reflect input from needs analysis and
                            demonstrate how learning objectives align with
                            workplace scenarios.
                        </em>
                    </li>
                    <li>
                        <a
                            href={exampleFeedbackCompleteFull}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Example Feedback: Complete & Full (Markdown)
                        </a>{" "}
                        <em>
                            Example of personalised written feedback given to
                            learners, demonstrating attention to false friends
                            and nuanced vocabulary.
                        </em>
                    </li>
                </ul>
            </section>

            <section id="further-reading">
                <h2>Further Reading</h2>

                <ul>
                    <li>
                        Ball, S. (2024).{" "}
                        <em>
                            Bridging the gap: How to equip English learners with
                            workplace-ready language skills
                        </em>
                        . Pearson. Available at:{" "}
                        <a
                            href="https://www.pearson.com/languages/community/blogs/getting-students-ready-for-the-workplace-3-24.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.pearson.com/languages/community/blogs/getting-students-ready-for-the-workplace-3-24.html
                        </a>
                    </li>
                    <li>
                        Bridge Education Group (2023).{" "}
                        <em>
                            How (And Why) English Teachers Should Improve the
                            Employability of Their Students
                        </em>
                        . Available at:{" "}
                        <a
                            href="https://bridge.edu/tefl/blog/english-teachers-improve-students-employability/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://bridge.edu/tefl/blog/english-teachers-improve-students-employability/
                        </a>
                    </li>
                    <li>
                        Nation, I.S.P. (2009).{" "}
                        <em>Teaching ESL/EFL Listening and Speaking</em>.
                        Routledge.
                    </li>
                    <li>
                        Ohidujjaman, A.H.M. (2023).{" "}
                        <em>
                            A Step-by-Step Guide to Needs Analysis of Adult ESL
                            Learners
                        </em>
                        . Available at:{" "}
                        <a
                            href="https://eslinfo.com/a-guide-to-needs-analysis-of-adults-esl-learners/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://eslinfo.com/a-guide-to-needs-analysis-of-adults-esl-learners/
                        </a>
                    </li>
                </ul>
            </section>
        </CMALTLayout>
    );
}
