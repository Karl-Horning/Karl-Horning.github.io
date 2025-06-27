import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaRss } from "react-icons/fa6";

/**
 * Footer component displaying copyright and social media/contact links.
 *
 * @component
 * @returns The rendered footer with social icons and links.
 */
export default function Footer() {
    const links = [
        {
            label: "GitHub",
            href: "https://github.com/Karl-Horning/",
            icon: FaGithub,
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/karl-horning/",
            icon: FaLinkedin,
        },
        {
            label: "Contact",
            href: "/contact",
            icon: FaEnvelope,
        },
        {
            label: "RSS Feed",
            href: "/rss",
            icon: FaRss,
        },
    ];

    return (
        <footer
            className="text-muted mt-12 bg-black py-8"
            role="contentinfo"
        >
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between px-6 md:flex-row">
                <p className="text-sm" aria-label="Copyright notice">
                    &copy; 2025 Karl Horning. All rights reserved.
                </p>
                <nav
                    aria-label="Social media links"
                    className="mt-4 flex space-x-6 md:mt-0"
                >
                    {links.map(({ label, href, icon: Icon }) => (
                        <Link
                            key={label}
                            href={href}
                            aria-label={label}
                            className="text-muted hover:text-primary transition-colors duration-300"
                            target={
                                href.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                                href.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined
                            }
                        >
                            <Icon
                                className="h-5 w-5 text-2xl"
                                aria-hidden="true"
                            />
                        </Link>
                    ))}
                </nav>
            </div>
        </footer>
    );
}
