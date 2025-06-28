import ButtonLink from "@/components/Buttons/ButtonLink";
import { icons } from "@/constants/icons";
import { internalRoutes } from "@/constants/links";
import { createMetadata } from "@/lib/metadata";
import Image from "next/image";

export const metadata = createMetadata({
    title: "About",
    path: internalRoutes.about,
});

export default function About() {
    const values = [
        {
            title: "Accessibility",
            icon: icons.accessibility,
            description:
                "Building accessible, inclusive interfaces for everyone",
        },
        {
            title: "Clear Code",
            icon: icons.code,
            description:
                "Clear, maintainable code that future-me (or someone else) can understand",
        },
        {
            title: "Collaboration",
            icon: icons.users,
            description:
                "Collaborative problem-solving and honest communication",
        },
        {
            title: "Right Tools",
            icon: icons.tools,
            description:
                "Using the right tool for the job and knowing when to keep things simple",
        },
        {
            title: "Lifelong Learning",
            icon: icons.learning,
            description:
                "Lifelong learning, always exploring new skills and ideas",
        },
    ];

    const skills = [
        {
            name: "JavaScript",
            icon: icons.javaScript,
            bgColour: "bg-yellow-600",
        },
        {
            name: "Node.js",
            icon: icons.nodeJs,
            bgColour: "bg-green-700",
        },
        {
            name: "React",
            icon: icons.react,
            bgColour: "bg-blue-700",
        },
        {
            name: "GraphQL",
            icon: icons.graphQl,
            bgColour: "bg-pink-700",
        },
        {
            name: "PostgreSQL",
            icon: icons.postgreSql,
            bgColour: "bg-blue-900",
        },
        {
            name: "Agile",
            icon: icons.users,
            bgColour: "bg-amber-600",
        },
        {
            name: "Accessibility",
            icon: icons.accessibility,
            bgColour: "bg-violet-800",
        },
        {
            name: "API Testing",
            icon: icons.testing,
            bgColour: "bg-orange-700",
        },
        {
            name: "Tailwind CSS",
            icon: icons.tailwind,
            bgColour: "bg-blue-700",
        },
    ];

    return (
        <main className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 pt-16 text-text sm:grid-cols-2 md:pt-36 lg:grid-cols-3">
            {/* Photo Card */}
            <section className="group relative">
                <Image
                    src="/karl.png"
                    alt="Karl: JavaScript developer and learning technologist"
                    className="h-full w-full transform rounded-xl bg-primary object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    width={3024}
                    height={4032}
                />
                <div className="absolute inset-0 transform rounded-xl bg-black/60  p-4 text-white opacity-0 transition-transform duration-300 group-hover:scale-105 group-hover:opacity-100">
                    <h2 className="text-xl font-bold">Karl Horning</h2>
                    <p className="text-sm">
                        Full-Stack JavaScript Developer & Learning Technologist
                    </p>
                </div>
            </section>

            {/* About Paragraphs */}
            <section
                aria-labelledby="about-heading"
                className="transform rounded-lg bg-surface p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg md:col-span-2"
            >
                <h1
                    id="about-heading"
                    className="mb-6 text-center text-4xl font-bold text-primary"
                >
                    About Me
                </h1>
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
                <p className="mb-6">
                    When I&apos;m not coding, I&apos;m writing, running, or
                    tinkering with some new open-source tools.
                </p>

                <div className="flex justify-center">
                    <ButtonLink
                        text="Get in Touch"
                        href={internalRoutes.contact}
                    />
                </div>
            </section>

            {/* Values */}
            <section
                aria-labelledby="values-heading"
                className="transform rounded-lg bg-surface p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
                <h2
                    id="values-heading"
                    className="mb-6 text-center text-2xl font-bold text-primary"
                >
                    What I Value
                </h2>
                <ul className="space-y-3">
                    {values.map(({ title, icon: Icon, description }) => (
                        <li key={title} className="flex items-start gap-4">
                            <Icon className="mt-2 flex-shrink-0 text-sm text-primary" />
                            <div className="text-base text-text">
                                {description}
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Skills */}
            <section
                aria-labelledby="skills-heading"
                className="transform rounded-lg bg-surface p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
                <h2
                    id="skills-heading"
                    className="mb-6 text-center text-2xl font-bold text-primary"
                >
                    Skills
                </h2>
                <ul className="grid grid-cols-3 gap-4">
                    {skills.map(({ name, icon: Icon, bgColour }) => (
                        <li
                            key={`Icon: ${name}`}
                            className="flex flex-col items-center"
                        >
                            <div
                                className={`flex h-14 w-14 items-center justify-center rounded-full shadow-md ${bgColour}`}
                            >
                                <Icon className="text-xl text-white" />
                            </div>
                            <span className="mt-1 text-center text-sm">
                                {name}
                            </span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Badges & Certifications */}
            <section
                aria-labelledby="badges-certifications-heading"
                className="transform rounded-lg bg-hero p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
                <h2
                    id="badges-certifications-heading"
                    className="mb-6 flex items-center justify-center rounded-lg bg-surface p-4 text-center text-2xl font-bold text-primary shadow-sm"
                >
                    Badges & Certifications
                </h2>

                <ul className="grid grid-cols-2 gap-4" role="list">
                    {/* Jira Fundamentals Badge */}
                    <li className="flex h-28 items-center justify-center rounded-lg bg-surface p-4 shadow-sm">
                        <Image
                            src="/img/badges/uni-credential-emblem-jirafundamentals.png"
                            alt="Atlassian Jira Fundamentals digital badge"
                            title="Jira Fundamentals Badge"
                            className="pointer-events-none max-h-16 select-none object-contain"
                            loading="lazy"
                            height={100}
                            width={100}
                        />
                    </li>

                    {/* Dyslexia Awareness Badge */}
                    <li className="flex h-28 items-center justify-center rounded-lg bg-surface p-4 shadow-sm">
                        <Image
                            src="/img/badges/DyslexiaAwarenessBadge.svg"
                            alt="Dyslexia Awareness digital badge"
                            title="Dyslexia Awareness Badge"
                            className="pointer-events-none max-h-16 select-none object-contain"
                            loading="lazy"
                            height={100}
                            width={100}
                        />
                    </li>

                    {/* Apple Teacher Badge (spanning full width) */}
                    <li className="col-span-2 flex h-28 items-center justify-center rounded-lg bg-surface p-4 shadow-sm">
                        <picture>
                            <source
                                srcSet="/img/badges/AppleTeacher_white.svg"
                                media="(prefers-color-scheme: dark)"
                            />
                            <Image
                                src="/img/badges/AppleTeacher_black.svg"
                                alt="Apple Teacher Badge from Apple"
                                title="Apple Teacher digital badge"
                                className="pointer-events-none h-16 select-none"
                                loading="lazy"
                                height={200}
                                width={200}
                            />
                        </picture>
                    </li>
                </ul>
            </section>
        </main>
    );
}
