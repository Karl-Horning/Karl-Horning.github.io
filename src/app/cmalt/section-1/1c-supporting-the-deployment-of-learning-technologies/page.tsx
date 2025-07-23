import CMALTLayout from "@/components/Layouts/CMALTLayout";
import { cmaltEvidence } from "@/constants/cmalt";
import { internalRoutes } from "@/constants/links";
import { createMetadata } from "@/lib/metadata";

const { CmaltRoute } = internalRoutes;
const { documents, links } = cmaltEvidence;
const { microsoftTeamsFaq, usingPostmanWithApolloServer } = documents;
const { blackboardSwaggerPostmanCollectionLink, deppProjectLink } = links;

export const metadata = createMetadata({
    title: "1c: Supporting the Deployment of Learning Technologies | CMALT",
    path: CmaltRoute,
});

export default function page() {
    return (
        <CMALTLayout
            title="1c: Supporting the Deployment of Learning Technologies"
            lastUpdated="2025-07-22"
        >
            <section id="cmalt-guidance">
                <h2>CMALT Guidance</h2>

                <p>
                    Statements about your involvement in supporting the
                    deployment of Learning Technology might relate to providing
                    technical and/or pedagogic support to teachers or learners,
                    advising on (or redesigning to take account of) technical
                    and usability issues, developing strategies or policies,
                    managing change, providing training or other forms of
                    professional development, securing or deploying dedicated
                    funding and so on, all within the context of the educational
                    use of Learning Technology.
                </p>

                <p>
                    For evidence, you might include the overview section of a
                    strategy document, meeting minutes, summaries of student
                    feedback, testimonials or witness statements from other
                    colleagues.
                </p>
            </section>

            <section id="description">
                <h2>Description</h2>

                <p>
                    Over the past several years, I&apos;ve been involved in a
                    range of activities that have supported the deployment of
                    learning technologies, from technical documentation and
                    training to change management and evaluation.
                </p>

                <p>
                    Most recently, in July 2025, I published a blog post titled{" "}
                    <a
                        href={blackboardSwaggerPostmanCollectionLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Using Blackboard&apos;s Swagger File to Create a Postman
                        Collection and Make an API Call
                    </a>
                    . This guide was informed by testing work I contributed to
                    as part of the{" "}
                    <a
                        href={deppProjectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Digital Education Platform Project (DEPP)
                    </a>
                    , which explored the adoption of new LMS platforms. In the
                    blog&apos;s &ldquo;Step 4: Request an Access Token&ldquo;, I
                    reference a script adapted from one I originally developed
                    to authenticate with Learnlight&apos;s bespoke language
                    learning platform — demonstrating how techniques from
                    previous roles fed into current work.
                </p>

                <p>
                    In 2023, while working in a development-focused team, I
                    created a guide called{" "}
                    <a
                        href={usingPostmanWithApolloServer}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Using Postman with Apollo Server
                    </a>{" "}
                    to help new developers interact with a GraphQL development
                    environment. This included instructions for authentication,
                    storing JWT tokens, and running queries and mutations via
                    Postman. While it was technical in nature, the resource also
                    functioned as a learning technology support tool, easing
                    onboarding and promoting consistency across the team.
                </p>

                <p>
                    Earlier still, in June 2021 — just before Microsoft retired
                    Skype for Business — I authored a{" "}
                    <a
                        href={microsoftTeamsFaq}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Microsoft Teams FAQ
                    </a>{" "}
                    to support trainers through the institutional transition to
                    Teams. I also created a video walkthrough,{" "}
                    <em>Microsoft Teams Guide</em>, which was used to deliver
                    asynchronous training.
                </p>
            </section>

            <section id="reflection">
                <h2>Reflection</h2>

                <p>
                    Looking across these resources, I can trace a development in
                    both approach and design — moving from instructional
                    documents focused on immediate technical tasks to more
                    accessible, learner-centred materials that anticipate
                    different levels of user confidence.
                </p>

                <p>
                    For example, the{" "}
                    <a
                        href={microsoftTeamsFaq}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Microsoft Teams FAQ
                    </a>{" "}
                    included lengthy text blocks and oversized arrows that
                    partially obscured key content. By contrast, my more recent
                    API and Postman guides are more concise, streamlined, and
                    visually clearer — reflecting lessons learned about
                    information overload, visual accessibility, and cognitive
                    load. Similarly, my{" "}
                    <a
                        href={usingPostmanWithApolloServer}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Using Postman with Apollo Server
                    </a>{" "}
                    guide — created in Confluence — omitted annotated visuals
                    entirely, a gap I now actively address through better use of
                    screenshots, highlights, and contextual labelling.
                </p>

                <p>
                    These reflections have shaped my understanding that
                    effective deployment goes beyond technical rollouts. It
                    involves building user confidence, collecting feedback, and
                    iterating support based on real experiences. At Imperial,
                    this has meant creating resources that cater to a diverse
                    tester group across academic departments — with varying
                    levels of technical fluency. I&apos;ve provided asynchronous
                    walkthroughs and clear reference materials that reduce the
                    need for live support and empower users to explore new
                    systems independently.
                </p>

                <p>
                    I&apos;ve also learned that successful technology adoption
                    often hinges on staff confidence and institutional context.
                    Through LMS evaluation work, I&apos;ve seen how simplifying
                    language, aligning examples with actual marking workflows,
                    and considering accessibility at all stages can make a
                    significant difference to adoption rates. Feedback from
                    academic and administrative colleagues has frequently
                    prompted revisions — for example, prioritising ease of use
                    over advanced functionality where appropriate.
                </p>

                <p>
                    Supporting deployment now feels like an empathetic,
                    iterative process — one that blends technical clarity with a
                    deep understanding of staff needs. I now approach training
                    and resource development with this mindset, aiming not just
                    to instruct but to support learning in the broader sense.
                </p>
            </section>

            <section id="summary">
                <h2>Summary</h2>

                <p>This section demonstrates how I have:</p>

                <ul>
                    <li>
                        Supported the evaluation and deployment of LMS platforms
                        through a mix of technical documentation, testing, and
                        tailored guidance
                    </li>
                    <li>
                        Created training materials that evolve with user needs —
                        from early platform migrations to current API and
                        GraphQL workflows
                    </li>
                    <li>
                        Contributed to change management efforts by anticipating
                        user challenges and aligning support with institutional
                        processes
                    </li>
                    <li>
                        Developed resources that balance technical detail with
                        accessibility and clarity, reflecting user feedback and
                        evolving practice
                    </li>
                    <li>
                        Helped bridge development and pedagogy by aligning
                        features and workflows with actual teaching needs
                    </li>
                    <li>
                        Advocated for usability, clarity, and sustainability in
                        every stage of the deployment process
                    </li>
                </ul>
            </section>

            <section id="evidence">
                <h2>Evidence</h2>
                <ul>
                    <li>
                        <a
                            href={blackboardSwaggerPostmanCollectionLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Using Blackboard&apos;s Swagger File to Create a Postman
                            Collection and Make an API Call
                        </a>{" "}
                        <em>
                            Step-by-step guide to using Blackboard&apos;s API via
                            Postman, informed by DEPP testing and earlier
                            platform integration work.
                        </em>
                    </li>
                    <li>
                        <a
                            href={usingPostmanWithApolloServer}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Using Postman with Apollo Server
                        </a>{" "}
                        <em>
                            Internal documentation for developers using GraphQL
                            in Postman, supporting team learning and technical
                            onboarding.
                        </em>
                    </li>
                    <li>
                        <a
                            href={microsoftTeamsFaq}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Microsoft Teams FAQ
                        </a>{" "}
                        <em>
                            Trainer-focused guide created during the
                            institutional transition from Skype for Business to
                            Teams, used alongside asynchronous video training.
                        </em>
                    </li>
                    <li>
                        TODO: Microsoft Teams Guide{" "}
                        <em>
                            Short walkthrough video offering asynchronous
                            support during Microsoft Teams rollout.
                        </em>
                    </li>
                </ul>
            </section>

            <section id="further-reading">
                <h2>Further Reading</h2>

                <ul>
                    <li>
                        <a
                            href={deppProjectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Digital Education Platform Project (DEPP)
                        </a>
                    </li>
                </ul>
            </section>
        </CMALTLayout>
    );
}
