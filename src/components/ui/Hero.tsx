import { assets } from "@/lib/constants/assets";
import Image from "next/image";
import ButtonLink from "./ButtonLink";
import { icons } from "@/lib/constants/icons";
import { internalRoutes } from "@/lib/constants/links";
import Pill from "./Pill";

const { profileImage } = assets;
const { ContactIcon, ProjectIcon } = icons;
const { ContactRoute } = internalRoutes;

interface HeroProps {
    /**
     * Main heading text for the hero section.
     */
    title: string;

    /**
     * Supporting paragraph displayed beneath the title.
     */
    leadParagraph: string;

    /**
     * Array of short highlight strings shown as pills.
     */
    highlights: string[];
}

/**
 * Hero section component.
 *
 * Serves as the introductory section at the top of the site,
 * containing a main heading, supporting text, a set of highlights,
 * call-to-action buttons, and a profile image.
 *
 * Features:
 * - Prominent title and lead paragraph
 * - Highlights rendered as styled `Pill` components
 * - Primary and secondary `ButtonLink` call-to-actions
 * - Profile image with decorative border and subtle ring
 *
 * Accessibility:
 * - Profile image is marked `aria-hidden` and has empty alt text,
 *   as it is decorative
 * - Call-to-action buttons include icons but remain text-labelled
 *
 * @param props - The hero section properties.
 * @param props.title - Main heading displayed in the hero.
 * @param props.leadParagraph - Supporting paragraph shown below the title.
 * @param props.highlights - Short highlight phrases displayed as pills.
 * @returns A styled `<section>` element containing the hero content.
 */
export default function Hero({ title, leadParagraph, highlights }: HeroProps) {
    return (
        <section id="hero" className="hero-bg">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-20 md:grid-cols-2 lg:py-24">
                <div>
                    <h1 className="text-pretty text-4xl font-extrabold tracking-tight sm:text-5xl">
                        {title}
                    </h1>
                    <p className="mt-3 max-w-prose text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                        {leadParagraph}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2 text-xs">
                        {highlights.map((highlight) => (
                            <Pill
                                key={highlight}
                                text={highlight}
                                mainColour="text-slate-800 dark:text-slate-200"
                                bgColour="bg-slate-200 dark:bg-slate-800"
                            />
                        ))}
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <ButtonLink
                            href={ContactRoute}
                            text="Get in touch"
                            icon={<ContactIcon />}
                        />

                        <ButtonLink
                            // TODO: Add correct link
                            href={ContactRoute}
                            text="Recent projects"
                            icon={<ProjectIcon />}
                            type="secondary"
                        />
                    </div>
                </div>
                <div>
                    <div className="relative mx-auto aspect-square w-64 overflow-hidden rounded-3xl border border-slate-200 shadow-md md:w-80 dark:border-slate-800">
                        <Image
                            src={profileImage}
                            alt=""
                            className="pointer-events-none h-full w-full select-none bg-[var(--primary)] object-cover object-top"
                            aria-hidden="true"
                            priority={true}
                            width={960}
                            height={960}
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5 dark:ring-white/10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
