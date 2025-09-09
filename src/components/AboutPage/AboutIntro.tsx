import { internalRoutes } from "@/constants/links";
import ButtonLink from "@/components/Buttons/ButtonLink";

const { ContactRoute } = internalRoutes;

/**
 * A presentational component that renders the introductory "About Me" section.
 *
 * This component includes a heading, multiple paragraphs describing
 * the author's background, interests, and current projects,
 * and a call-to-action button linking to the contact page.
 *
 * It uses semantic HTML and ARIA for accessibility and applies
 * Tailwind CSS classes for styling and interaction effects.
 *
 * This component is static and does not accept any props.
 *
 * @component
 */
export default function AboutIntro() {
    return (
        <div data-aos="zoom-in" data-aos-delay="200" className="lg:col-span-2">
            <section
                aria-labelledby="about-heading"
                className="h-full transform rounded-lg bg-surface p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
                <h1
                    id="about-heading"
                    className="mb-6 text-center text-5xl text-primary"
                >
                    About Me
                </h1>
                <p className="mb-4">
                    Hi, I&apos;m Karl, a developer and learning technologist
                    from the UK.
                </p>
                <p className="mb-4">
                    I love solving real-world problems through code, especially
                    when it involves working with APIs, data, or accessible web
                    interfaces. I&apos;m also excited about making learning
                    experiences more inclusive and effective, whether that means
                    selecting the right Learning Management System (LMS) or
                    enhancing the introduction of digital tools to staff and
                    students.
                </p>
                <p className="mb-4">
                    My work spans both education and tech. I&apos;ve built
                    full-stack projects using JavaScript, Node.js, Next.js, and
                    PostgreSQL, and I&apos;ve helped universities make strategic
                    decisions around learning technology. I enjoy switching
                    between writing code and designing practical solutions that
                    support people.
                </p>
                <p className="mb-4">
                    Right now, I&apos;m working on a few side projects,
                    including an image optimiser built with Electron and Vite,
                    and a Markdown-based writing tracker inspired by the
                    &quot;200 words a day&quot; method. I&apos;m always learning
                    and always building.
                </p>
                <p className="mb-6">
                    When I&apos;m not coding, I&apos;m writing, running, or
                    tinkering with some new open-source tools.
                </p>

                <div className="flex justify-center">
                    <ButtonLink text="Get in Touch" href={ContactRoute} />
                </div>
            </section>
        </div>
    );
}
