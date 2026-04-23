import styles from "@/components/Footer.module.css";
import { CODEPEN_URL, GITHUB_URL, LINKEDIN_URL } from "@/lib/constants/links";
import Link from "next/link";
import { FaCodepen, FaGithub, FaLinkedin } from "react-icons/fa";

/**
 * Site-wide footer with brand logo, navigation links, and social icons.
 *
 * The top row contains the logo wordmark and an inline nav; the bottom row
 * holds a tagline and icon links to GitHub, LinkedIn, and CodePen.
 *
 * @return The footer element.
 */
export default function Footer() {
    return (
        <footer className={styles.footer} aria-label="Site footer">
            <div className="wrap">
                <div className={styles.footer__top}>
                    <div className={styles.footer__brand}>
                        <Link href="/" className={styles.footer__logo}>
                            Karl Horning
                        </Link>
                    </div>
                    <nav aria-label="Footer navigation">
                        <ul className={styles.footer__nav} role="list">
                            <li>
                                <Link href="/#about">About</Link>
                            </li>
                            <li>
                                <Link href="/#projects">Projects</Link>
                            </li>
                            <li>
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.footer__bottom}>
                    <p className={styles.footer__sub}>
                        Built fast. Built accessible. No loading screens.
                    </p>
                    <ul
                        className={styles.footer__social}
                        role="list"
                        aria-label="Social links"
                    >
                        <li>
                            <a
                                href={GITHUB_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Karl Horning on GitHub"
                            >
                                <FaGithub aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a
                                href={LINKEDIN_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Karl Horning on LinkedIn"
                            >
                                <FaLinkedin aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a
                                href={CODEPEN_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Karl Horning on CodePen"
                            >
                                <FaCodepen aria-hidden="true" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
