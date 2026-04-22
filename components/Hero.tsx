import Link from "next/link";
import styles from "@/components/Hero.module.css";

/**
 * Full-page hero section introducing the site owner.
 *
 * Displays the name, tagline, short bio, and primary calls to action.
 * Intended to occupy the full viewport height on load.
 *
 * @return The hero section element.
 */
export default function Hero() {
    return (
        <>
            <section className={styles.hero} aria-label="Introduction">
                <div className={styles.hero__inner}>
                    <p className={styles.hero__eyebrow}>
                        — Full-stack developer
                    </p>
                    <h1 className={styles.hero__name}>
                        <span className={styles.line1}>Karl</span>
                        <span className={styles.line2}>Horning</span>
                    </h1>
                    <div className={styles.hero__rule} aria-hidden="true"></div>
                    <div className={styles.hero__bottom}>
                        <div className={styles.hero__left}>
                            <p className={styles.hero__tagline}>
                                Fast. Accessible.
                                <br />
                                No fluff.
                            </p>
                            <p className={styles.hero__bio}>
                                Web Developer at King&apos;s College London. I
                                build things that work for everyone — fast,
                                accessible, no loading screens. Previously a
                                Full-Stack Engineer at Learnlight, scaling a
                                GraphQL API for 700,000+ learners across 180
                                countries.
                            </p>
                        </div>
                        <div className={styles.hero__actions}>
                            <Link href="/#projects" className="btn btn--solid">
                                View my work
                            </Link>
                            <a
                                href="https://www.linkedin.com/in/karl-horning/"
                                className="btn btn--ghost"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn ↗
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="rule"></hr>
        </>
    );
}
