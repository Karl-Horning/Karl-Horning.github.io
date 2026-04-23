import styles from "@/components/Projects.module.css";

/**
 * Selected work section listing notable projects.
 *
 * Renders a numbered list of projects, each showing a title, description,
 * technology tags, and a link to the full project page. Linked from the
 * main navigation via the `#projects` anchor and labelled for screen
 * readers via `aria-labelledby`.
 *
 * @return The projects section element.
 */
export default function Projects() {
    return (
        <section
            className="section"
            id="projects"
            aria-labelledby="proj-heading"
        >
            <div className="wrap">
                <div className="section__meta">
                    <span className="eyebrow" aria-hidden="true">
                        Selected work
                    </span>
                    <h2 className="section__title" id="proj-heading">
                        Projects
                    </h2>
                </div>

                <ul className={styles.proj_list} role="list">
                    <li className={styles.proj}>
                        <span className={styles.proj__num} aria-hidden="true">
                            01
                        </span>
                        <div>
                            <h3 className={styles.proj__title}>
                                Learnlight Platform
                            </h3>
                            <p className={styles.proj__desc}>
                                Built and optimised the GraphQL API for a global
                                language-learning platform — 700,000+ registered
                                learners across 180 countries. Resolved N+1
                                query issues, cutting duplicate database calls
                                from 36 to 1 per request: a 70% performance
                                gain.
                            </p>
                            <ul
                                className={styles.proj__tags}
                                aria-label="Technologies used"
                            >
                                <li className={styles.tag}>Node.js</li>
                                <li className={styles.tag}>GraphQL</li>
                                <li className={styles.tag}>PostgreSQL</li>
                                <li className={styles.tag}>MongoDB</li>
                                <li className={styles.tag}>AWS</li>
                            </ul>
                        </div>
                        <a
                            href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/projects/learnlight-platform`}
                            className={styles.proj__cta}
                            aria-label="View Learnlight project"
                        >
                            View ↗
                        </a>
                    </li>

                    <li className={styles.proj}>
                        <span className={styles.proj__num} aria-hidden="true">
                            02
                        </span>
                        <div>
                            <h3 className={styles.proj__title}>
                                karlhorning.dev
                            </h3>
                            <p className={styles.proj__desc}>
                                This portfolio. A static Next.js site with
                                Playwright + axe-core accessibility testing
                                built in and perfect Lighthouse scores across
                                mobile and desktop.
                            </p>
                            <ul
                                className={styles.proj__tags}
                                aria-label="Technologies used"
                            >
                                <li className={styles.tag}>Next.js</li>
                                <li className={styles.tag}>TypeScript</li>
                                <li className={styles.tag}>Tailwind CSS</li>
                                <li className={styles.tag}>Playwright</li>
                            </ul>
                        </div>
                        <a
                            href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/projects/karlhorning-dev`}
                            className={styles.proj__cta}
                            aria-label="View portfolio project"
                        >
                            View ↗
                        </a>
                    </li>

                    <li className={styles.proj}>
                        <span className={styles.proj__num} aria-hidden="true">
                            03
                        </span>
                        <div>
                            <h3 className={styles.proj__title}>
                                Transform Text
                            </h3>
                            <p className={styles.proj__desc}>
                                Browser extension for quick text transformation.
                                Right-click any selected text for 13 conversions
                                — case changes, coding conventions, title
                                formats. Available on Firefox, Chrome, and Edge.
                            </p>
                            <ul
                                className={styles.proj__tags}
                                aria-label="Technologies used"
                            >
                                <li className={styles.tag}>JavaScript</li>
                                <li className={styles.tag}>Firefox</li>
                                <li className={styles.tag}>Chrome</li>
                                <li className={styles.tag}>Edge</li>
                            </ul>
                        </div>
                        <a
                            href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/projects/transform-text`}
                            className={styles.proj__cta}
                            aria-label="View Transform Text project"
                        >
                            View ↗
                        </a>
                    </li>

                    <li className={styles.proj}>
                        <span className={styles.proj__num} aria-hidden="true">
                            04
                        </span>
                        <div>
                            <h3 className={styles.proj__title}>
                                Canvas Content Styling Guide
                            </h3>
                            <p className={styles.proj__desc}>
                                A practical reference for styling Canvas LMS
                                course pages with HTML and CSS — written for
                                educators with no coding experience. All
                                examples are copy-paste ready.
                            </p>
                            <ul
                                className={styles.proj__tags}
                                aria-label="Technologies used"
                            >
                                <li className={styles.tag}>HTML</li>
                                <li className={styles.tag}>CSS</li>
                                <li className={styles.tag}>Education</li>
                                <li className={styles.tag}>Accessibility</li>
                            </ul>
                        </div>
                        <a
                            href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/projects/canvas-guide`}
                            className={styles.proj__cta}
                            aria-label="View Canvas guide project"
                        >
                            View ↗
                        </a>
                    </li>

                    <li className={styles.proj}>
                        <span className={styles.proj__num} aria-hidden="true">
                            05
                        </span>
                        <div>
                            <h3 className={styles.proj__title}>
                                Colour Contrast Checker
                            </h3>
                            <p className={styles.proj__desc}>
                                A progressive web app for checking WCAG colour
                                contrast ratios. Built because accessible design
                                starts with colour — and the tools for checking
                                it should be fast and frictionless.
                            </p>
                            <ul
                                className={styles.proj__tags}
                                aria-label="Technologies used"
                            >
                                <li className={styles.tag}>PWA</li>
                                <li className={styles.tag}>Accessibility</li>
                                <li className={styles.tag}>WCAG</li>
                            </ul>
                        </div>
                        <a
                            href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/projects/colour-contrast-checker`}
                            className={styles.proj__cta}
                            aria-label="View Colour Contrast Checker project"
                        >
                            View ↗
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
