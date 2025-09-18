import FigureWithCaption from "@/components/FigureWithCaption";
import CMALTLayout from "@/components/Layouts/CMALTLayout";
import { cmaltEvidence } from "@/constants/cmalt";
import { internalRoutes } from "@/constants/links";
import { createMetadata } from "@/lib/metadata";

const { CmaltRoute } = internalRoutes;
const { presentations, repos, screenshots } = cmaltEvidence;
const { deppIctPresentation } = presentations;
const { blackboardPostmanCollection } = repos;
const {
    colourAccessibilityUserStories,
    ictSeniorAnalystTestScriptScreenshot,
    traineeListScreenshot,
} = screenshots;

export const metadata = createMetadata({
    title: "1a: An Understanding of the Constraints and Benefits of Different Technology | CMALT",
    path: CmaltRoute,
});

export default function Page() {
    return (
        <CMALTLayout
            title="1a: An Understanding of the Constraints and Benefits of Different Technology"
            lastUpdated="2025-07-24"
        >
            <section id="cmalt-guidance">
                <h2>CMALT Guidance</h2>

                <p>
                    You should show how you have used or supported others to use
                    technology appropriately, given the constraints and benefits
                    it provides within your context. You should consider how you
                    compared and contrasted the constraints and benefits of
                    different technologies to meet the specific needs of users
                    (students or staff).
                </p>

                <p>
                    Evidence in support of such statements might include a brief
                    commentary on the choices behind the development and use of
                    Learning Technology that influence its fitness for purpose.
                    This might discuss issues such as affordances of the
                    technology, viability, sustainability, scalability,
                    interoperability and value for money. Suitable evidence may
                    include a design outline, proposal, conference presentation
                    or similar. Alternatively, you might want to take this
                    opportunity to find out more about a technology you have
                    deployed, and produce a report on its viability, relating
                    this to the constraints and benefits of different
                    technologies.
                </p>
            </section>

            <section id="description">
                <h2>Description</h2>

                <p>
                    In my role as a Learning Technologist at Imperial College
                    London, I have been part of a cross-functional team
                    evaluating multiple LMS platforms (Blackboard Ultra,
                    Brightspace, Canvas) to support a major institutional
                    review.{" "}
                    <a
                        href={deppIctPresentation}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        This required direct comparison of the platforms
                    </a>
                    , evaluating their APIs, integration models, accessibility
                    compliance (such as WCAG 2.1), and alignment with the
                    pedagogical and administrative needs of various faculties.
                </p>

                <FigureWithCaption
                    src={colourAccessibilityUserStories}
                    alt="A screenshot of two of the colour accessibility user stories"
                    caption="A screenshot of two of the colour accessibility user stories"
                />

                <p>
                    Accessibility was a consistent priority across all
                    faculties, but the Faculty of Natural Sciences and the
                    Faculty of Medicine raised specific requirements around
                    colour schemes and visual accessibility. To capture these
                    needs, they developed detailed user stories with acceptance
                    criteria. For example, requirements included configurable
                    background colours, high-contrast modes, and support for
                    colour-blind users through preset colour schemes.
                </p>

                <p>
                    We then had to decide which elements should be provided
                    natively within the LMS and which could be supported through
                    external tools such as <em>ColourVeil</em>. To justify this,
                    we compared the degree to which each platform could natively
                    preserve accessibility when colour schemes were customised.
                    For instance, one LMS automatically adjusted text colour (to
                    black or white) depending on the selected background,
                    ensuring contrast ratios always remained accessible. This
                    feature was judged particularly valuable as it reduced the
                    reliance on external tools and prevented user error.
                </p>

                <p>
                    To ensure claims about accessibility could be validated,
                    testers used <em>Accessibility Insights</em> to check that
                    colour customisations met WCAG standards. Links to this
                    testing resource were included directly in the evaluation
                    scripts, making the process transparent and reproducible.
                </p>

                <FigureWithCaption
                    src={ictSeniorAnalystTestScriptScreenshot}
                    alt="A screenshot of the colour scheme test"
                    caption="A screenshot of the colour scheme test"
                />

                <p>
                    Alongside technical evaluation, I engaged with key
                    stakeholders to manage change effectively, recognising that
                    successful adoption depends on clear communication and
                    aligning technology capabilities with user readiness.
                </p>

                <p>
                    To support the evaluation process more broadly, I developed
                    a reusable{" "}
                    <a
                        href={blackboardPostmanCollection}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Postman collection for testing Blackboard Ultra&apos;s
                        APIs
                    </a>{" "}
                    and authored detailed user stories to ensure the LMS
                    evaluation process was grounded in real-world requirements.
                    Additionally, I created structured manual test scripts to
                    explore functionality limitations and prepared for future
                    automation testing.
                </p>

                <p>
                    Through API testing and hands-on exploration, I found that
                    achieving scalability and interoperability often involves
                    compromises, such as reduced customisation or the need for
                    greater investment in staff training and change management.
                </p>

                <p>
                    My approach to technology evaluation always considers the
                    wider ecosystem and the technology&apos;s fitness for
                    purpose, particularly how it will scale within complex
                    educational settings and remain maintainable over time.
                </p>
            </section>

            <section id="reflection">
                <h2>Reflection</h2>

                <p>
                    My experience comparing these platforms highlighted that
                    choosing between technologies is rarely straightforward, as
                    each comes with trade-offs. For example, Blackboard Ultra
                    offers deep API access and mature accessibility features,
                    but its user interface feels more traditional compared to
                    the cleaner, more modern UX design of Canvas and
                    Brightspace. While Canvas and Brightspace provide flexible,
                    cloud-native integration models and a more intuitive
                    experience for end users, they may lack some of the
                    institutional familiarity and long-standing accessibility
                    tooling that Blackboard offers.
                </p>

                <p>
                    The accessibility case study around colour customisation
                    highlighted how we dealt with multiple requirements by:
                </p>

                <ul>
                    <li>
                        capturing them in structured user stories and acceptance
                        criteria,
                    </li>
                    <li>
                        testing them using consistent methods and tools, and
                    </li>
                    <li>
                        justifying choices by balancing native functionality
                        against reliance on external tools.
                    </li>
                </ul>

                <p>
                    In my technical work, I&apos;ve found that automation with
                    tools like Electron or Python/Pandas can offer enormous time
                    savings, but also come with trade-offs in terms of long-term
                    maintainability and user onboarding. This experience gave me
                    confidence in evaluating trade-offs systematically, and I
                    now approach new technology choices with a clearer sense of
                    how to balance staff needs with long-term sustainability.
                </p>

                <p>
                    On review, these experiences have had a lasting impact on
                    how I approach learning technology. I have become more
                    confident in championing accessibility earlier in technology
                    reviews, and in using structured methods like user stories
                    and acceptance criteria to manage stakeholder needs. This
                    has also shaped how I communicate with staff: I now place
                    greater emphasis on showing how technical decisions (such as
                    native vs external colour accessibility) directly affect
                    teaching and learning, ensuring that staff understand both
                    the benefits and the limitations of a platform.
                </p>

                <p>
                    For students, these evaluations make a tangible difference —
                    for example, ensuring that colour customisation works
                    natively in the LMS reduces barriers to engagement and
                    supports inclusive teaching. Overall, I feel my practice has
                    become more systematic, evidence-based, and confident as a
                    result of my work on the Digital Education Platform Project
                    (DEPP).
                </p>

                <p>
                    For staff, this process also provided reassurance that
                    accessibility was prioritised from the outset, which
                    strengthened trust in the evaluation and reduced the risk of
                    accessibility being treated as an afterthought. Working with
                    multiple faculties showed me that even when requirements
                    differ, structured user stories provide a shared language.
                    Overall, these experiences have made me more confident in
                    leading evaluations where technical, pedagogical, and
                    accessibility requirements must be balanced, and in
                    articulating how those decisions directly affect both
                    teaching and learning.
                </p>
            </section>

            <section id="summary">
                <h2>Summary</h2>

                <p>This section shows how I:</p>

                <ul>
                    <li>
                        Compared and contrasted multiple LMS platforms
                        (Blackboard Ultra, Canvas, Brightspace) for APIs,
                        integration models, accessibility features, and user
                        experience
                    </li>

                    <li>
                        Developed tools such as Postman collections, user
                        stories, and manual test scripts to support
                        evidence-based evaluation of technology choices
                    </li>

                    <li>
                        Addressed multiple stakeholder requirements for
                        accessibility by creating acceptance criteria, testing
                        compliance, and justifying the inclusion of native vs
                        external accessibility features
                    </li>

                    <li>
                        Identified trade-offs between scalability,
                        interoperability, and customisation when exploring LMS
                        platforms and API functionality
                    </li>

                    <li>
                        Considered constraints such as platform specificity,
                        internal infrastructure, and offline access when
                        developing automation tools
                    </li>

                    <li>
                        Built a cross-platform Electron application that
                        addressed team needs across macOS and Windows
                        environments
                    </li>

                    <li>
                        Evaluated technologies with attention to sustainability,
                        value for money, and long-term maintainability
                    </li>

                    <li>
                        Advocated for open standards (for example, REST,
                        GraphQL, WCAG, EN301549) while recognising the internal
                        capacity required to adopt and maintain them effectively
                    </li>
                </ul>
            </section>

            <section id="evidence">
                <h2>Evidence</h2>

                <ul>
                    <li>
                        <a
                            href={blackboardPostmanCollection}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Postman collection developed from Blackboard
                            Ultra&apos;s Swagger spec (Repository)
                        </a>{" "}
                        <em>
                            Demonstrates critical evaluation of LMS API
                            functionality and interoperability through hands-on
                            testing. This was used to explore constraints and
                            affordances of Blackboard Ultra&apos;s integration
                            model.
                        </em>
                    </li>
                    <li>
                        <a
                            href={ictSeniorAnalystTestScriptScreenshot}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ICT Senior Analyst test script (Screenshot)
                        </a>{" "}
                        <em>
                            Shows how manual test scripts were used to evaluate
                            platform functionality, identify limitations, and
                            simulate user journeys. This highlights practical
                            engagement with technology under real-world
                            constraints.
                        </em>
                    </li>
                    <li>
                        <a
                            href={traineeListScreenshot}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Trainee List Electron app (Screenshot)
                        </a>{" "}
                        <em>
                            Evidence of custom tool development under
                            infrastructure and access constraints. Demonstrates
                            consideration of speed and platform specificity when
                            choosing Electron for cross-platform deployment.
                        </em>
                    </li>
                    <li>
                        <a
                            href={colourAccessibilityUserStories}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Colour Accessibility User Stories (Screenshot)
                        </a>{" "}
                        <em>
                            Illustrates how user-centred design principles were
                            embedded in technology evaluation by grounding
                            decisions in staff requirements. Helps demonstrate
                            value-for-money and pedagogical fit.
                        </em>
                    </li>
                    <li>
                        <a
                            href={deppIctPresentation}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Digital Education Platform Project (DEPP) ICT
                            Department Presentation (2024) (PDF)
                        </a>{" "}
                        <em>
                            Captures broader institutional decision-making,
                            where multiple LMS platforms were compared.
                            Highlights how scalability, accessibility, and
                            sustainability were evaluated at a strategic level.
                        </em>
                    </li>
                </ul>
            </section>

            <section id="further-reading">
                <h2>Further Reading</h2>

                <ul>
                    <li>
                        Anthology <em>Anthology REST API documentation</em>.{" "}
                        <a
                            href="https://developer.blackboard.com/portal/displayApi"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Available at developer.blackboard.com
                        </a>
                    </li>
                    <li>
                        Anthology <em>Blackboard Ultra</em>.{" "}
                        <a
                            href="https://www.anthology.com/products/teaching-and-learning/learning-effectiveness/blackboard"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Available at anthology.com
                        </a>
                    </li>
                    <li>
                        Atlassian{" "}
                        <em>
                            Acceptance Criteria: Examples and Best Practices
                        </em>
                        .{" "}
                        <a
                            href="https://www.atlassian.com/work-management/project-management/acceptance-criteria"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Available at atlassian.com
                        </a>
                    </li>
                    <li>
                        Carr, P. (2023).{" "}
                        <em>
                            Digital Transformation 101: How to Choose the Right
                            Technology
                        </em>
                        .{" "}
                        <a
                            href="https://www.engineering.com/digital-transformation-101-how-to-choose-the-right-technology/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Available at engineering.com
                        </a>
                    </li>
                    <li>
                        D2L <em>Brightspace API Reference</em>.{" "}
                        <a
                            href="https://docs.valence.desire2learn.com/reference.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Available at desire2learn.com
                        </a>
                    </li>
                    <li>
                        D2L <em>Brightspace by D2L</em>.{" "}
                        <a
                            href="https://www.d2l.com/en-eu/brightspace/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Available at d2l.com
                        </a>
                    </li>
                    <li>
                        Instructure <em>Canvas LMS</em>.{" "}
                        <a
                            href="https://www.instructure.com/canvas"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Available at instructure.com
                        </a>
                    </li>
                    <li>
                        Instructure <em>Canvas LMS API Documentation</em>.{" "}
                        <a
                            href="https://www.canvas.instructure.com/doc/api/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Available at canvas.instructure.com
                        </a>
                    </li>
                    <li>
                        ProductPlan <em>MoSCoW Prioritization</em>.{" "}
                        <a
                            href="https://www.productplan.com/glossary/moscow-prioritization/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Available at productplan.com
                        </a>
                    </li>
                    <li>
                        Rehkopf, M.{" "}
                        <em>User Stories with Examples and a Template</em>.
                        Atlassian.{" "}
                        <a
                            href="https://www.atlassian.com/agile/project-management/user-stories"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Available at atlassian.com
                        </a>
                    </li>
                </ul>
            </section>
        </CMALTLayout>
    );
}
