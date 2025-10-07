import CMALTLayout from "@/components/Layouts/CMALTLayout";
import { internalRoutes } from "@/lib/constants/ui";
import { createMetadata } from "@/lib/metadata";

const { CmaltRoute } = internalRoutes;

export const metadata = createMetadata({
    title: "4a: Communication and Working With Others | CMALT",
    path: CmaltRoute,
});

export default function page() {
    return (
        <CMALTLayout
            title="4a: Communication and Working With Others"
            lastUpdated="2025-07-24"
        >
            <section id="cmalt-guidance">
                <h2>CMALT Guidance</h2>

                <p>
                    Candidates should demonstrate their knowledge and skills in
                    communication through working with others. Statements could
                    describe the way in which your work involves collaboration,
                    for example through participation in a team or acting as an
                    interface to other groups. Also discuss how you disseminate
                    your practice, for example through presentation or
                    publications.
                </p>

                <p>
                    This section can help you directly address some of the CMALT
                    core principles: you might discuss how you communicate to
                    keep up to date, how you learn from peers and colleagues, or
                    how you disseminate your practice, for example through
                    presentation, publications, or other forms of communication.
                    You may also choose to discuss how you select appropriate
                    forms of communication and utilise different technologies.
                </p>

                <p>
                    Relevant evidence might include reflection on collaborations
                    with others and testimonials from colleagues, or evidence
                    showing your activity within a team process, how you have
                    brokered support for a particular initiative (for example
                    from a technical or legal support service), or how you have
                    worked with others to solve problems. Where your evidence
                    involved collaboration, please acknowledge the contribution
                    of others; and remember that it is your responsibility to
                    ensure that evidence is appropriately anonymised and/or that
                    appropriate permissions have been obtained.
                </p>
            </section>

            <section id="description">
                <h2>Description</h2>

                <p>
                    Communication and collaboration are central to my work as a
                    learning technologist. I regularly serve as a liaison
                    between technical, academic, and administrative teams by
                    translating needs and feedback across different roles. This
                    includes translating technical detail into practical
                    implications for pedagogy and accessibility, and vice versa.
                </p>

                <p>
                    During the evaluation of Blackboard Ultra, Brightspace, and
                    Canvas, I shared my{" "}
                    <em>
                        Web Accessibility Resources and Tools: Guidelines,
                        Checklists, and Testing Solutions
                    </em>{" "}
                    PDF with colleagues across faculties. Although developed
                    over several years, I recognised its value in helping staff
                    test accessibility features more confidently and
                    consistently during the trial phase. This helped position
                    accessibility as a shared responsibility and gave staff
                    practical tools to support inclusive evaluation.
                </p>

                <p>
                    I also worked closely with colleagues in the Business School
                    to clean and verify staff evaluation data during
                    proof-of-concept testing. This process required sustained
                    communication to align on data formats and ensure accuracy.
                    The collaboration not only resolved immediate issues but
                    also strengthened cross-team relationships and clarified
                    expectations for future processes.
                </p>

                <p>
                    Throughout these projects, I actively contributed to regular
                    meetings, particularly regarding the accessibility
                    implications of platform design and the inclusive use of
                    learning technologies. I frequently highlighted potential
                    risks and shared examples of good practice, including screen
                    reader support, keyboard navigation, and inclusive
                    assessment design.
                </p>
            </section>

            <section id="reflection">
                <h2>Reflection</h2>

                <p>
                    Sharing the accessibility PDF during the LMS evaluation
                    highlighted the value of asynchronous resources — even those
                    developed incrementally — in supporting others. Feedback
                    from colleagues showed they appreciated having clear,
                    actionable guidance when engaging with unfamiliar platforms.
                </p>

                <p>
                    This experience reinforced something I&apos;ve learned
                    throughout my career: effective communication is not just
                    about explaining, but about enabling. Whether walking
                    someone through a tool or writing documentation, I aim to
                    ensure resources are accessible to colleagues with varying
                    levels of confidence and technical expertise.
                </p>

                <p>
                    Working with staff from different faculties has deepened my
                    understanding of how to tailor communication. Different
                    disciplines bring different assumptions, constraints, and
                    terminologies — and I&apos;ve learned to adapt how I frame
                    solutions depending on the audience. In STEM contexts, I may
                    focus on testing tools and code snippets; in languages or
                    humanities, I emphasise structure, design, and student
                    experience.
                </p>

                <p>
                    These collaborations have shown me that the most lasting
                    impact often comes not from a single training session or
                    document, but from fostering relationships, maintaining open
                    communication, and making inclusive practice easier to
                    adopt.
                </p>
            </section>

            <section id="summary">
                <h2>Summary</h2>

                <p>This section demonstrates how I:</p>

                <ul>
                    <li>
                        Collaborated across faculties to support LMS evaluation
                        and platform transition
                    </li>
                    <li>
                        Shared accessibility testing resources to promote
                        inclusive, cross-institutional practice
                    </li>
                    <li>
                        Worked with colleagues to resolve data issues and
                        improve system accuracy
                    </li>
                    <li>
                        Advocated for accessibility and inclusion during
                        multi-stakeholder discussions
                    </li>
                    <li>
                        Used multiple forms of communication — including
                        meetings, shared documents, and asynchronous
                        walkthroughs — to support collaboration and knowledge
                        sharing
                    </li>
                </ul>
            </section>

            <section id="evidence">
                <h2>Evidence</h2>

                <ul>
                    <li>TODO</li>
                </ul>
            </section>

            <section id="further-reading">
                <h2>Further Reading</h2>

                <ul>
                    <li>TODO</li>
                </ul>
            </section>
        </CMALTLayout>
    );
}
