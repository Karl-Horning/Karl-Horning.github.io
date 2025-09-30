import FigureWithCaption from "@/components/FigureWithCaption";
import CMALTLayout from "@/components/Layouts/CMALTLayout";
import { cmaltEvidence } from "@/lib/constants/cmalt";
import { internalRoutes } from "@/lib/constants/links";
import { createMetadata } from "@/lib/metadata";

const { CmaltRoute } = internalRoutes;
const {
    certificates,
    documents,
    imgs,
    presentations,
    screenshots,
    transcripts,
} = cmaltEvidence;
const { celtaCertificate, dyslexiaAwarenessCertificate, ptllsCertificate } =
    certificates;
const { firstSessionQuestions, webAccessibilityResourcesAndTools } = documents;
const {
    ebbinghausForgettingCurve,
    feedbackSlideOriginal,
    feedbackSlideUpdated,
    kolbLearningCycle,
} = imgs;
const { deppIctPresentation } = presentations;
const { sessionRatingsScreenshot, sessionReportRatingsScreenshot } =
    screenshots;
const { dyslexiaAwarenessTranscript } = transcripts;

export const metadata = createMetadata({
    title: "2a: An Understanding of Teaching, Learning and/or Assessment Processes | CMALT",
    path: CmaltRoute,
});

