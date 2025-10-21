import CmaltLayout from "@/components/layouts1/CmaltLayout";
import {
    certificates,
    documents,
    links,
    presentations,
    screenshots,
} from "@/lib/constants/cmalt";
import { internalRoutes } from "@/lib/constants/ui";
import { createMetadata } from "@/lib/helpers";
import { meta } from "./meta";

const { CmaltRoute } = internalRoutes;

// Evidence links
const { understandingManualTestingCertificate } = certificates;
const {
    microsoftTeamsFaq,
    usingPostmanWithApolloServer,
    webAccessibilityResourcesAndTools,
} = documents;
const { blackboardSwaggerPostmanCollectionLink } = links;
const { deppIctPresentation } = presentations;
const { lmsProjectGroupNotesScreenshot, pocCleaningScreenshot } = screenshots;

// Metadata
export const metadata = createMetadata({
    title: `${meta.title} | CMALT`,
    path: `${CmaltRoute}/${meta.slug}`,
});

// Section 4a
export default function Page() {
    return (
        <CmaltLayout {...meta}>
            <section id="description">
                <h2>Description</h2>

                <p>
                    Effective communication underpins my work as an ICT Learning
                    Technologist at Imperial College London. I prioritise{" "}
                    clarity, empathy, and inclusivity, translating between
                    academic, administrative, and technical groups so that
                    shared goals are understood and achievable. In hybrid and
                    remote settings, I use shared documentation, structured
                    updates, and active listening to keep projects moving and to
                    make contributions visible.
                </p>

                <p>
                    My communication strategies vary according to audience and
                    purpose — from producing accessible written guides and
                    visual technical documentation, to delivering departmental
                    presentations and preparing structured meeting summaries.
                    This adaptability is essential when collaborating across
                    cross-functional groups such as DEPP&apos;s technical and
                    academic teams.
                </p>

                <p>
                    Collaboration is central to my role. I work with colleagues
                    across faculties and support teams to co-design learning
                    experiences and advise on the use of Canvas LMS and related
                    technologies. A significant part of my current work is
                    within the Digital Education Platform Project (DEPP),
                    supporting Imperial&apos;s transition from Blackboard to
                    Canvas. Within the Platform Integration and Migration and{" "}
                    Testing and Evaluation groups, I help surface technical
                    dependencies, coordinate feedback loops, and ensure{" "}
                    actionable outcomes are captured in Asana so they can be
                    implemented by the right teams.
                </p>

                <p>
                    In 2024, I delivered a department-wide presentation on DEPP,
                    outlining milestones, testing processes, and feedback
                    mechanisms. This improved shared understanding and aligned
                    timelines between technical and academic teams. In June
                    2025, I collaborated with colleagues in the Business School
                    on a Proof of Concept data-cleaning exercise, identifying
                    and annotating discrepancies to streamline downstream work.
                </p>

                <p>
                    Ahead of this Proof of Concept, I completed the{" "}
                    <a
                        href={understandingManualTestingCertificate}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Understanding Manual Testing
                    </a>{" "}
                    course on LinkedIn Learning (5 November 2024) to strengthen
                    my approach to testing and communication. Coming from a
                    developer background, I was more familiar with automated
                    testing frameworks such as unit and integration tests. This
                    training helped me appreciate how manual testing complements
                    automation by capturing the user experience and uncovering
                    usability or accessibility issues that scripted tests can
                    miss. It also improved how I communicate
                    findings—translating technical observations into practical
                    recommendations for non-technical stakeholders.
                </p>

                <p>
                    I also disseminate practice through documentation, practical
                    guides, and blog posts. Examples include:
                </p>

                <ul>
                    <li>
                        <a
                            href={microsoftTeamsFaq}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Microsoft Teams FAQ
                        </a>{" "}
                        (2021)
                    </li>
                    <li>
                        <a
                            href={usingPostmanWithApolloServer}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Using Postman with Apollo Server
                        </a>{" "}
                        (2023)
                    </li>
                    <li>
                        <a
                            href={blackboardSwaggerPostmanCollectionLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Using Blackboard&apos;s Swagger File to Create a
                            Postman Collection and Make an API Call
                        </a>{" "}
                        (2025)
                    </li>
                    <li>
                        <a
                            href={webAccessibilityResourcesAndTools}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Web Accessibility Resources and Tools: Guidelines,
                            Checklists, and Testing Solutions
                        </a>{" "}
                        (shared with DEPP in January 2025).
                    </li>
                </ul>

                <p>
                    My portfolio site serves as an open record of these
                    materials, helping colleagues and the wider community access
                    concrete, reusable guidance.
                </p>

                <p>
                    My professional development is sustained through internal
                    learning sessions, self-directed study (for example,
                    LinkedIn Learning courses on accessibility,
                    JavaScript/TypeScript, and APIs), and engagement with
                    technology blogs and YouTube channels. I regularly share
                    useful resources with colleagues, contributing to a culture
                    of collective learning.
                </p>
            </section>

            <section id="reflection">
                <h2>Reflection</h2>

                <p>
                    Working across multi-stakeholder projects has sharpened my
                    communication practice. I have learned that plain-English
                    explanations, clear documentation of decisions, and explicit
                    next steps are essential for maintaining momentum and trust.
                    In DEPP, this has meant translating complex platform
                    evaluations and test findings into concise updates that
                    productively guide technical and academic teams.
                </p>

                <p>
                    Through my involvement in DEPP meetings, I have learned the
                    value of structured preparation and documentation from
                    colleagues who model effective facilitation practices.
                    Project owners consistently share agendas in advance and
                    follow them closely during meetings, which helps maintain
                    focus and ensure that all voices are heard. On two
                    occasions, I prepared the meeting notes myself, adopting the
                    same format — an agenda-linked structure with a brief
                    executive summary and clearly marked{" "}
                    <strong>Action:</strong> points. This approach, also
                    informed by accessibility guidance from{" "}
                    <a
                        href={
                            "https://www.gov.uk/government/publications/inclusive-communication/accessible-communication-formats"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GOV.UK&apos;s Inclusive Communication
                    </a>{" "}
                    resource, supports clarity and inclusivity by making
                    information concise, scannable, and easy to follow for all
                    participants.
                </p>

                <p>
                    The DEPP Proof of Concept also reinforced the communicative
                    value of <em>manual testing</em>. Through collaboration with
                    technical and academic colleagues, I learned that effective
                    testing is as much about clear dialogue and documentation as
                    it is about functionality. Different users engage with
                    systems in different ways — some explore every feature,
                    while others only use what they need — so structured
                    feedback and observation are essential for understanding
                    pain points and adoption barriers. This insight continues to
                    inform how I test and present my own digital tools, ensuring
                    that findings are framed in accessible, actionable language
                    for all audiences.
                </p>

                <p>
                    Producing guides and blog posts has likewise refined how I
                    structure information for different audiences — from
                    technical walkthroughs to accessibility-aware resources. In
                    both meetings and published materials, I apply the same
                    inclusive design principle: keep it simple, make it concise,
                    and emphasise what matters most. I&apos;ve also strengthened
                    interpersonal skills central to collaborative work—framing
                    feedback constructively, negotiating priorities when
                    timelines compete, and closing the loop with clear, written
                    next steps.
                </p>

                <p>
                    These experiences have also developed my interpersonal and
                    professional skills — active listening, empathy, and
                    diplomatic communication. By clarifying ambiguity,
                    synthesising perspectives, and moderating between
                    pedagogical and technical needs, I have built trust and
                    fostered a supportive environment within hybrid teams.
                </p>

                <p>
                    Looking ahead, I will continue sharing effective practice
                    through internal channels and my professional portfolio,
                    while further developing facilitation and knowledge-sharing
                    approaches that make communication consistent, scalable, and
                    inclusive.
                </p>
            </section>

            <section id="summary">
                <h2>Summary</h2>

                <p>This section demonstrates how I:</p>

                <ul>
                    <li>
                        Practise clear, inclusive communication to connect
                        academic, administrative, and technical teams.
                    </li>
                    <li>
                        Contribute to DEPP through Integration/Migration and
                        Testing/Evaluation groups, translating findings into
                        actionable Asana tasks.
                    </li>
                    <li>
                        Delivered a department-wide DEPP presentation (2024) to
                        align timelines, testing, and feedback processes.
                    </li>
                    <li>
                        Supported a Business School Proof of Concept (June 2025)
                        by annotating data discrepancies and clarifying
                        follow-up actions.
                    </li>
                    <li>
                        Use structured meeting agendas, executive summaries, and
                        accessible formatting to enhance clarity and
                        inclusivity.
                    </li>
                    <li>
                        Disseminate practice via documentation and blog posts
                        (Teams FAQ, Postman guides, Blackboard API article,
                        Accessibility resources).
                    </li>
                    <li>
                        Maintain currency through internal CPD, LinkedIn
                        Learning courses, and curated tech/media sources,
                        sharing highlights with colleagues.
                    </li>
                </ul>
            </section>

            <section id="evidence">
                <h2>Evidence</h2>

                <h3>Collaboration and Communication</h3>
                <ul>
                    <li>
                        <a
                            href={pocCleaningScreenshot}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            PoC Data Cleaning Collaboration Screenshot (June
                            2025) (Image)
                        </a>{" "}
                        <em>
                            Screenshot from Microsoft Teams showing
                            collaborative communication with a Business School
                            colleague during the Proof of Concept data-cleaning
                            phase. Demonstrates how discrepancies were
                            discussed, clarified, and actioned in real time.
                            Shared with the colleague&apos;s consent;
                            anonymisation not required.
                        </em>
                    </li>
                    <li>
                        <a
                            href={lmsProjectGroupNotesScreenshot}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LMS Project Group Meeting Notes (October 2025)
                            (Screenshot)
                        </a>{" "}
                        <em>
                            Example of structured, agenda-linked notes produced
                            during DEPP meetings. Demonstrates learning from
                            colleagues&apos; communication practices and the
                            application of accessible formatting principles.
                            Shared with the consent of project leads;
                            anonymisation not required.
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
                            Presentation delivered to ICT colleagues outlining
                            milestones, testing processes, and feedback
                            mechanisms — demonstrating cross-departmental
                            communication and facilitation.
                        </em>
                    </li>
                    {/* <li>
                        TODO: Asana task records and meeting notes — anonymised
                        examples showing actions and ownership{" "}
                        <em>
                            Demonstrates structured project management and
                            transparent communication across hybrid teams.
                        </em>
                    </li> */}
                </ul>

                <h3>Documentation and Dissemination</h3>
                <ul>
                    <li>
                        <a
                            href={microsoftTeamsFaq}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Microsoft Teams FAQ (PDF)
                        </a>{" "}
                        <em>
                            Plain-English staff guide demonstrating inclusive
                            writing, accessible structure, and responsiveness to
                            user needs.
                        </em>
                    </li>
                    <li>
                        <a
                            href={usingPostmanWithApolloServer}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Using Postman with Apollo Server (PDF)
                        </a>{" "}
                        <em>
                            Technical guide for developers showing clear,
                            step-by-step communication of complex processes.
                        </em>
                    </li>
                    <li>
                        <a
                            href={blackboardSwaggerPostmanCollectionLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Using Blackboard&apos;s Swagger File to Create a
                            Postman Collection and Make an API Call (Link)
                        </a>{" "}
                        <em>
                            Blog post disseminating institutional testing
                            practice and reusable methods for evaluating APIs —
                            an example of outward-facing professional
                            communication.
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
                            Curated resource shared with DEPP colleagues,
                            supporting accessible design and awareness of
                            WCAG-aligned best practice.
                        </em>
                    </li>
                </ul>

                <h3>Professional Development</h3>
                <ul>
                    <li>
                        <a
                            href={understandingManualTestingCertificate}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Understanding Manual Testing (LinkedIn Learning,
                            2024) (Certificate)
                        </a>{" "}
                        <em>
                            Completed ahead of DEPP Proof of Concept testing to
                            strengthen communication between technical and
                            academic stakeholders. Demonstrates reflective
                            development and understanding of user behaviour
                            beyond automated testing.
                        </em>
                    </li>
                </ul>
            </section>

            <section id="further-reading">
                <h2>Further Reading</h2>

                <ul>
                    <li>
                        Forbes Coaches Council. (2024).{" "}
                        <em>
                            18 Expert Tips for Communicating with Hybrid and
                            Remote Teams
                        </em>
                        . Available at:{" "}
                        <a
                            href="https://www.forbes.com/councils/forbescoachescouncil/2024/06/27/18-expert-tips-for-communicating-with-hybrid-and-remote-teams/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.forbes.com/councils/forbescoachescouncil/2024/06/27/18-expert-tips-for-communicating-with-hybrid-and-remote-teams/
                        </a>
                    </li>
                    <li>
                        GOV.UK. (2021).{" "}
                        <em>
                            Inclusive communication: Plain English and
                            accessibility guidelines
                        </em>
                        . Available at:{" "}
                        <a
                            href="https://www.gov.uk/government/publications/inclusive-communication"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.gov.uk/government/publications/inclusive-communication
                        </a>
                    </li>
                    <li>
                        NHS England. (2023).{" "}
                        <em>
                            Accessible Information Standard: Principles for
                            inclusive communication
                        </em>
                        . Available at:{" "}
                        <a
                            href="https://www.england.nhs.uk/publication/accessible-information-standard/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.england.nhs.uk/publication/accessible-information-standard/
                        </a>
                    </li>
                    <li>
                        Nielsen Norman Group. (2024).{" "}
                        <em>Accessibility and Inclusivity: Study Guide</em>.
                        Available at:{" "}
                        <a
                            href="https://www.nngroup.com/articles/accessibility-inclusivity-study-guide/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.nngroup.com/articles/accessibility-inclusivity-study-guide/
                        </a>
                    </li>
                </ul>
            </section>
        </CmaltLayout>
    );
}
