import CMALTLayout from "@/components/Layouts/CMALTLayout";
import { internalRoutes } from "@/constants/links";
import { createMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";

const { CmaltRoute } = internalRoutes;

export const metadata = createMetadata({
    title: "2a: An Understanding of Teaching, Learning and/or Assessment Processes | CMALT",
    path: CmaltRoute,
});

export default function page() {
    return (
        <CMALTLayout
            title="2a: An Understanding of Teaching, Learning and/or Assessment Processes"
            lastUpdated="2025-07-22"
        >
            <h2>CMALT Guidance</h2>

            <p>
                Statements here might relate to areas such as teaching
                experience, learning design, curriculum development, work-based
                assessment, the creation and execution of a programme of
                training, and so on.
            </p>

            <p>
                Evidence might include being on the register of the Higher
                Education Academy, a PGCE award or other relevant postgraduate
                qualification, evidence of relevant professional development
                courses or portfolios. Commentaries from peers on your approach
                would also provide suitable evidence. Other possibilities
                include teaching experience, reflective statements that analyse
                experience in terms of learning theory, pedagogical approaches,
                sociological theories, or a comparable, recognised perspective
                (include relevant citations). In relation to learning design, a
                report, specification or reflective statement might be provided
                that clearly elaborates the principles that informed the design
                process. There must be some consideration of how technology is
                changing / impacting upon approaches to teaching and learning
                and/or the roles of learners, teachers and support staff in your
                context.
            </p>

            <h2>Description</h2>

            <p>
                Since earning my PTLLS in 2012 and CELTA in 2013, I have
                delivered over 10,000 English language lessons to adult
                learners. These learners, ranging from CEFR levels A1 to C2,
                came from professional fields such as finance, IT, marketing,
                sales, and administration. My teaching was based on{" "}
                <strong>communicative language teaching (CLT)</strong> and{" "}
                <strong>task-based learning (TBL)</strong>, which emphasise
                learner autonomy and real-world application.
            </p>

            <p>
                I applied <strong>constructive alignment</strong> to my
                curriculum design. This enabled me to personalise content while
                ensuring learning activities and assessments aligned with
                intended learning outcomes. I adopted a{" "}
                <strong>blended learning model</strong> using Zoom, Microsoft
                Teams, Skype, and GoToMeeting as digital platforms evolved. This
                shift required converting print-based resources into multimodal
                materials and introducing <strong>flipped classroom</strong>{" "}
                strategies. For example, I provided vocabulary sets and readings
                before live sessions to maximise in-session practice.
            </p>

            <p>
                {/* TODO: Replace with SVG */}
                <Image
                    src="/cmalt/imgs/ebbinghaus-forgetting-curve.webp"
                    alt="Ebbinghaus' forgetting curve showing the importance of reviewing learnt content over 1, 3, and 6 days"
                    title="Ebbinghaus' forgetting curve"
                    width={600}
                    height={600}
                />
            </p>

            <p>
                I embedded <strong>spaced repetition</strong> and{" "}
                <strong>retrieval practice</strong> across courses. I provided
                reports with new vocabulary after the initial lessons, and this
                vocabulary was revisited in different contexts, such as sessions
                themed around face-to-face meetings, phone calls, and data
                presentations, to enhance recall and application. These methods
                align with <strong>Ebbinghaus&apos; forgetting curve</strong>,
                which illustrates how memory improves through spaced exposure.
            </p>

            <h2>Reflection</h2>

            <p>
                {/* TODO: Replace with SVG */}
                <Image
                    src="/cmalt/imgs/learning-cycle-kolb.webp"
                    alt="Kolb's Experiential Learning Cycle shows Concrete Experience, Reflective Observation, Abstract Conceptualisation, and Active Experimentation"
                    title="Kolb's Experiential Learning Cycle"
                    width={600}
                    height={600}
                />
            </p>

            <p>
                A key practice that I adopted was beginning each course with a
                structured <strong>needs assessment</strong>. This session
                focused on understanding the learners&apos; goals, current
                proficiency, professional context, and preferred learning
                styles. Initially, I adhered closely to a rigid structure
                following the layout, but over time, I refined these assessments
                to be more conversational and collaborative, which improved
                engagement and trust. I revisited learners&apos; goals,
                proficiency levels, and contexts at intervals suited to each
                course&apos;s length. This ensured that learners could use and
                reflect on their experiences, and then use this information to
                inform future actions. This followed{" "}
                <strong>Kolb&apos;s experiential learning cycle</strong>.
            </p>

            <p>
                <Image
                    src="/cmalt/imgs/feedback-slide-original.webp"
                    alt="The design for my slide shows a more difficult to read slide with lower contrast"
                    title="Original design for Markets, Numbers, and Financial Performance"
                    width={600}
                    height={600}
                />
            </p>

            <p>
                <Image
                    src="/cmalt/imgs/feedback-slide-updated.webp"
                    alt="The updated design for my slide shows better contrast, with left aligned text on the left with images on the right"
                    title="Updated design for Markets, Numbers, and Financial Performance"
                    width={600}
                    height={600}
                />
            </p>

            <p>
                My approach to slide design evolved to better support inclusive
                teaching and accessibility. For example, an early slide on
                Feedback &amp; Error Correction used white text over a red
                background with a decorative font — a combination that presented
                readability challenges, especially for learners with dyslexia or
                visual impairments. I redesigned the slide to use a clearer sans
                serif font, left-aligned black text on a white background, and
                added supporting visuals. This reduced cognitive load and
                improved legibility, particularly when learners were accessing
                slides independently after the session. This redesign aligns
                with WCAG 2.1 guidance on colour contrast and readability.
            </p>

            <p>
                Through ongoing reflection and CPD — including{" "}
                <em>
                    Dyslexia Awareness: In partnership with Made By Dyslexia
                </em>{" "}
                (2020, updated in 2025) — I developed more inclusive visual and
                content design practices. These principles informed how I
                adapted delivery for different learning preferences. I
                incorporated diagrams, simplified feedback statements, and
                colour-coded grammar charts to reduce language processing strain
                and visual overload. For example, a grammar reference on the use
                of <em>some</em> and <em>any</em> helped clarify rules using
                minimal text, bullet points, and colour-coded examples:
            </p>

            <blockquote>
                <p>
                    <strong>any (for negatives and questions)</strong>
                </p>
                <p>
                    &apos;Any&apos; is most common in <em>negative clauses</em>{" "}
                    and <em>questions</em>:
                </p>
                <ul>
                    <li>
                        (negative) He hasn&apos;t got <em>any</em> homework.
                    </li>
                    <li>
                        (question) Has he got <em>any</em> homework?
                    </li>
                </ul>
                <p>
                    <strong>
                        some (for affirmatives and questions with expected
                        answers)
                    </strong>
                </p>
                <p>
                    &apos;Some&apos; is most common in{" "}
                    <em>affirmative clauses</em>. Some can be used in questions
                    when we expect the answer to be &apos;yes&apos;:
                </p>
                <ul>
                    <li>
                        (affirmative) He&apos;s got <em>some</em> homework.
                    </li>
                    <li>
                        (question) Has he got <em>some</em> homework?
                    </li>
                </ul>
            </blockquote>

            <p>
                <Image
                    src="/cmalt/screenshots/session-report-ratings.webp"
                    alt="A diagram showing my session report ratings over a year, with an average of 4.9/5 stars"
                    title="Session Report Ratings"
                    width={600}
                    height={600}
                />
            </p>

            <p>
                These design and delivery choices helped learners improve
                clarity and confidence in language use. Learners regularly
                commented that the visual clarity and consistent structure of
                slides made content easier to absorb and revisit. This was
                reflected in ratings of 4.9/5 stars for my session reports, as
                learners frequently praised the relevance of materials, clarity
                of instruction, and individualised support.
            </p>

            <p>
                Early in my transition to online teaching, technological
                limitations presented challenges. As a macOS user, I faced
                feature gaps in tools like Skype compared to their Windows
                versions. For example, limited screen-sharing functionality
                impacted session interactivity. Network issues occasionally
                meant disabling webcams, reducing access to facial expressions
                and lip reading, which caused a significant barrier for some
                learners. Flexible planning slowed the lesson pace to support
                auditory processing while still meeting objectives.
            </p>

            <h2>Future Developments</h2>

            <p>
                I am committed to continuously improving my teaching methods by
                focusing on accessibility, interactivity, and the considered
                adoption of emerging technologies. With the ubiquitous rise of
                AI, I continue to explore how AI-powered tools, like automated
                feedback generators and grammar-checking assistants, can support
                more personalised learning pathways for learners. These tools
                help reduce the time spent on routine administrative work,
                allowing teachers to provide more targeted support while giving
                learners immediate, actionable feedback to guide their
                development.
            </p>

            <p>
                Technology is also reshaping the teacher&apos;s role from
                content deliverer to facilitator and coach. As platforms for
                content delivery and knowledge checks become more autonomous, I
                continue to develop my practice to focus on critical thinking,
                reflective learning, and learner agency. For example, while
                tools like Grammarly or ChatGPT can help learners improve their
                English writing, I encourage them to engage critically with
                suggested changes: to ask <em>why</em> a correction has been
                made, not just <em>what</em> has changed. This reflective
                process turns passive use into <strong>active learning</strong>{" "}
                and aligns with my goal of helping learners build transferable
                skills and greater independence in their learning journey.
            </p>

            <h2>Summary</h2>

            <ul>
                <li>
                    Demonstrated a{" "}
                    <strong>commitment to continuous improvement</strong> in
                    teaching through a focus on accessibility, interactivity,
                    and thoughtful adoption of emerging technologies.
                </li>
                <li>
                    Explored the use of <strong>AI-powered tools</strong> (for
                    example, automated feedback generators, grammar-checking
                    assistants) to support more{" "}
                    <strong>personalised learning pathways</strong> and reduce
                    teacher workload.
                </li>
                <li>
                    Showed awareness of how technology is{" "}
                    <strong>changing the role of the teacher</strong> — from
                    content deliverer to facilitator and coach — and reflected
                    this shift in practice.
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
            </ul>

            <h2>Evidence</h2>

            <ul>
                <li>
                    <a href="/cmalt/certificates/ptlls-2012.pdf">
                        Level 4 Preparing to Teach in the Lifelong Learning
                        Sector (PTLLS) (2012) (Certificate)
                    </a>{" "}
                    <em>
                        Demonstrates formal teacher training and direct teaching
                        experience, with an emphasis on pedagogy, curriculum
                        delivery, and assessment practice.
                    </em>
                </li>
                <li>
                    <a href="/cmalt/certificates/celta-2013.pdf">
                        Cambridge ESOL Level 5* Certificate in Teaching English
                        to Speakers of Other Languages (CELTA) (2013)
                        (Certificate)
                    </a>{" "}
                    <em>
                        Evidence of designing and delivering learner-centred
                        lessons for diverse groups, supporting inclusive
                        pedagogy and differentiated instruction.
                    </em>
                </li>
                <li>
                    <a href="/cmalt/documents/first-session-questions.pdf">
                        First Session Questions (PDF)
                    </a>{" "}
                    <em>
                        Demonstrates early learner engagement strategies to
                        identify prior knowledge and individual needs, informing
                        the design of inclusive and accessible learning
                        experiences.
                    </em>
                </li>
                <li>
                    <a href="/cmalt/imgs/feedback-slide-original.webp">
                        &quot;Before&quot; slide showing accessibility
                        improvements (Screenshot)
                    </a>
                </li>
                <li>
                    <a href="/cmalt/imgs/feedback-slide-updated.webp">
                        &quot;After&quot; slide showing accessibility
                        improvements (Screenshot)
                    </a>{" "}
                    <em>
                        Screenshots showing accessibility-led redesign of a
                        teaching slide, with improved font choice, text
                        contrast, layout, and visual support aligned with WCAG
                        principles.
                    </em>
                </li>
                <li>
                    <a href="/cmalt/certificates/dyslexia-awareness-in-partnership-with-made-by-dyslexia-2020.pdf">
                        Dyslexia Awareness: In partnership with Made By Dyslexia
                        (2020) (Certificate)
                    </a>{" "}
                    <em>
                        Formal recognition of training that developed awareness
                        of neurodiverse learning needs, directly informing
                        accessible content and interface design.
                    </em>
                </li>
                <li>
                    <a href="/cmalt/transcripts/microsoft-learn-training-modules.pdf">
                        Dyslexia Awareness: In partnership with Made By
                        Dyslexia, proof of completed modules (2025) (PDF)
                    </a>{" "}
                    <em>
                        Transcript of recent self-directed CPD focused on
                        inclusive design and accessibility best practices for
                        neurodivergent learners.
                    </em>
                </li>
                <li>
                    <a href="/cmalt/documents/web-accessibility-resources-and-tools.pdf">
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
                    <a href="/cmalt/screenshots/session-report-ratings.webp">
                        Session report rating of 4.9/5 (Screenshot)
                    </a>
                </li>
                <li>
                    <a href="/cmalt/screenshots/session-ratings.webp">
                        Session evaluation rating of 4.5/5 (Screenshot)
                    </a>{" "}
                    <em>
                        Participant evaluation scores (4.9/5 and 4.5/5) from
                        training sessions focused on accessibility and inclusive
                        practices. Provide evidence of impact and effectiveness
                        in supporting professional learning.
                    </em>
                </li>
            </ul>

            <h2>Further Reading</h2>
            <ul>
                <li>
                    London School of Economics <em>Constructive alignment</em>.
                    Available at:{" "}
                    <Link
                        href="https://info.lse.ac.uk/staff/divisions/Eden-Centre/Resources-to-support-your-practice/Constructive-alignment"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://info.lse.ac.uk/staff/divisions/Eden-Centre/Resources-to-support-your-practice/Constructive-alignment
                    </Link>
                </li>
                <li>
                    Main, P. (2023) <em>Ebbinghaus forgetting curve</em>.
                    Structural Learning. Available at:{" "}
                    <Link
                        href="https://www.structural-learning.com/post/ebbinghaus-forgetting-curve"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://www.structural-learning.com/post/ebbinghaus-forgetting-curve
                    </Link>
                </li>
                <li>
                    Main, P. (2022){" "}
                    <em>Spaced practice: A teacher&apos;s guide</em>. Structural
                    Learning. Available at:{" "}
                    <Link
                        href="https://www.structural-learning.com/post/spaced-practice-a-teachers-guide"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://www.structural-learning.com/post/spaced-practice-a-teachers-guide
                    </Link>
                </li>
                <li>
                    McLeod, S. (2025){" "}
                    <em>
                        Kolb&apos;s learning styles and experiential learning
                        cycle
                    </em>
                    . Simply Psychology. Available at:{" "}
                    <Link
                        href="https://www.simplypsychology.org/learning-kolb.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://www.simplypsychology.org/learning-kolb.html
                    </Link>
                </li>
                <li>
                    WCAG (2025){" "}
                    <em>Text over images: The impact on accessibility</em>.
                    Available at:{" "}
                    <Link
                        href="https://www.wcag.com/blog/content-over-images-how-does-this-ux-ui-trend-impact-accessibility/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://www.wcag.com/blog/content-over-images-how-does-this-ux-ui-trend-impact-accessibility/
                    </Link>
                </li>
                <li>
                    Western Governors University (2021){" "}
                    <em>What is blended learning?</em> Available at:{" "}
                    <Link
                        href="https://www.wgu.edu/blog/blended-learning2109.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://www.wgu.edu/blog/blended-learning2109.html
                    </Link>
                </li>
            </ul>
        </CMALTLayout>
    );
}
