/**
 * Renders the main biography text for the About page.
 *
 * Provides a multi-paragraph introduction covering professional
 * background, areas of expertise, side projects, and personal
 * interests. Styled with Tailwind’s `prose` classes for
 * readability and responsive typography.
 *
 * @returns The biography text section containing multiple descriptive paragraphs.
 */
export default function BioText() {
    return (
        <article className="md:col-span-2">
            <div className="prose max-w-prose text-slate-700 dark:text-slate-300">
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
                <p className="mb-4">
                    When I&apos;m not coding, I&apos;m writing, running, or
                    tinkering with some new open-source tools.
                </p>
            </div>
        </article>
    );
}
