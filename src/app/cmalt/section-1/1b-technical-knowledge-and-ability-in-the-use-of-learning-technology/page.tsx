import FigureWithCaption from "@/components/ui/FigureWithCaption";
import CMALTLayout from "@/components/Layouts/CMALTLayout";
import { cmaltEvidence } from "@/lib/constants/cmalt";
import { internalRoutes } from "@/lib/constants/links";
import { createMetadata } from "@/lib/metadata";

const { CmaltRoute } = internalRoutes;
const { certificates, repos, screenshots } = cmaltEvidence;
const { graphQlCertificate } = certificates;
const { blackboardPostmanCollection, oxfordLearnersDictionariesApi } = repos;
const {
    ictAnalystTestScriptScreenshot,
    ictSeniorAnalystTestScriptScreenshot,
    traineeListScreenshot,
} = screenshots;

export const metadata = createMetadata({
    title: "1b: Technical Knowledge and Ability in the Use of Learning Technology | CMALT",
    path: CmaltRoute,
});

export default function page() {
    return (
        <CMALTLayout
            title="1b: Technical Knowledge and Ability in the Use of Learning Technology"
            lastUpdated="2025-09-09"
        >
            <section id="description">
                <h2>Description</h2>

                <p>
                    In my career as both a developer and a learning
                    technologist, I have worked with a wide range of learning
                    technologies, including VLE platforms, accessibility tools,
                    and assessment environments. I have contributed to the
                    evaluation and optimisation of Learning Management Systems
                    (LMS) such as Blackboard Ultra, Canvas, Brightspace, and
                    Moodle by customising workflows, testing features, and
                    supporting academic staff in their use.
                </p>

                <FigureWithCaption
                    src={traineeListScreenshot}
                    alt="A screenshot of my Trainee List Electron app"
                    caption="A screenshot of my Trainee List Electron app"
                />

                <p>
                    I&apos;ve also developed bespoke tools using JavaScript,
                    Python, and Excel — from building GraphQL APIs within a
                    commercial LMS to creating desktop applications with
                    Electron for staff onboarding and training. These tools have
                    improved platform efficiency, enhanced staff engagement, and
                    often reduced technical barriers to adoption.
                </p>

                <p>
                    Key tools and technologies I&apos;ve used in learning
                    contexts include:
                </p>

                <ul>
                    <li>
                        <strong>VLEs</strong>: Blackboard Ultra, Brightspace,
                        Canvas, Moodle
                    </li>
                    <li>
                        <strong>Assessment & automation</strong>: Excel VBA,
                        Python (Pandas), Postman (API testing), Mocha (backend
                        test automation)
                    </li>
                    <li>
                        <strong>User-focused development</strong>: Electron
                        apps, API integrations, Postman-based testing workflows
                    </li>
                    <li>
                        <strong>Accessibility</strong>: PDF/Word remediation,
                        subtitle workflows, WCAG 2.1 and EN 301 549 audits
                    </li>
                    <li>
                        <strong>Collaboration platforms</strong>: Confluence,
                        Jira, GitHub, Agile boards for LMS implementation and
                        evaluation
                    </li>
                </ul>
            </section>

            <section id="reflection">
                <h2>Reflection</h2>

                <p>
                    Much of my work has bridged technical development and
                    practical pedagogical application. At Learnlight, for
                    example,{" "}
                    <a
                        href={graphQlCertificate}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        I optimised GraphQL API responses
                    </a>{" "}
                    and implemented automated backend testing to support a
                    commercial LMS serving over 700,000 learners. While highly
                    technical, this work had a direct educational impact:
                    improved system performance translated to better student
                    experiences.
                </p>

                <p>
                    One project that exemplifies this balance was my integration
                    of the{" "}
                    <a
                        href={oxfordLearnersDictionariesApi}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Oxford Learner&apos;s Dictionaries API Entry Fetcher
                    </a>{" "}
                    into the Learnlight platform. I developed a Node.js proof of
                    concept that fetched and reformatted dictionary entries into
                    accessible, semantically structured HTML. Using Cheerio for
                    parsing, I removed superfluous elements and applied
                    lightweight styling to match our platform&apos;s design.
                    This gave students reliable, accessible definitions without
                    interrupting the flow of lessons.
                </p>

                <p>
                    All features I developed were designed to work within the
                    Learnlight App, which was the primary interface used by
                    students to access their online lessons. The platform was
                    built for blended delivery, combining self-paced digital
                    content with synchronous teaching, so mobile performance,
                    accessibility, and seamless user experience were critical.
                </p>

                <p>
                    At Imperial College London, I brought this technical
                    foundation into a more learner-facing role. I wrote API
                    scripts based on LMS documentation (including Swagger
                    specifications) and{" "}
                    <a
                        href={blackboardPostmanCollection}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        used Postman to evaluate endpoints related to identity
                        and access management (IAM), data analytics, and system
                        configuration
                    </a>
                    . These scripts supported LMS evaluation by revealing system
                    behaviours and limitations across platforms.
                </p>

                <FigureWithCaption
                    src={ictAnalystTestScriptScreenshot}
                    alt="A screenshot of the test scripts"
                    caption="A screenshot of the test scripts"
                />

                <p>
                    Alongside this, I developed manual test scripts aligned with
                    real-world teaching needs, including navigation structures,
                    module aesthetics, bulk uploads, and user activity logs.
                    These enabled broader staff participation in the evaluation
                    process and informed my training delivery. For example, the
                    ICT Senior Analyst test script exemplifies how I worked
                    closely with academic and technical colleagues to understand
                    their specific needs. By collecting user stories from IAM
                    administrators and ICT Senior Analysts, I identified key API
                    functionalities for their workflows, such as documentation
                    accessibility, data request formats, and response
                    limitations. This collaborative approach ensured that the
                    testing scripts were directly relevant to real-world tasks.
                    This dual approach allowed me to explain platform
                    capabilities and constraints from both user and developer
                    perspectives.
                </p>

                <p>
                    Through these roles, I&apos;ve gained a deep appreciation
                    for scalable solutions, accessible design, and the practical
                    constraints institutions face when adopting or changing
                    systems. My work consistently aims to reduce technical
                    friction, build user confidence, and support learning
                    outcomes through thoughtful, hands-on use of technology.
                </p>
            </section>

            <section id="summary">
                <h2>Summary</h2>

                <p>This section shows how I:</p>

                <ul>
                    <li>
                        Used a wide range of learning technologies, including
                        VLE platforms (Blackboard Ultra, Brightspace, Canvas,
                        Moodle), assessment tools, and accessibility software
                    </li>
                    <li>
                        Designed and developed bespoke tools using JavaScript,
                        Python, GraphQL, and Electron to enhance learning
                        delivery and staff training
                    </li>
                    <li>
                        Created and tested APIs, including GraphQL and RESTful
                        services, to integrate third-party resources such as the
                        Oxford Learner&apos;s Dictionaries API into learning
                        platforms
                    </li>
                    <li>
                        Supported system evaluation processes through API
                        scripting, automated testing (Mocha, Postman), and
                        manual test plans aligned with teaching priorities
                    </li>
                    <li>
                        Applied accessibility and inclusive design principles
                        (for example, WCAG 2.1, EN 301 549) to ensure learning
                        tools and resources were usable by all
                    </li>
                    <li>
                        Developed features for a mobile-first blended learning
                        platform (Learnlight App), where learners accessed
                        self-paced and live lessons on the go
                    </li>
                    <li>
                        Collaborated with academic and technical colleagues
                        using Agile workflows, Jira boards, Confluence, and
                        GitHub to evaluate and implement LMS solutions
                    </li>
                    <li>
                        Demonstrated how technical developments directly
                        supported learning and teaching by improving usability,
                        access, and staff engagement
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
                            Demonstrates use of API endpoint analysis to
                            understand LMS functionality. Highlights the ability
                            to translate technical documentation (Swagger) into
                            practical testing workflows relevant to access
                            management and system evaluation.
                        </em>
                    </li>
                    <li>
                        <a
                            href={oxfordLearnersDictionariesApi}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Oxford Learner&apos;s Dictionaries API Entry Fetcher
                            (Repository)
                        </a>{" "}
                        <em>
                            A working Node.js prototype that fetches and
                            transforms dictionary data for seamless integration
                            into a blended learning platform. Demonstrates use
                            of promises, Cheerio, and semantic HTML to improve
                            mobile learning accessibility and user experience.
                        </em>
                    </li>
                    <li>
                        <a
                            href={ictAnalystTestScriptScreenshot}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ICT Analyst test script (Screenshot)
                        </a>{" "}
                        <em>
                            Illustrates practical application of test plans
                            designed to reflect academic workflows. Shows how
                            technical tools were evaluated from a learning and
                            teaching perspective, improving stakeholder
                            confidence in platform usability.
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
                            Further evidence of applied testing aligned with
                            curriculum delivery and administrative requirements.
                            Supports dual perspective (technical and
                            pedagogical) in LMS evaluation and training
                            readiness.
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
                            Shows a bespoke desktop app built with Electron and
                            JavaScript to streamline staff onboarding. Developed
                            under institutional constraints, this demonstrates
                            platform-specific deployment, reduced friction, and
                            enhanced user autonomy.
                        </em>
                    </li>
                    <li>
                        <a
                            href={graphQlCertificate}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Modern GraphQL with Node (Udemy, 2023) (Certificate)
                        </a>{" "}
                        <em>
                            Certificate demonstrating formal training in modern
                            API development. Underpins evidence of GraphQL
                            integration work and highlights continued
                            professional development in technical skillsets
                            supporting learning technologies.
                        </em>
                    </li>
                </ul>
            </section>

            <section id="further-reading">
                <h2>Further Reading</h2>

                <ul>
                    <li>
                        Cheerio{" "}
                        <em>
                            Cheerio: Fast, Flexible, and Lean Implementation of
                            Core jQuery
                        </em>
                        . npm. Available at:{" "}
                        <a
                            href="https://www.npmjs.com/package/cheerio"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.npmjs.com/package/cheerio
                        </a>
                    </li>
                    <li>
                        Electron{" "}
                        <em>
                            Build Cross-Platform Desktop Apps with JavaScript,
                            HTML, and CSS
                        </em>
                        . Available at:{" "}
                        <a
                            href="https://www.electronjs.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.electronjs.org/
                        </a>
                    </li>
                    <li>
                        GraphQL Foundation{" "}
                        <em>GraphQL: A Query Language for Your API</em>.
                        Available at:{" "}
                        <a
                            href="https://graphql.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://graphql.org/
                        </a>
                    </li>
                    <li>
                        Mocha{" "}
                        <em>
                            Mocha: Simple, Flexible, Fun JavaScript Test
                            Framework for Node.js &amp; the Browser
                        </em>
                        . Available at:{" "}
                        <a
                            href="https://mochajs.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://mochajs.org/
                        </a>
                    </li>
                    <li>
                        Oxford University Press{" "}
                        <em>Oxford Learner&apos;s Dictionaries API</em>.
                        Available at:{" "}
                        <a
                            href="https://languages.oup.com/oxford-learners-dictionaries-api/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://languages.oup.com/oxford-learners-dictionaries-api/
                        </a>
                    </li>
                    <li>
                        Postman <em>Postman API Platform</em>. Available at:{" "}
                        <a
                            href="https://www.postman.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.postman.com/
                        </a>
                    </li>
                </ul>
            </section>
        </CMALTLayout>
    );
}
