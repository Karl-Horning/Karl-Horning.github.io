import { socialLinks } from "@/constants/social";
import Link from "next/link";

/**
 * Footer component displaying copyright and social media/contact links.
 *
 * @component
 * @returns The rendered footer with social icons and links.
 */
export default function Footer() {
    return (
        <footer className="bg-black py-8 text-muted" role="contentinfo">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between px-6 md:flex-row">
                <p className="text-sm" aria-label="Copyright notice">
                    &copy; 2025 Karl Horning. All rights reserved.
                </p>
                <nav
                    aria-label="Social media links"
                    className="mt-4 flex space-x-6 md:mt-0"
                >
                    {socialLinks.map(({ label, href, icon: Icon }) => (
                        <Link
                            key={label}
                            href={href}
                            aria-label={label}
                            className="rounded p-1 text-muted transition-colors duration-300 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
