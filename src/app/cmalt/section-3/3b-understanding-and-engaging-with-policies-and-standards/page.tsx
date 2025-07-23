import CMALTLayout from "@/components/Layouts/CMALTLayout";
import { cmaltEvidence } from "@/constants/cmalt";
import { internalRoutes } from "@/constants/links";
import { createMetadata } from "@/lib/metadata";

const { CmaltRoute } = internalRoutes;
const { certificates, screenshots } = cmaltEvidence;
const {
    gdprBeginnerCertificate,
    gdprCertificate,
    gdprElementaryCertificate,
    gdprIntroductionCertificate,
} = certificates;
const {
    dpaScreenshot,
    joiningTeamsMeetingScreenshot,
    microsoftTeamsFaqScreenshot,
} = screenshots;

export const metadata = createMetadata({
    title: "3b: Understanding and Engaging With Policies and Standards | CMALT",
    path: CmaltRoute,
});

export default function page() {
    return (
        <CMALTLayout
            title="3b: Understanding and Engaging With Policies and Standards"
            lastUpdated="2025-07-22"
        >
            <section id="cmalt-guidance">
                <h2>CMALT Guidance</h2>

                <p>
                    In this second section you can either explore a second area
                    of legislation (see above) or discuss how you engage with
                    one or more policy issues in your context. These might
                    include, for example:
                </p>

                <ul>
                    <li>
                        Relevant policies and strategies (national or
                        institutional)
                    </li>
                    <li>Technical standards</li>
                    <li>
                        Ethical frameworks or policies for the use of technology
                        in education
                    </li>
                    <li>Professional codes of practice</li>
                </ul>

                <p>
                    Evidence might include evidence of involvement in writing or
                    forming policies, or evidence of engagement with policies,
                    such as justifications for modifications to a course to
                    reflect new policies, a record of how technical standards
                    have been taken into account during system development, and
                    so on.
                </p>
            </section>

            <section id="description">
                <h2>Description</h2>

                <p>
                    Over the past four years, I have engaged consistently with
                    General Data Protection Regulation (GDPR) training and good
                    practice, especially as my roles have required handling
                    student and staff data in digital learning environments.
                </p>

                <p>
                    I have completed a range of GDPR and data protection
                    training courses:
                </p>

                <ul>
                    <li>
                        <em>GDPR: Beginner</em> (12 Oct 2021, Kaspersky)
                    </li>
                    <li>
                        <em>GDPR: Elementary</em> (20 Dec 2021, Kaspersky)
                    </li>
                    <li>
                        <em>General Data Protection Regulation (GDPR)</em> (2
                        May 2023, Learnlight)
                    </li>
                    <li>
                        <em>
                            An Introduction to the General Data Protection
                            Regulation (GDPR)
                        </em>{" "}
                        (15 March 2024, Kevin Mitnick Security Awareness
                        Training)
                    </li>
                    <li>
                        <em>Data Protection Awareness</em> (1 August 2024,
                        Imperial College London)
                    </li>
                </ul>

                <p>
                    In my work creating digital learning resources, I have
                    implemented GDPR-aligned practices, including:
                </p>

                <ul>
                    <li>
                        Using anonymised screenshots or dummy data when
                        producing guides or training materials
                    </li>
                    <li>
                        Ensuring personal data, such as student names or email
                        addresses, is not visible or shared, particularly when
                        supporting diverse, mixed cohorts
                    </li>
                    <li>
                        Being careful to avoid including personally identifiable
                        information when demonstrating tools, particularly video
                        or screen recordings
                    </li>
                </ul>

                <p>
                    In addition to removing personal data, I ensure that, where
                    possible, screenshots and recordings meet accessibility
                    expectations—such as clear contrast and readable text—in
                    line with WCAG 2.1.
                </p>
            </section>

            <section id="reflection">
                <h2>Reflection</h2>

                <p>
                    As with accessibility standards explored in Section 3a, I
                    see data protection not just as a compliance requirement,
                    but as a core element of ethical, inclusive learning design.
                    GDPR training has deepened my understanding of how easily
                    personal data can be exposed, particularly in visual media
                    like screenshots or screen recordings. This awareness has
                    shaped how I plan and deliver digital learning resources,
                    ensuring they are lawful, transparent, and
                    privacy-conscious.
                </p>

                <p>
                    My approach reflects <strong>Article 5(1)(c)</strong> of the
                    GDPR, which outlines the principle of{" "}
                    <strong>data minimisation</strong>:
                </p>

                <blockquote>
                    <p>
                        Personal data shall be adequate, relevant and limited to
                        what is necessary in relation to the purposes for which
                        they are processed (data minimisation).
                    </p>
                </blockquote>

                <p>
                    This principle is reinforced by{" "}
                    <a
                        href="https://www.imperial.ac.uk/admin-services/secretariat/policies-and-guidance/guidance/faqs/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Imperial College London&apos;s guidance
                    </a>
                    , which defines anonymisation as the removal of all
                    identifiers such that data can no longer be attributed to an
                    individual. It also highlights that pseudonymised data (such
                    as coded identifiers) may still be considered personal data
                    under the law.
                </p>
                <p>
                    As a result, I have embedded data protection principles into
                    my daily workflow. I default to using anonymised or dummy
                    data — even under tight deadlines — and check file names and
                    visible content before sharing learning materials. I
                    maintain a reference list of tools like{" "}
                    <a
                        href="https://mockaroo.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Mockaroo
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://www.npmjs.com/package/@faker-js/faker"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Faker
                    </a>{" "}
                    for generating safe-to-use content. When using live systems
                    for demonstrations, I set up test accounts to ensure no
                    personally identifiable information is shown.
                </p>
                <p>
                    These principles also guide my communication practices. For
                    example, I take care when emailing student groups to avoid
                    disclosing personal email addresses without consent.
                </p>
                <p>
                    Over time, I have developed a proactive and pragmatic
                    approach to safeguarding data in digital education. I
                    routinely anonymise content, review materials for privacy
                    risks, delete any student data that is no longer required,
                    and ensure that my communications reflect data protection
                    principles and are in line with data retention policies. I
                    have also shared these practices through informal guidance
                    and staff training.
                </p>
                <p>
                    Rather than seeing GDPR as a constraint, I view it as an
                    essential professional standard that supports ethical,
                    inclusive, and legally compliant digital learning
                    environments. My approach reflects both institutional
                    policies and broader sector expectations around the
                    responsible use of learner data, such as those outlined by
                    the{" "}
                    <strong>
                        Information Commissioner&apos;s Office (ICO)
                    </strong>
                    .
                </p>
            </section>

            <section id="summary">
                <h2>Summary</h2>
                <p>This section shows how I:</p>
                <ul>
                    <li>
                        Completed regular GDPR and data protection training to
                        stay up to date with institutional and legal
                        expectations
                    </li>
                    <li>
                        Embedded data protection principles into everyday
                        workflows for creating and sharing digital learning
                        resources
                    </li>
                    <li>
                        Used anonymised data, dummy accounts, and test
                        environments to avoid exposing personal or sensitive
                        information
                    </li>
                    <li>
                        Reviewed filenames and visual content to ensure
                        screenshots, recordings, and other resources are free of
                        personal data
                    </li>
                    <li>
                        Adopted cautious communication practices to prevent the
                        accidental sharing of student data
                    </li>
                    <li>
                        Provided informal guidance and support to colleagues on
                        privacy-conscious content creation and safe data
                        handling
                    </li>
                    <li>
                        Framed GDPR not as a constraint but as a professional
                        standard supporting ethical and inclusive learning
                    </li>
                </ul>
            </section>

            <section id="evidence">
                <h2>Evidence</h2>
                <ul>
                    <li>
                        <a
                            href={microsoftTeamsFaqScreenshot}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Anonymised student-facing guide (Microsoft Teams
                            FAQ, 2020) (Screenshot)
                        </a>{" "}
                        <em>
                            Demonstrates practical application of GDPR
                            principles by removing all identifiable data from
                            student-facing materials. Reflects institutional and
                            legal standards for anonymisation.
                        </em>
                    </li>
                    <li>
                        <a
                            href={joiningTeamsMeetingScreenshot}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Anonymised data in video tutorial (Joining a
                            Microsoft Teams meeting from the Session Details
                            Page, 2020) (Screenshot)
                        </a>{" "}
                        <em>
                            Shows implementation of data minimisation during
                            video creation. Engages with ethical and legal
                            responsibilities around learner privacy under GDPR.
                        </em>
                    </li>
                    <li>
                        <a
                            href={gdprBeginnerCertificate}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <em>GDPR: Beginner</em> (Kaspersky, 2021)
                            (Certificate)
                        </a>{" "}
                        <em>
                            Evidence of foundational training in data
                            protection, demonstrating active engagement with
                            professional standards and institutional policy
                            compliance.
                        </em>
                    </li>
                    <li>
                        <a
                            href={gdprElementaryCertificate}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <em>GDPR: Elementary</em> (Kaspersky, 2021)
                            (Certificate)
                        </a>{" "}
                        <em>
                            Further development of GDPR knowledge, supporting
                            ethical handling of personal data in line with
                            national legislation and sector guidance.
                        </em>
                    </li>
                    <li>
                        <a
                            href={gdprCertificate}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <em>General Data Protection Regulation (GDPR)</em>{" "}
                            (Learnlight, 2023) (Certificate)
                        </a>{" "}
                        <em>
                            Illustrates continued commitment to staying updated
                            with GDPR requirements and understanding how they
                            apply within educational settings.
                        </em>
                    </li>
                    <li>
                        <a
                            href={gdprIntroductionCertificate}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <em>
                                An Introduction to the General Data Protection
                                Regulation (GDPR)
                            </em>{" "}
                            (Kevin Mitnick Security Awareness Training, 2024)
                            (Certificate)
                        </a>{" "}
                        <em>
                            Supports understanding of evolving GDPR
                            interpretations and application of data protection
                            principles in digital learning environments.
                        </em>
                    </li>
                    <li>
                        <a
                            href={dpaScreenshot}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <em>
                                Data Protection Awareness course (Imperial
                                College London, 2024)
                            </em>{" "}
                            (Screenshot)
                        </a>{" "}
                        <em>
                            Institution-specific training reflecting engagement
                            with internal data protection policies and alignment
                            with Imperial&apos;s expectations for lawful,
                            ethical handling of data.
                        </em>
                    </li>
                </ul>
            </section>

            <section id="further-reading">
                <h2>Further Reading</h2>
                <ul>
                    <li>
                        Imperial College London{" "}
                        <em>Data protection guidance</em>. Available at:{" "}
                        <a
                            href="https://www.imperial.ac.uk/admin-services/secretariat/policies-and-guidance/guidance/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.imperial.ac.uk/admin-services/secretariat/policies-and-guidance/guidance/
                        </a>
                    </li>
                    <li>
                        Information Commissioner&apos;s Office{" "}
                        <em>The UK GDPR</em>. Available at:{" "}
                        <a
                            href="https://ico.org.uk/for-organisations/data-protection-and-the-eu/data-protection-and-the-eu-in-detail/the-uk-gdpr/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://ico.org.uk/for-organisations/data-protection-and-the-eu/data-protection-and-the-eu-in-detail/the-uk-gdpr/
                        </a>
                    </li>
                    <li>
                        Information Commissioner&apos;s Office{" "}
                        <em>UK GDPR guidance and resources</em>. Available at:{" "}
                        <a
                            href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/
                        </a>
                    </li>
                </ul>
            </section>
        </CMALTLayout>
    );
}
