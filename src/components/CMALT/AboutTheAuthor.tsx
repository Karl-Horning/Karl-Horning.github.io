import { footerLinks } from "@/constants/footer";
import Image from "next/image";
import Link from "next/link";

/**
 * AboutTheAuthor component displaying the author's photo, description, and social links.
 * 
 * Typically used in sidebars to provide a brief introduction and relevant contact options.
 *
 * @component
 * @returns The rendered author section with image, bio, and social icons.
 */
export default function AboutTheAuthor() {
    return (
        <section aria-label="Author photo and social links">
            <h3 className="mb-2 text-lg">About the Author</h3>
            <Image
                src="/img/karl.optimised.webp"
                alt="Karl: JavaScript developer and learning technologist"
                className="mx-auto mb-4 h-32 w-32 rounded-full bg-primary object-cover object-top"
                loading="lazy"
                aria-hidden="true"
                width={100}
                height={100}
            />
            <p className="mb-4 text-center text-sm text-muted">
                Full-stack JS developer &amp; learning technologist
            </p>
            <ul className="mb-4 flex justify-center gap-1 text-sm text-primary">
                {footerLinks.map(({ label, href, icon: Icon }) => (
                    <Link
                        key={label}
                        href={href}
                        aria-label={label}
                        className="social-button"
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                            href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                        }
                    >
                        <Icon className="h-5 w-5 text-2xl" aria-hidden="true" />
                    </Link>
                ))}
            </ul>
        </section>
    );
}
