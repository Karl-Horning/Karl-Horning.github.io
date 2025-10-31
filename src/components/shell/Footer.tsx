import { socialLinks } from "@/lib/constants/ui";
import Link from "next/link";

/**
 * Footer component displaying copyright and social media/contact links.
 *
 * @component
 * @returns The rendered footer with social icons and links.
 */
export default function Footer() {
    return (
        <footer
            id="footer"
            className="border-t border-slate-200 py-10 text-center text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400"
            role="contentinfo"
        >
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between px-6 md:flex-row">
                <p className="text-sm" aria-label="Copyright notice">
                    &copy; 2025 Made with ❤️ and TypeScript by Karl Horning.
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
                            className="rounded p-1 text-slate-600  transition-colors duration-300 hover:text-primary dark:text-slate-400"
                            target={
                                href.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                                href.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined
                            }
                            type={
                                label.startsWith("RSS")
                                    ? "application/rss+xml"
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
