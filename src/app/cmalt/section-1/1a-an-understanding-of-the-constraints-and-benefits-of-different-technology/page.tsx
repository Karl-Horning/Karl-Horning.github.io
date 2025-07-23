import CMALTLayout from "@/components/Layouts/CMALTLayout";
import { cmaltEvidence } from "@/constants/cmalt";
import { internalRoutes } from "@/constants/links";
import { createMetadata } from "@/lib/metadata";

const { CmaltRoute } = internalRoutes;
const { presentations, repos, screenshots } = cmaltEvidence;
const { deppIctPresentation } = presentations;
const { blackboardPostmanCollection } = repos;
const {
    ictSeniorAnalystTestScriptScreenshot,
    ictUserStoriesScreenshot,
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
            lastUpdated="2025-07-22"
        >
            <section>
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

            <section>
                <h2>Description</h2>

                <p>
                    In my role as a Learning Technologist at Imperial College
                    London, I have been part of a cross-functional team
                    evaluating multiple LMS platforms (Blackboard Ultra,
                    Brightspace, Canvas) to support a major institutional
                    review. This required direct comparison of the platforms,
                    evaluating their APIs, integration models, accessibility
                    compliance (such as WCAG 2.1), and alignment with the
                    pedagogical and administrative needs of various faculties.
                </p>

                <p>
                    To assist with this, I developed a reusable Postman
                    collection for testing Blackboard Ultra&apos;s APIs and
                    authored detailed user stories to ensure the LMS evaluation
                    process was grounded in real-world requirements.
                    Additionally, I created structured manual test scripts to
                    explore functionality limitations and prepared for future
                    automation testing.
                </p>

                <p>
                    Alongside technical evaluation, I engaged with key
                    stakeholders to manage change effectively, recognising that
                    successful adoption depends on clear communication and
                    aligning technology capabilities with user readiness.
                </p>

                <p>
                    In 2020/21, I faced a different set of constraints while
                    working at Learnlight, where I designed internal tools in
                    Python and Electron to streamline internal workflows, reduce
                    processing time, and improve data accuracy. One example was
                    a custom Electron desktop app that significantly reduced
                    report generation times and improved onboarding efficiency.
                    In choosing between web-based, desktop, and cloud solutions,
                    I had to carefully weigh up factors such as user access,
                    offline availability, speed, and internal infrastructure
                    limitations — all of which shaped the final design and
                    delivery method.
                </p>
            </section>

            <section>
                <h2>Reflection</h2>

                <p>
                    Choosing between technologies is rarely straightforward, as
                    each comes with trade-offs. For example, Blackboard Ultra
                    offers deep API access and mature accessibility features,
                    but its user interface feels more traditional compared to
                    the cleaner, more modern UX design of Canvas and
                    Brightspace. While Canvas and Brightspace provide flexible,
                    cloud-native integration models and a more intuitive
                    experience for end users, they may lack some of the
                    institutional familiarity and long-standing accessibility
                    tooling that Blackboard offers. Through API testing and
                    hands-on exploration, I found that achieving scalability and
                    interoperability often involves compromises, such as reduced
                    customisation or the need for greater investment in staff
                    training and change management.
                </p>

                <p>
                    My approach to technology evaluation always considers the
                    wider ecosystem and the technology&apos;s fitness for
                    purpose, particularly how it will scale within complex
                    educational settings and remain maintainable over time.
                </p>

                <p>
                    In my technical work, I&apos;ve found that automation with
                    tools like Electron or Python/Pandas can offer enormous time
                    savings, but also come with trade-offs in terms of long-term
                    maintainability and user onboarding. When developing an
                    Electron-based report automation tool, I weighed the
                    benefits of direct local file access against the constraint
                    of platform specificity. To address this, I configured the
                    Electron app to compile for both macOS and Windows using
                    platform-specific build tools, ensuring full cross-platform
                    compatibility with minimal disruption to existing workflows.
                    This cross-platform support was a key factor in choosing
                    Electron over a web-based solution.
                </p>

                <p>
                    I&apos;ve also become more attuned to issues like value for
                    money and sustainability. Open technologies and standards
                    (like REST/GraphQL APIs or WCAG/EN301549 accessibility
                    guidance) tend to offer greater interoperability but require
                    more internal capacity to use and sustain effectively.
                </p>
            </section>

            <section>
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

            <section>
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
                            href={ictUserStoriesScreenshot}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ICT User Stories (Screenshot)
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

            <section>
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
