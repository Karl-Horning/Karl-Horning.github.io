import CmaltLayout from "@/components/Layouts/CmaltLayout";
import { createMetadata } from "@/lib/metadata";
import { internalRoutes } from "@/lib/constants/ui";
import { meta } from "./meta";

const { CmaltRoute } = internalRoutes;

export const metadata = createMetadata({
    title: `${meta.title} | CMALT`,
    path: CmaltRoute,
});

export default function CmaltHomePage() {
    return (
        <CmaltLayout {...meta}>
            <section id="header-description">
                <h2>Welcome to My CMALT Portfolio</h2>

                <p>
                    This portfolio forms part of my submission for the
                    <strong>
                        {" "}
                        Certified Member of the Association for Learning
                        Technology (CMALT)
                    </strong>{" "}
                    accreditation. It brings together a selection of evidence
                    and reflections that illustrate how I apply learning
                    technology in my professional practice — from supporting
                    educators and students to developing digital tools and
                    evaluating emerging technologies.
                </p>

                <p>
                    Each section of this portfolio aligns with one of the CMALT
                    core principles, demonstrating{" "}
                    <em>collaborative practice</em>, <em>communication</em>,{" "}
                    <em>understanding of learning technologies</em>, and{" "}
                    <em>commitment to professional development</em>. You can
                    explore each section using the{" "}
                    <strong>navigation menu on the left</strong>.
                </p>
            </section>

            <section id="about-cmalt">
                <h2>About CMALT</h2>

                <p>
                    The CMALT framework is designed to recognise and reward the
                    professional experience of those who work with learning
                    technology. It provides a structured way to demonstrate
                    professional practice, values, and continuing development,
                    while reflecting on how technology enhances teaching,
                    learning, and assessment.
                </p>

                <p>
                    My submission draws on a range of professional experiences —
                    from teaching English and creating accessibility resources
                    to software development and institutional learning platform
                    evaluation. Each area is underpinned by a shared focus on
                    inclusion, usability, and evidence-informed practice.
                </p>
            </section>

            <section id="navigation-note">
                <h2>How to Navigate</h2>

                <p>
                    The portfolio can be navigated using the menu on the
                    left-hand side. Each section contains:
                </p>
                <ul>
                    <li>
                        A <strong>Description</strong> outlining the context and
                        evidence.
                    </li>
                    <li>
                        A <strong>Reflection</strong> discussing what I learned
                        and how my practice developed.
                    </li>
                </ul>

                <p>
                    Every subsection begins with a brief shared description to
                    help readers understand the overarching theme and how each
                    piece of evidence connects to the CMALT criteria.
                </p>

                <p>
                    I have included links to supporting documents, screenshots,
                    and videos throughout to illustrate my approach and provide
                    verifiable evidence of practice.
                </p>
            </section>
        </CmaltLayout>
    );
}
