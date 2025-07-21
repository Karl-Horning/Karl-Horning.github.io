import Image from "next/image";

/**
 * A presentational component that displays a collection of badges and certifications.
 *
 * The component renders a styled section with a heading and a responsive grid list
 * of digital badge images. Each badge includes appropriate alt and title attributes
 * for accessibility. Uses Next.js Image component with lazy loading.
 *
 * This component is static and does not accept any props.
 *
 * @component
 */
export default function AboutBadges() {
    return (
        <div data-aos="zoom-in" data-aos-delay="500">
            <section
                aria-labelledby="badges-certifications-heading"
                className="h-full transform rounded-lg bg-hero p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
                <h2
                    id="badges-certifications-heading"
                    className="mb-6 flex items-center justify-center rounded-lg bg-surface p-4 text-center text-2xl text-primary shadow-sm"
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
        </div>
    );
}
