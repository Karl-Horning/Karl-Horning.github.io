import { createMetadata } from "@/lib/metadata";
import { icons, internalRoutes } from "@/lib/constants/ui";
import { meta } from "./meta";
import ContactCta from "@/components/ui/ContactCta";
import PrevNextButtons from "@/components/ui/PrevNextButtons";
import CmaltSidebar from "@/components/cmalt/CmaltSidebar.server";
import { getPrevNextCmalt } from "@/lib/helpers/getPrevNext";
import PageIntroSplit from "@/components/ui/PageIntroSplit";
import { jsonLdCMALT } from "@/lib/constants/jsonLd";

const { CmaltRoute } = internalRoutes;
const { CertificateIcon, InfoIcon, ReadMoreIcon } = icons;

/**
 * Static metadata for the CMALT home page.
 *
 * Built using {@link createMetadata} and includes structured data
 * from {@link jsonLdCMALT} for improved SEO and discoverability.
 */
export const metadata = createMetadata({
    title: `${meta.title} | CMALT`,
    path: CmaltRoute,
    jsonLd: jsonLdCMALT,
});

/**
 * Renders the **CMALT Portfolio Home Page**.
 *
 * This page introduces the user's CMALT accreditation portfolio,
 * explaining its structure, purpose, and navigation. It serves as
 * the main landing page for the CMALT section of the site.
 *
 * ### Layout structure
 * - {@link PageIntroSplit} — Hero section with title, description, and CTAs.
 * - {@link CmaltSidebar} — Persistent sidebar for section navigation.
 * - `<main>` — Core content explaining the portfolio and framework.
 * - {@link PrevNextButtons} — Pagination links for previous/next sections.
 * - {@link ContactCta} — Footer call-to-action inviting further contact.
 *
 * ### Behaviour
 * - Fetches adjacent section data via {@link getPrevNextCmalt} for
 *   contextual pagination between CMALT pages.
 * - Uses locally sourced metadata from the `meta` module for title and slug.
 * - The primary CTA links to the next CMALT page, falling back to the index route.
 * - The sidebar remains sticky on large screens for easy navigation.
 *
 * @remarks
 * This page contains the introductory overview and explanation of the
 * CMALT framework. It is designed for clarity and accessibility rather
 * than dynamic interactivity.
 *
 * @async
 * @returns The statically rendered CMALT home page layout.
 *
 * @example
 * ```tsx
 * export default async function CmaltHomePage() {
 *   const { previous, next } = await getPrevNextCmalt(meta.slug);
 *   return (
 *     <>
 *       <PageIntroSplit
 *         title="CMALT Portfolio"
 *         tagline="Accreditation Portfolio"
 *         heroIcon={<CertificateIcon />}
 *       />
 *       <CmaltSidebar />
 *       <main>...</main>
 *       <PrevNextButtons previous={previous} next={next} />
 *       <ContactCta />
 *     </>
 *   );
 * }
 * ```
 */
export default async function CmaltHomePage() {
    // Retrieve previous and next CMALT pages for pagination controls
    const { previous, next } = await getPrevNextCmalt(meta.slug);
    const nextHref = next?.href ?? CmaltRoute;

    return (
        <>
            <PageIntroSplit
                title="CMALT Portfolio"
                leadParagraph="Reflecting on my professional practice and digital learning."
                tagline="Accreditation Portfolio"
                heroIcon={<CertificateIcon />}
                primaryCta={{
                    href: nextHref,
                    text: "View CMALT portfolio",
                    icon: <ReadMoreIcon />,
                }}
                secondaryCta={{
                    href: `${CmaltRoute}#about-cmalt`,
                    text: "What is CMALT?",
                    icon: <InfoIcon />,
                }}
            />

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pt-20 md:grid-cols-[16rem_1fr]">
                <CmaltSidebar />

                <div className="max-w-3xl">
                    <main
                        id="main"
                        className="prose prose-slate dark:prose-invert max-w-none"
                    >
                        <section id="header-description">
                            <h2>Welcome to My CMALT Portfolio</h2>
                            <p>
                                This portfolio forms part of my submission for
                                the
                                <strong>
                                    {" "}
                                    Certified Member of the Association for
                                    Learning Technology (CMALT)
                                </strong>{" "}
                                accreditation. It brings together a selection of
                                evidence and reflections that illustrate how I
                                apply learning technology in my professional
                                practice — from supporting educators and
                                students to developing digital tools and
                                evaluating emerging technologies.
                            </p>

                            <p>
                                Each section of this portfolio aligns with one
                                of the CMALT core principles, demonstrating{" "}
                                <em>collaborative practice</em>,{" "}
                                <em>communication</em>,{" "}
                                <em>understanding of learning technologies</em>,
                                and{" "}
                                <em>commitment to professional development</em>.
                                You can explore each section using the{" "}
                                <strong>navigation menu on the left</strong>.
                            </p>
                        </section>

                        <section id="about-cmalt">
                            <h2>About CMALT</h2>
                            <p>
                                The CMALT framework is designed to recognise and
                                reward the professional experience of those who
                                work with learning technology. It provides a
                                structured way to demonstrate professional
                                practice, values, and continuing development,
                                while reflecting on how technology enhances
                                teaching, learning, and assessment.
                            </p>

                            <p>
                                My submission draws on a range of professional
                                experiences — from teaching English and creating
                                accessibility resources to software development
                                and institutional learning platform evaluation.
                                Each area is underpinned by a shared focus on
                                inclusion, usability, and evidence-informed
                                practice.
                            </p>
                        </section>

                        <section id="navigation-note">
                            <h2>How to Navigate</h2>
                            <p>
                                The portfolio can be navigated using the menu on
                                the left-hand side. Each section contains:
                            </p>
                            <ul>
                                <li>
                                    A <strong>Description</strong> outlining the
                                    context and evidence.
                                </li>
                                <li>
                                    A <strong>Reflection</strong> discussing
                                    what I learned and how my practice
                                    developed.
                                </li>
                            </ul>

                            <p>
                                Every subsection begins with a brief shared
                                description to help readers understand the
                                overarching theme and how each piece of evidence
                                connects to the CMALT criteria.
                            </p>

                            <p>
                                I have included links to supporting documents,
                                screenshots, and videos throughout to illustrate
                                my approach and provide verifiable evidence of
                                practice.
                            </p>
                        </section>
                    </main>

                    {/* Context-aware pagination between CMALT pages */}
                    {(previous || next) && (
                        <PrevNextButtons
                            contextTitle="CMALT Pagination"
                            itemType="page"
                            previous={previous ?? undefined}
                            next={next ?? undefined}
                        />
                    )}
                </div>
            </div>

            {/* Footer CTA for contact and clarifications */}
            <ContactCta
                title="Questions about this section?"
                description="Contact me for clarifications or further evidence."
            />
        </>
    );
}
