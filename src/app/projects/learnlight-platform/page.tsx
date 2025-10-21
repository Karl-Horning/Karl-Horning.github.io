import ProjectLayout from "@/components/Layouts/ProjectLayout";
import { meta } from "./meta";
import FigureWithCaption from "@/components/ui/FigureWithCaption";
import { createMetadata } from "@/lib/metadata";
import { internalRoutes } from "@/lib/constants/ui";

const { ProjectsRoute } = internalRoutes;

export const metadata = createMetadata({
    title: `${meta.title} | Projects`,
    path: `${ProjectsRoute}/${meta.slug}`,
});

export default function Page() {
    return (
        <ProjectLayout {...meta}>
            <aside className="not-prose rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <p className="font-semibold">At a Glance</p>
                <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 dark:text-slate-300">
                    <li>
                        <strong>Role:</strong> Full-Stack JavaScript Developer
                        (Backend Focus)
                    </li>
                    <li>
                        <strong>Period:</strong> June 2021-July 2024
                    </li>
                    <li>
                        <strong>Industry:</strong> Language Learning / EdTech
                    </li>
                    <li>
                        <strong>Scale:</strong> 700,000+ learners &bull; 1,200+
                        corporate clients &bull; 180+ countries
                    </li>
                </ul>
            </aside>

            <h2 id="overview">Overview</h2>

            <p>
                <strong>Learnlight Platform & Mobile Apps</strong> — a scalable,
                multi-platform learning ecosystem supporting over 700,000
                registered learners in 180+ countries. As a{" "}
                <strong>Full-Stack JavaScript Developer (Backend Focus)</strong>
                , I worked on Learnlight&apos;s{" "}
                <strong>GraphQL abstraction layer (Apollo Server)</strong>,
                optimising database access and data-loading behaviour to improve
                performance, stability, and developer experience across web and
                mobile.
            </p>

            <p>
                With a background as an English trainer using the Learnlight
                platform, I brought valuable domain insight into how technical
                performance directly affected the learner experience. This
                perspective helped me identify and address bottlenecks that
                could impact usability and engagement.
            </p>

            <h2 id="role">My Role</h2>

            <p>
                I owned several key backend initiatives that strengthened the
                reliability and performance of Learnlight&apos;s learning
                platform.
            </p>

            <ul>
                <li>
                    Introduced <strong>DataLoader</strong> to address the
                    GraphQL N+1 query problem, reducing duplicate database calls
                    from <strong>36→1 per request</strong> and improving
                    resolver response times by <strong>up to 70%</strong> for
                    course-level queries.
                </li>
                <li>
                    Optimised a complex data-heavy endpoint, cutting response
                    time by <strong>over 65%</strong> through batching, caching,
                    and query refactoring.
                </li>
                <li>
                    Implemented <strong>GraphQL resolvers</strong> and{" "}
                    <strong>raw SQL queries</strong> (via Sequelize) to support
                    complex joins and analytics features, improving data
                    retrieval efficiency for reporting services.
                </li>
                <li>
                    Owned the full{" "}
                    <strong>
                        Oxford Learner&apos;s Dictionaries API integration
                    </strong>{" "}
                    — from discovery and contract to schema design,
                    implementation, and rollout — adding in-app definitions and
                    pronunciation features for learners.
                </li>
                <li>
                    Implemented <strong>rate limiting</strong> for new SCORM
                    integrations to safeguard backend services when deployed to
                    large external training providers.
                </li>
                <li>
                    Authored and consolidated <strong>API documentation</strong>{" "}
                    directly within GraphQL schema definitions and Confluence,
                    ensuring that new developers could configure and begin work
                    as soon as their accounts were provisioned.
                </li>
                <li>
                    Introduced a <strong>pre-commit test hook</strong> that
                    automatically executed Mocha tests, preventing unverified
                    code from being committed.
                </li>
                <li>
                    Validated all GraphQL operations through a shared{" "}
                    <strong>Postman collection</strong>, ensuring both request
                    and response objects matched expected schemas prior to
                    deployment.
                </li>
                <li>
                    Acted as the <strong>API point of contact</strong> for
                    mobile and web teams, leading backend discussions in sprint
                    planning and clarifying delivery timelines.
                </li>
                <li>
                    Conducted code reviews and applied domain knowledge from
                    teaching on the platform to identify performance bottlenecks
                    affecting learner experience.
                </li>
            </ul>

            <h2 id="architecture">Architecture and Approach</h2>

            <FigureWithCaption
                src={"/img/projects/architecture-diagram.png"}
                alt="Clients reach the API Gateway/CloudFront, which routes to a GraphQL layer (Apollo Server). That layer uses DataLoader, caching, rate limiting and async workers, and orchestrates PostgreSQL (Biz, Worker, DW schemas), MongoDB for read-optimised queries, and S3 for asset storage."
                caption="Figure: Simplified backend architecture showing the GraphQL (Apollo Server) layer within the AWS VPC. The GraphQL layer orchestrates PostgreSQL (system of record) and MongoDB (read-optimised), with caching, batching, and async processing to maintain performance at scale."
            />

            <p>
                The backend was built around an{" "}
                <strong>Apollo Server-based GraphQL abstraction layer</strong>{" "}
                operating within the AWS VPC, positioned between the API Gateway
                and the PostgreSQL cluster. It served as the central interface
                for all web and mobile data requests, exposing multiple domains
                (Business, Worker, and Data Warehouse) through a unified, typed
                GraphQL API.
            </p>

            <p>
                This layer handled the majority of data orchestration, applying{" "}
                <strong>
                    batching (DataLoader), caching (Memcached), and selective
                    rate limiting
                </strong>{" "}
                to optimise performance and reduce load on the underlying
                databases. Supporting services such as{" "}
                <strong>Lambda workers</strong> were used to offload
                compute-heavy operations, ensuring the platform remained stable
                at scale.
            </p>

            <p>
                Data persisted primarily in <strong>PostgreSQL</strong> for
                transactional consistency, complemented by a{" "}
                <strong>MongoDB layer</strong> optimised for high-volume reads
                and reporting workloads. This combination provided flexibility
                for analytical queries and large-scale data retrieval without
                affecting core transactional performance.
            </p>

            <p>
                I focused on <strong>application-level performance</strong>{" "}
                through query optimisation and efficient data access patterns,
                while collaborating with DevOps colleagues responsible for
                infrastructure monitoring, alerting, and system-level
                performance. Observability included{" "}
                <strong>New Relic APM instrumentation</strong> via the Apollo
                Server plugin for request tracing and resolver insights.
            </p>

            <p>
                All new GraphQL fields and resolvers followed a clearly defined
                deprecation policy using the <code>@deprecated</code> directive,
                providing an eight-week window before removal.{" "}
                <strong>Schema changes</strong> were version-controlled in Git
                and underwent both automated (Mocha) and manual testing before
                hand-off to the QA team for final validation. Unit tests were
                mandatory for new work, covering input validation, resolver
                logic, and response structure.
            </p>

            <p>
                To minimise breaking changes, schema updates followed a{" "}
                <strong>deprecate-then-remove</strong> policy with{" "}
                <strong>schema diff checks in CI</strong> and versioned field
                rollouts coordinated with iOS and Android teams.
            </p>

            <h2 id="challenges">Key Challenges and Solutions</h2>

            <div
                className="table-wrap overflow-x-auto"
                role="region"
                aria-label="Key challenges table"
            >
                <table className="mb-8 min-w-full border-collapse text-sm">
                    <caption className="sr-only">
                        Key challenges, solutions, and results from backend work
                        on the Learnlight platform (2021-2024).
                    </caption>
                    <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                            <th
                                scope="col"
                                className="p-2 text-left font-semibold"
                            >
                                Challenge
                            </th>
                            <th
                                scope="col"
                                className="p-2 text-left font-semibold"
                            >
                                Solution
                            </th>
                            <th
                                scope="col"
                                className="p-2 text-left font-semibold"
                            >
                                Result
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                        <tr>
                            <td className="p-2 font-medium">
                                N+1 query problem causing redundant SQL calls
                            </td>
                            <td className="p-2">
                                Introduced <em>DataLoader</em> for critical
                                resolvers
                            </td>
                            <td className="p-2">
                                Reduced duplicate queries <strong>36→1</strong>;
                                improved resolver speed by up to{" "}
                                <strong>70%</strong>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2 font-medium">
                                Slow performance for large, data-heavy queries
                            </td>
                            <td className="p-2">
                                Refactored GraphQL resolvers with batching,
                                caching, and optimised SQL
                            </td>
                            <td className="p-2">
                                Cut response times by <strong>over 65%</strong>{" "}
                                across key endpoints
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2 font-medium">
                                High traffic from external SCORM integrations
                            </td>
                            <td className="p-2">
                                Added rate limiting using{" "}
                                <code>rate-limiter-flexible</code>
                            </td>
                            <td className="p-2">
                                Safely handled load from large external
                                deployments; validated limiter behaviour under
                                controlled burst tests
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2 font-medium">
                                Complex relational analytics queries
                            </td>
                            <td className="p-2">
                                Created optimised raw SQL queries managed via
                                Sequelize
                            </td>
                            <td className="p-2">
                                Improved data retrieval efficiency and reduced
                                query latency
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2 font-medium">
                                Developer onboarding time
                            </td>
                            <td className="p-2">
                                Consolidated API documentation and Postman
                                collections
                            </td>
                            <td className="p-2">
                                New developers could start building immediately
                                after account setup
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2 font-medium">
                                Quality assurance before commit
                            </td>
                            <td className="p-2">
                                Added <em>pre-commit hook</em> to run Mocha
                                tests automatically
                            </td>
                            <td className="p-2">
                                Prevented untested code from entering the
                                repository
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="stack">Technical Stack</h2>

            <ul>
                <li>
                    <strong>Languages & Runtime:</strong> Node.js, JavaScript
                    (ES6+)
                </li>
                <li>
                    <strong>Frameworks & Libraries:</strong> GraphQL (Apollo
                    Server), DataLoader, graphql-rate-limit-directive,
                    apollo-server-cache-memcached, Sequelize ORM
                </li>
                <li>
                    <strong>Databases:</strong> PostgreSQL (transactional),
                    MongoDB (read-optimised)
                </li>
                <li>
                    <strong>Cloud & Integrations:</strong> AWS S3 (signed URL
                    flows), AWS Secrets Manager, Oxford Learner&apos;s
                    Dictionaries API
                </li>
                <li>
                    <strong>Observability:</strong> New Relic APM (Apollo Server
                    plugin), structured logging with Pino
                </li>
                <li>
                    <strong>Testing & QA:</strong> Mocha, Chai, Postman
                    (ServiceBroker collection), NYC (coverage), schema diff
                    checks in CI
                </li>
                <li>
                    <strong>Tooling:</strong> ESLint (Airbnb), Git Hooks
                    (Pre-commit / CI gate)
                </li>
                <li>
                    <strong>Collaboration & Workflow:</strong> Jira, Confluence,
                    Bitbucket, VS Code, DBeaver, MS Teams
                </li>
                <li>
                    <strong>CI/CD:</strong> GitLab CI/CD (organisation-level
                    runners)
                </li>
            </ul>

            <h2 id="gdpr">GDPR & Compliance</h2>

            <p>Completed formal GDPR awareness and compliance training:</p>

            <ul>
                <li>
                    <em>GDPR: Beginner</em> (Kaspersky, Oct 2021)
                </li>
                <li>
                    <em>GDPR: Elementary</em> (Kaspersky, Dec 2021)
                </li>
                <li>
                    <em>General Data Protection Regulation (GDPR)</em>{" "}
                    (Learnlight, May 2023)
                </li>
                <li>
                    <em>An Introduction to the GDPR</em> (Kevin Mitnick Security
                    Awareness, Mar 2024)
                </li>
            </ul>

            <p>
                Applied these principles to backend development by minimising
                data exposure in dev/test environments and ensuring that GraphQL
                resolvers handled user data responsibly.
            </p>

            <h3 className="mt-6 text-lg font-semibold">
                Security & Access Controls
            </h3>
            <ul className="list-disc pl-5">
                <li>JWT-based authentication with one-hour token expiry.</li>
                <li>
                    Development and test environments accessible only via
                    OpenVPN for network isolation.
                </li>
                <li>
                    Temporary AWS credentials issued through the AWS CLI for
                    deployment access, reinforcing the principle of least
                    privilege.
                </li>
            </ul>

            <h2 id="impact">Impact</h2>

            <p>
                Helped maintain <strong>99.94% uptime</strong> while supporting
                over <strong>700,000 registered learners</strong> worldwide.
            </p>
            <p>
                Optimised key GraphQL operations, reducing query counts and
                improving resolver performance, which enabled faster responses
                across web and mobile.
            </p>
            <p>
                Improved development workflows through automated testing,
                pre-commit verification, and clear schema documentation,
                shortening onboarding time for new engineers.
            </p>

            <h2 id="reflection">Reflection</h2>

            <p>
                Working in a small backend team provided full exposure to the
                platform&apos;s data architecture — from SQL and GraphQL
                optimisation to schema evolution and developer tooling. Owning
                initiatives such as the <strong>DataLoader rollout</strong>,{" "}
                <strong>dictionary integration</strong>, and{" "}
                <strong>test automation</strong> strengthened my expertise in
                building scalable and maintainable backend systems that balance
                performance, reliability, and collaboration.
            </p>

            <p>
                Within a team of around ten, I regularly facilitated backend
                planning discussions and acted as the point of contact for
                API-related workstreams, ensuring technical feasibility and
                realistic delivery timelines.
            </p>

            <p>
                I also contributed to code reviews, applying both technical and
                domain knowledge to identify bottlenecks that could affect user
                experience or learning outcomes.
            </p>

            <h2 id="links">Links</h2>
            <ul>
                <li>
                    <a
                        href="https://apps.apple.com/us/app/learnlight/id1479158492"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learnlight iOS App
                    </a>
                </li>
                <li>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.ct.learnlight&hl=en-US&pli=1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learnlight Android App
                    </a>
                </li>
            </ul>
        </ProjectLayout>
    );
}