export default function page() {
    return (
        <CMALTLayout
            title="2a: An Understanding of Teaching, Learning and/or Assessment Processes"
            lastUpdated="2025-09-29"
        >
            <section id="description">
                <h2>Description</h2>

                <p>
                    Since earning my{" "}
                    <a
                        href={ptllsCertificate}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        PTLLS in 2012
                    </a>{" "}
                    and{" "}
                    <a
                        href={celtaCertificate}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CELTA in 2013
                    </a>
                    , I have delivered over 10,000 English language lessons to
                    adult learners. These learners, ranging from CEFR levels A1
                    to C2, came from professional fields such as finance, IT,
                    marketing, sales, and administration. My teaching was based
                    on <strong>communicative language teaching (CLT)</strong>{" "}
                    and <strong>task-based learning (TBL)</strong>, which
                    emphasise learner autonomy and real-world application.
                </p>

                <p>
                    I applied <strong>constructive alignment</strong> to my
                    curriculum design. This enabled me to personalise content
                    while ensuring learning activities and assessments aligned
                    with intended learning outcomes. I adopted a{" "}
                    <strong>blended learning model</strong> using Zoom,
                    Microsoft Teams, Skype, and GoToMeeting as digital platforms
                    evolved. This shift required converting print-based
                    resources into multimodal materials and introducing{" "}
                    <strong>flipped classroom</strong> strategies. For example,
                    I provided vocabulary sets and readings before live sessions
                    to maximise in-session practice.
                </p>

                <FigureWithCaption
                    src={ebbinghausForgettingCurve}
                    alt="Kolb's Experiential Learning Cycle shows Concrete Experience, Reflective Observation, Abstract Conceptualisation, and Active Experimentation"
                    caption="Ebbinghaus' forgetting curve showing the
                            importance of reviewing learnt content over 1, 3,
                            and 6 days"
                />

                <p>
                    I embedded <strong>spaced repetition</strong> and{" "}
                    <strong>retrieval practice</strong> across courses. I
                    provided reports with new vocabulary after the initial
                    lessons, and this vocabulary was revisited in different
                    contexts, such as sessions themed around face-to-face
                    meetings, phone calls, and data presentations, to enhance
                    recall and application. These methods align with{" "}
                    <strong>Ebbinghaus&apos; forgetting curve</strong>, which
                    illustrates how memory improves through spaced exposure.
                </p>
            </section>

            <section id="reflection">
                <h2>Reflection</h2>

                <FigureWithCaption
                    src={kolbLearningCycle}
                    alt="Kolb's Experiential Learning Cycle shows Concrete Experience, Reflective Observation, Abstract Conceptualisation, and Active Experimentation"
                    caption="Kolb's Experiential Learning Cycle shows Concrete Experience, Reflective Observation, Abstract Conceptualisation, and Active Experimentation"
                />

                <p>
                    A key practice that I adopted was beginning each course with
                    a structured{" "}
                    <a
                        href={firstSessionQuestions}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        needs assessment
                    </a>
                    . This session focused on understanding the learners&apos;
                    goals, current proficiency, professional context, and
                    preferred learning styles. Initially, I adhered closely to a
                    rigid structure following the layout, but over time, I
                    refined these assessments to be more conversational and
                    collaborative, which improved engagement and trust. I
                    revisited learners&apos; goals, proficiency levels, and
                    contexts at intervals suited to each course&apos;s length.
                    This ensured that learners could use and reflect on their
                    experiences, and then use this information to inform future
                    actions. This followed{" "}
                    <strong>Kolb&apos;s experiential learning cycle</strong>.
                </p>

                <FigureWithCaption
                    src={feedbackSlideOriginal}
                    alt="The design for my slide shows a more difficult to read slide with lower contrast"
                    caption="The design for my slide shows a more difficult to read slide with lower contrast"
                />

                <p>
                    Just as needs assessments helped tailor course content to
                    individual learners, I also recognised that the{" "}
                    <strong>design of materials</strong> was critical in
                    enabling equal access to learning. For example, an early
                    slide on Feedback &amp; Error Correction used white text
                    over a red background with a decorative font — a combination
                    that presented readability challenges, especially for
                    learners with dyslexia or visual impairments. I redesigned
                    the slide to use a clearer sans serif font, left-aligned
                    black text on a white background, and added supporting
                    visuals. This reduced cognitive load and improved
                    legibility, particularly when learners were accessing slides
                    independently after the session. This redesign aligns with
                    WCAG 2.1 guidance on colour contrast and readability.
                </p>

                <FigureWithCaption
                    src={feedbackSlideUpdated}
                    alt="The updated design for my slide shows better contrast, with left aligned text on the left with images on the right"
                    caption="The updated design for my slide shows better contrast, with left aligned text on the left with images on the right"
                />

                <p>
                    These same accessibility principles now informing my
                    practice at Imperial. In my{" "}
                    <a
                        href={deppIctPresentation}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        DEPP ICT presentation
                    </a>
                    , for example, I balanced lessons learnt from my own
                    teaching with Imperial&apos;s published{" "}
                    <a
                        href="https://www.imperial.ac.uk/staff/tools-and-reference/web-guide/training-and-events/materials/accessibility/documents/ms-office/powerpoint/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        guidance on accessible PowerPoint design
                    </a>
                    , ensuring materials were both engaging and compliant. When
                    preparing training for staff on Canvas, I suggested adding a
                    glossary of terms to help staff transition from Blackboard —
                    a step particularly valuable for international colleagues
                    for whom differences in terminology could otherwise create
                    barriers. Colleagues in the Faculty of Medicine also
                    highlighted the importance of needs assessments to ensure
                    training reflects staff contexts and requirements. This
                    resonated strongly with my earlier teaching experience,
                    reinforcing the role of needs analysis in creating inclusive
                    and relevant learning opportunities.
                </p>

                <p>
                    Through ongoing reflection and CPD — including{" "}
                    <a
                        href={dyslexiaAwarenessCertificate}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Dyslexia Awareness: In partnership with Made By Dyslexia
                    </a>{" "}
                    (2020,{" "}
                    <a
                        href={dyslexiaAwarenessTranscript}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        updated in 2025
                    </a>
                    ) — I developed more inclusive visual and content design
                    practices. The positive impact of these changes was
                    reflected in learner feedback and outcomes, which
                    consistently recognised improvements in accessibility and
                    clarity.
                </p>

                <FigureWithCaption
                    src={sessionReportRatingsScreenshot}
                    alt="A diagram showing my session report ratings over a year, with an average of 4.9/5 stars"
                    caption="A diagram showing my session report ratings over a year, with an average of 4.9/5 stars"
                />

                <p>
                    Learners regularly commented that the visual clarity and
                    consistent structure of slides made content easier to absorb
                    and revisit. This was reflected in ratings of 4.9/5 stars
                    for my session reports, as learners frequently praised the
                    relevance of materials, clarity of instruction, and
                    individualised support.
                </p>
            </section>

            <section id="future-developments">
                <h2>Future Developments</h2>

                <p>
                    Building on these reflections and the positive outcomes
                    achieved, I am committed to continuously improving my
                    teaching methods by focusing on accessibility,
                    interactivity, and the considered adoption of emerging
                    technologies. To support this, I maintain an evolving
                    resource —{" "}
                    <a
                        href={webAccessibilityResourcesAndTools}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Web Accessibility Resources and Tools: Guidelines,
                        Checklists, and Testing Solutions (PDF)
                    </a>{" "}
                    — which brings together up-to-date guidance, checklists, and
                    testing strategies aligned with WCAG 2.1 and EN 301 549.
                    This provides a framework that I draw on when advising
                    colleagues and designing new materials.
                </p>

                <p>
                    As my earlier practice demonstrated the value of design
                    clarity and needs analysis, I now extend these principles
                    into Imperial&apos;s context by exploring how AI-powered
                    tools, like automated feedback generators and
                    grammar-checking assistants, can support more personalised
                    learning pathways. These tools help reduce the time staff
                    spend on routine administrative tasks, allowing more
                    attention to be directed towards targeted, high-value
                    support. At the same time, I encourage colleagues to see
                    these tools not simply as shortcuts but as opportunities to
                    develop learner agency and critical thinking.
                </p>

                <p>
                    Technology is also reshaping the teacher&apos;s role from
                    content deliverer to facilitator and coach. Just as I once
                    encouraged learners to reflect on their own goals and
                    progress, I now encourage staff and students to engage
                    critically with the outputs of tools such as Grammarly or
                    ChatGPT — to ask <em>why</em> a correction has been made,
                    not just <em>what</em> has changed. This reflective process
                    turns passive use into <strong>active learning</strong>,
                    aligning with my broader goal of fostering transferable
                    skills and learner independence.
                </p>

                <p>
                    Finally, because Imperial is a highly international
                    university, I am especially mindful of advising staff on
                    inclusive design that supports colleagues and learners
                    working in a second language. Building on my experience of
                    scaffolding complex tasks and introducing glossaries in
                    language teaching, I now encourage the same approaches in
                    higher education training contexts. Breaking down tasks into
                    smaller stages, scaffolding learning activities with
                    glossaries or visual supports, and building in opportunities
                    for retrieval and reflection all help reduce cognitive load
                    and enable equitable participation across diverse cohorts.
                </p>
            </section>

            <section id="summary">
                <h2>Summary</h2>

                <ul>
                    <li>
                        Demonstrated a{" "}
                        <strong>commitment to continuous improvement</strong> in
                        teaching through a focus on accessibility,
                        interactivity, and thoughtful adoption of emerging
                        technologies.
                    </li>
                    <li>
                        Explored the use of <strong>AI-powered tools</strong>{" "}
                        (for example, automated feedback generators,
                        grammar-checking assistants) to support more{" "}
                        <strong>personalised learning pathways</strong> and
                        reduce teacher workload.
                    </li>
                    <li>
                        Showed awareness of how technology is{" "}
                        <strong>changing the role of the teacher</strong> — from
                        content deliverer to facilitator and coach — and
                        reflected this shift in practice.
                    </li>
                    <li>
                        Emphasised the development of{" "}
                        <strong>
                            critical thinking, reflective learning, and learner
                            agency
                        </strong>
                        , especially when learners interact with AI tools.
                    </li>
                    <li>
                        Framed <strong>AI-enhanced learning</strong> not just as
                        automation, but as an opportunity to foster{" "}
                        <strong>active learning</strong> and build{" "}
                        <strong>transferable skills</strong> and learner
                        independence.
                    </li>
                    <li>
                        Applied{" "}
                        <strong>
                            learning theories and inclusive design strategies
                        </strong>{" "}
                        from language teaching to my current role at Imperial,
                        including accessible presentation design, glossary
                        development, and needs assessments to support staff and
                        international cohorts effectively.
                    </li>
                </ul>
            </section>

            <section id="evidence">
                <h2>Evidence</h2>

                <ul>
                    <li>
                        <a
                            href={ptllsCertificate}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Level 4 Preparing to Teach in the Lifelong Learning
                            Sector (PTLLS) (2012) (Certificate)
                        </a>{" "}
                        <em>
                            Demonstrates formal teacher training and direct
                            teaching experience, with an emphasis on pedagogy,
                            curriculum delivery, and assessment practice.
                        </em>
                    </li>
                    <li>
                        <a
                            href={celtaCertificate}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Cambridge ESOL Level 5* Certificate in Teaching
                            English to Speakers of Other Languages (CELTA)
                            (2013) (Certificate)
                        </a>{" "}
                        <em>
                            Evidence of designing and delivering learner-centred
                            lessons for diverse groups, supporting inclusive
                            pedagogy and differentiated instruction.
                        </em>
                    </li>
                    <li>
                        <a
                            href={firstSessionQuestions}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            First Session Questions (PDF)
                        </a>{" "}
                        <em>
                            Demonstrates early learner engagement strategies to
                            identify prior knowledge and individual needs,
                            informing the design of inclusive and accessible
                            learning experiences.
                        </em>
                    </li>
                    <li>
                        <a
                            href={feedbackSlideOriginal}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            &quot;Before&quot; slide showing accessibility
                            improvements (Screenshot)
                        </a>
                    </li>
                    <li>
                        <a
                            href={feedbackSlideUpdated}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            &quot;After&quot; slide showing accessibility
                            improvements (Screenshot)
                        </a>{" "}
                        <em>
                            Screenshots showing accessibility-led redesign of a
                            teaching slide, with improved font choice, text
                            contrast, layout, and visual support aligned with
                            WCAG principles.
                        </em>
                    </li>
                    <li>
                        <a
                            href={dyslexiaAwarenessCertificate}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Dyslexia Awareness: In partnership with Made By
                            Dyslexia (2020) (Certificate)
                        </a>{" "}
                        <em>
                            Formal recognition of training that developed
                            awareness of neurodiverse learning needs, directly
                            informing accessible content and interface design.
                        </em>
                    </li>
                    <li>
                        <a
                            href={dyslexiaAwarenessTranscript}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Dyslexia Awareness: In partnership with Made By
                            Dyslexia, proof of completed modules (2025) (PDF)
                        </a>{" "}
                        <em>
                            Transcript of recent self-directed CPD focused on
                            inclusive design and accessibility best practices
                            for neurodivergent learners.
                        </em>
                    </li>
                    <li>
                        <a
                            href={webAccessibilityResourcesAndTools}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Web Accessibility Resources and Tools: Guidelines,
                            Checklists, and Testing Solutions (PDF)
                        </a>{" "}
                        <em>
                            A curated set of tools and guidelines used in
                            accessibility audits and improvements, reflecting an
                            embedded, process-led approach to inclusive design.
                        </em>
                    </li>
                    <li>
                        <a
                            href={sessionReportRatingsScreenshot}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Session report rating of 4.9/5 (Screenshot)
                        </a>
                    </li>
                    <li>
                        <a
                            href={sessionRatingsScreenshot}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Session evaluation rating of 4.5/5 (Screenshot)
                        </a>{" "}
                        <em>
                            Participant evaluation scores (4.9/5 and 4.5/5) from
                            training sessions focused on accessibility and
                            inclusive practices. Provide evidence of impact and
                            effectiveness in supporting professional learning.
                        </em>
                    </li>
                    <li>
                        <a
                            href={ebbinghausForgettingCurve}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ebbinghaus&apos; Forgetting Curve (Diagram)
                        </a>{" "}
                        <em>
                            Created and used to illustrate the role of spaced
                            repetition and retrieval practice in course design,
                            showing application of memory theory to teaching
                            practice.
                        </em>
                    </li>

                    <li>
                        <a
                            href={kolbLearningCycle}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Kolb&apos;s Experiential Learning Cycle (Diagram)
                        </a>{" "}
                        <em>
                            Adapted visual used to structure reflection on needs
                            assessments, showing how experiential learning
                            theory underpinned learner goal-setting and
                            curriculum adaptation.
                        </em>
                    </li>
                    <li>
                        <a
                            href={deppIctPresentation}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            DEPP ICT Presentation (Slides)
                        </a>{" "}
                        <em>
                            Demonstrates application of accessibility principles
                            in a higher education context, aligning personal
                            practice with Imperial&apos;s published guidance on
                            accessible PowerPoint design.
                        </em>
                    </li>
                </ul>
            </section>

            <section id="further-reading">
                <h2>Further Reading</h2>
                <ul>
                    <li>
                        London School of Economics{" "}
                        <em>Constructive alignment</em>. Available at:{" "}
                        <a
                            href="https://info.lse.ac.uk/staff/divisions/Eden-Centre/Resources-to-support-your-practice/Constructive-alignment"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://info.lse.ac.uk/staff/divisions/Eden-Centre/Resources-to-support-your-practice/Constructive-alignment
                        </a>
                    </li>
                    <li>
                        Main, P. (2023) <em>Ebbinghaus forgetting curve</em>.
                        Structural Learning. Available at:{" "}
                        <a
                            href="https://www.structural-learning.com/post/ebbinghaus-forgetting-curve"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.structural-learning.com/post/ebbinghaus-forgetting-curve
                        </a>
                    </li>
                    <li>
                        Main, P. (2022){" "}
                        <em>Spaced practice: A teacher&apos;s guide</em>.
                        Structural Learning. Available at:{" "}
                        <a
                            href="https://www.structural-learning.com/post/spaced-practice-a-teachers-guide"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.structural-learning.com/post/spaced-practice-a-teachers-guide
                        </a>
                    </li>
                    <li>
                        McLeod, S. (2025){" "}
                        <em>
                            Kolb&apos;s learning styles and experiential
                            learning cycle
                        </em>
                        . Simply Psychology. Available at:{" "}
                        <a
                            href="https://www.simplypsychology.org/learning-kolb.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.simplypsychology.org/learning-kolb.html
                        </a>
                    </li>
                    <li>
                        WCAG (2025){" "}
                        <em>Text over images: The impact on accessibility</em>.
                        Available at:{" "}
                        <a
                            href="https://www.wcag.com/blog/content-over-images-how-does-this-ux-ui-trend-impact-accessibility/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.wcag.com/blog/content-over-images-how-does-this-ux-ui-trend-impact-accessibility/
                        </a>
                    </li>
                    <li>
                        Western Governors University (2021){" "}
                        <em>What is blended learning?</em> Available at:{" "}
                        <a
                            href="https://www.wgu.edu/blog/blended-learning2109.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.wgu.edu/blog/blended-learning2109.html
                        </a>
                    </li>
                </ul>
            </section>
        </CMALTLayout>
    );
}
