import Image from "next/image";
import ButtonLink from "@/components/Buttons/ButtonLink";
import { FaArrowRight } from "react-icons/fa6";

export default function BlogCard() {
    return (
        <article className="rounded-lg bg-surface p-8 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <Image
                src="/work-and-projects/computer-svg-animation-preview.webp"
                alt="Preview of computer SVG animation project"
                className="mb-4 h-48 w-full rounded-md object-cover"
                width={1200}
                height={400}
            />
            <h3 className="mb-2 text-2xl font-semibold text-text">
                Exploring Static Site Generators
            </h3>
            <p className="mb-2 text-sm text-muted">26 June 2025</p>
            <p className="mb-4 text-text">
                A look at how tools like Eleventy and Next.js help streamline
                web development through pre-rendering and modular components.
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
                <a
                    href="./blog.html"
                    className="rounded bg-hero px-2 py-1 text-sm text-muted transition-colors duration-300 hover:bg-primary hover:text-white"
                >
                    Eleventy
                </a>
                <a
                    href="./blog.html"
                    className="rounded bg-hero px-2 py-1 text-sm text-muted transition-colors duration-300 hover:bg-primary hover:text-white"
                >
                    Jamstack
                </a>
                <a
                    href="./blog.html"
                    className="rounded bg-hero px-2 py-1 text-sm text-muted transition-colors duration-300 hover:bg-primary hover:text-white"
                >
                    Next.js
                </a>
            </div>
            <ButtonLink
                text="Read More"
                href="/blog"
                type="small"
                icon={<FaArrowRight />}
            />
        </article>
    );
}
