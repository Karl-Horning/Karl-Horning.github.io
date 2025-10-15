import ProjectLayout from "@/components/Layouts/ProjectLayout";
import FigureWithCaption from "@/components/ui/FigureWithCaption";
import Link from "next/link";
import { meta } from "./meta";
import { jsdocExample } from "./examples";
import { externalLinks, icons, internalRoutes } from "@/lib/constants/ui";
import LighthouseGrid from "@/components/ui/LighthouseGrid";
import { createMetadata } from "@/lib/metadata";

const { GitHubLink } = externalLinks;
const { CmaltRoute, ProjectsRoute } = internalRoutes;
const { CertificateIcon, ContactIcon, HomeIcon, InfoIcon, ProjectIcon } = icons;

export const metadata = createMetadata({
    title: `${meta.title} | Projects`,
    path: `${ProjectsRoute}/${meta.slug}`,
});

export default function Page() {
    return (
        <ProjectLayout {...meta}>
            <section id="overview">
                <h2>Overview</h2>
                <p>
                    <strong>KarlHorning.dev</strong> is my centralised developer
                    portfolio — a single, accessible Next.js build that replaces
                    the need to maintain separate stacks. It brings together my
                    projects, writing, and CMALT portfolio in one modular
                    codebase, built with the same care I apply in a production
                    environment.
                </p>
                <p>
                    It&apos;s a custom-built portfolio and blog designed to
                    showcase my work as a{" "}
                    <strong>Full-Stack JavaScript/TypeScript Developer</strong>{" "}
                    and <strong>Learning Technologist</strong>. The site
                    prioritises <strong>accessibility</strong>,{" "}
                    <strong>performance</strong>, and{" "}
                    <strong>maintainability</strong>, supported by consistent
                    documentation and strong TypeScript typing.
                </p>
                <p>
                    I rebuilt the site while preparing my{" "}
                    <strong>CMALT portfolio</strong>. I wanted something easier
                    to read, more maintainable, and reflective of both my
                    technical and educational background. My previous site
                    lacked a dedicated Projects section, and this rebuild gave
                    me the opportunity to include one — alongside a full blog
                    and case study framework.
                </p>
            </section>

            <section id="tech-stack">
                <h2>Tech Stack</h2>
                <ul>
                    <li>
                        <strong>Framework:</strong> Next.js 14 (App Router)
                    </li>
                    <li>
                        <strong>Language:</strong> TypeScript (strict mode)
                    </li>
                    <li>
                        <strong>UI:</strong> React 18 + Tailwind CSS
                    </li>
                    <li>
                        <strong>Tooling:</strong> ESLint + Prettier (Tailwind
                        plugin)
                    </li>
                    <li>
                        <strong>Icons:</strong> React Icons
                    </li>
                    <li>
                        <strong>Image Optimisation:</strong> Sharp
                    </li>
                    <li>
                        <strong>Deployment:</strong> GitHub Pages (static
                        export)
                    </li>
                    <li>
                        <strong>Accessibility:</strong> WCAG-aware design,
                        semantic HTML, ARIA-friendly components
                    </li>
                </ul>

                <p>
                    CI/CD: GitHub Actions runs type checks, linting, build, and{" "}
                    <code>next export</code> on push to
                    <code> main</code>, then deploys automatically to GitHub
                    Pages. Workflows include a composite Node setup/cache action
                    and a Pages deployment pipeline.
                </p>
            </section>

            <section id="skills">
                <h2>Key Skills Demonstrated</h2>
                <ul>
                    <li>
                        <strong>Front-end architecture:</strong> Next.js 14,
                        React 18, TypeScript
                    </li>
                    <li>
                        <strong>Styling and accessibility:</strong> Tailwind
                        CSS, WCAG 2.2 AA, semantic HTML, ARIA
                    </li>
                    <li>
                        <strong>Performance optimisation:</strong> Sharp, static
                        export, Lighthouse and axe testing
                    </li>
                    <li>
                        <strong>Documentation and consistency:</strong>{" "}
                        TypeScript + JSDoc, predictable structure
                    </li>
                    <li>
                        <strong>Testing and maintainability:</strong> ESLint,
                        Prettier, plans to add Jest tests
                    </li>
                    <li>
                        <strong>Deployment and scalability:</strong> GitHub
                        Pages static deployment, JSON-based data
                    </li>
                </ul>
            </section>

            <section id="design-approach">
                <h2>Design Approach</h2>
                <p>
                    The design focuses on{" "}
                    <strong>clarity, accessibility, and tone</strong> rather
                    than visual noise. Typography and spacing follow a{" "}
                    <strong>grid-based rhythm</strong>, with a restrained colour
                    palette supporting both light and dark modes.
                </p>
                <p>
                    Animations are minimal — for example, the logo includes a
                    subtle <strong>CSS glitch hover effect</strong> to add
                    personality without distraction. All layouts are{" "}
                    <strong>mobile-first</strong> and responsive, optimised for
                    readability across devices.
                </p>
            </section>

            <section id="page-structure">
                <h2>Page Structure</h2>
                <p>
                    The site is divided into structured, component-driven
                    sections for easy maintenance and future scalability.
                </p>

                <h3 className="flex items-center gap-2">
                    <span className="rounded-md bg-primary/10 p-2 text-primary dark:bg-primary dark:text-white">
                        <HomeIcon className="text-sm" />
                    </span>
                    Home
                </h3>
                <p>
                    A focused introduction with clear navigation and recent
                    projects.
                </p>

                <h3 className="flex items-center gap-2">
                    <span className="rounded-md bg-primary/10 p-2 text-primary dark:bg-primary dark:text-white">
                        <InfoIcon className="text-sm" />
                    </span>
                    About
                </h3>
                <ul>
                    <li>
                        <strong>Values Grid:</strong> Highlights inclusive
                        design, calm collaboration, and developer experience.
                    </li>
                    <li>
                        <strong>Technology Stack:</strong> Displays key
                        technologies with consistent iconography.
                    </li>
                    <li>
                        <strong>Certifications:</strong> CELTA, PTLLS, Apple
                        Teacher, Scrum Fundamentals.
                    </li>
                    <li>
                        <strong>Experience Timeline:</strong> Roles at Imperial
                        College London and freelance work.
                    </li>
                </ul>

                <h3 className="flex items-center gap-2">
                    <span className="rounded-md bg-primary/10 p-2 text-primary dark:bg-primary dark:text-white">
                        <ProjectIcon className="text-sm" />
                    </span>
                    Projects & Case Studies
                </h3>
                <p>
                    Showcases case studies with technologies and links. Each
                    card is dynamically generated from JSON typed with{" "}
                    <code>ProjectMeta</code>.
                </p>
                <p>
                    For example, see my detailed backend case study:{" "}
                    <Link href="/projects/learnlight-platform">
                        Learnlight Platform & Mobile Apps
                    </Link>
                    .
                </p>

                <h3 className="flex items-center gap-2">
                    <span className="rounded-md bg-primary/10 p-2 text-primary dark:bg-primary dark:text-white">
                        <CertificateIcon className="text-sm" />
                    </span>
                    CMALT Portfolio
                </h3>
                <p>
                    A structured portfolio following the CMALT framework,
                    linking to evidence documents, media, and reflections.
                </p>

                <h3 className="flex items-center gap-2">
                    <span className="rounded-md bg-primary/10 p-2 text-primary dark:bg-primary dark:text-white">
                        <ContactIcon className="text-sm" />
                    </span>
                    Contact
                </h3>
                <p>
                    A minimal, accessible contact page with form, social links,
                    and JSON-LD structured data for SEO.
                </p>

                <p>
                    Accessibility affordances are baked into the layout: a
                    visible &ldquo;Skip to content&rdquo; link, and the main
                    content wrapped in{" "}
                    <code>&lt;main id=&ldquo;main&rdquo;&gt;</code> for keyboard
                    and assistive tech users.
                </p>
            </section>

            <section id="architecture">
                <h2>Architecture and Data Model</h2>
                <p>
                    The codebase follows a{" "}
                    <strong>clear separation of concerns</strong> between
                    content, types, and logic.
                </p>
                <ul>
                    <li>
                        Constants under <code>lib/constants/</code> (assets,
                        links, SEO, icons)
                    </li>
                    <li>
                        Shared types in <code>src/types/ui.ts</code>
                    </li>
                    <li>
                        Concise JSDoc annotations ensure every dataset is
                        self-documented.
                    </li>
                </ul>
                <p>
                    This structure makes the site predictable, modular, and easy
                    to extend.
                </p>
            </section>

            <section id="content-architecture">
                <h2>Content Architecture</h2>
                <p>
                    A <strong>content-first</strong> approach stores data in
                    JSON and TypeScript constants, making it portable and
                    predictable.
                </p>
                <ul>
                    <li>
                        Blog posts in <code>public/data/posts.json</code> typed
                        with <code>BlogPost</code>.
                    </li>
                    <li>Dynamic tag and search generation.</li>
                    <li>Projects follow the same structure for reusability.</li>
                </ul>
                <p>
                    By centralising content, I maintain static generation for
                    GitHub Pages and eliminate the need for a separate Eleventy
                    site.
                </p>
            </section>

            <section id="migrating">
                <h2>Migrating from Eleventy to Next.js</h2>
                <p>
                    I migrated from <strong>Eleventy (11ty)</strong> to{" "}
                    <strong>Next.js</strong> to simplify the stack and unify my
                    blog and portfolio under React components. The site remains
                    fully static thanks to a JSON-based data layer and{" "}
                    <code>next export</code>.
                </p>
            </section>

            <section id="documentation">
                <h2>Documentation and Consistency</h2>
                <p>
                    Each file includes JSDoc annotations describing its purpose
                    and data structure, complementing TypeScript&apos;s static
                    analysis.
                </p>
                <pre>{jsdocExample}</pre>
            </section>

            <section id="accessibility">
                <h2>Accessibility and Performance</h2>

                <p>
                    Accessibility is monitored throughout development using
                    Lighthouse, WAVE, and Firefox&apos;s built-in accessibility
                    tools. The current localhost score is 96, and I&apos;ll
                    publish a full Lighthouse and accessibility audit once the
                    live build is deployed.
                </p>

                <ul>
                    <li>Keyboard-friendly navigation</li>
                    <li>Proper alt text and ARIA attributes</li>
                    <li>High contrast in both light and dark modes</li>
                    <li>Static generation for speed and SEO</li>
                    <li>Optimised media via Next/Image and Sharp</li>
                </ul>

                <h3>Lighthouse Performance (Localhost build): Mobile</h3>

                <LighthouseGrid
                    data={{
                        Performance: 84,
                        Accessibility: 96,
                        "Best Practices": 100,
                        SEO: 100,
                    }}
                />

                <p>
                    <strong>Note:</strong> These are localhost development
                    figures. Most issues relate to caching or localhost
                    conditions. The production build is expected to achieve 95+
                    across all categories. I&apos;ll publish production
                    Lighthouse and Core Web Vitals after deployment.
                </p>

                <h3>Lighthouse Performance (Localhost build): Desktop</h3>

                <FigureWithCaption
                    src="/img/projects/lighthouse-performance-desktop-2025-10.webp"
                    alt=""
                    caption="Lighthouse report (desktop) run locally on 15 Oct 2025. Scores reflect localhost/dev caching; production is expected to improve."
                />

                <LighthouseGrid
                    data={{
                        Performance: 99,
                        Accessibility: 100,
                        "Best Practices": 100,
                        SEO: 100,
                    }}
                />
            </section>

            <section id="privacy">
                <h2>Privacy, Security & Performance</h2>
                <p>
                    The site is statically generated for reliability and
                    security, with no user tracking or unnecessary third-party
                    scripts. Assets are optimised using Sharp, and
                    privacy-friendly analytics will be added to measure
                    engagement responsibly.
                </p>
            </section>

            <section id="scalability">
                <h2>Scalability and Future Development</h2>
                <p>
                    The site&apos;s modular structure makes it easy to extend
                    with new projects or features. Upcoming work includes adding
                    Jest tests for interactive elements and exploring
                    lightweight analytics for performance insights.
                </p>
                <p>
                    Development currently happens in{" "}
                    <code>refresh/2025-design</code>, with feature and bug
                    branches merged in before the final release to{" "}
                    <code>main</code>.
                </p>
            </section>

            <section id="outcome">
                <h2>Outcome</h2>
                <p>
                    The finished site is a fast, accessible, and maintainable
                    portfolio that represents both my technical and educational
                    background. It consolidates my online presence, streamlines
                    maintenance, and provides a flexible structure for
                    showcasing projects.
                </p>
                <p>
                    It demonstrates proficiency in modern front-end development,
                    an understanding of accessibility and inclusive design, and
                    a commitment to clean, maintainable code. Ultimately, it
                    reflects my core values: clarity, maintainability, and
                    accessibility.
                </p>
                <p>
                    Consolidating 11ty into a single Next.js codebase reduces
                    maintenance by roughly <strong>2-3 hours per month</strong>,
                    while keeping accessibility work and documentation in one
                    place.
                </p>
            </section>

            <section id="why-it-matters">
                <h2>Why It Matters</h2>
                <p>
                    I approach my personal site as I do a client project — with
                    attention to accessibility, structure, and maintainability.
                    Building it this way keeps my skills sharp and demonstrates
                    the standards I apply in professional environments, without
                    unnecessary complexity. It also serves as a living example
                    of my front-end principles in practice.
                </p>
            </section>

            <section id="further-reading">
                <h2>Further Reading</h2>
                <ul>
                    <li>
                        <a
                            href={GitHubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub Repository
                        </a>
                    </li>
                    <li>
                        <Link href={CmaltRoute}>CMALT Portfolio</Link>
                    </li>
                </ul>
            </section>
        </ProjectLayout>
    );
}
