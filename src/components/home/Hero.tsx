import { assets } from "@/lib/constants/assets";
import Image from "next/image";
import ButtonLink from "../ui/ButtonLink";
import { icons } from "@/lib/constants/icons";
import { internalRoutes } from "@/lib/constants/links";
import Pill from "../ui/Pill";

const { profileImage } = assets;
const { ContactIcon, ProjectIcon } = icons;
const { ContactRoute } = internalRoutes;

export default function Hero() {
    return (
        <section className="hero-bg">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 lg:py-24">
                <div>
                    <h1 className="text-pretty text-4xl font-extrabold tracking-tight sm:text-5xl">
                        Building accessible products for real people
                    </h1>
                    <p className="mt-3 max-w-prose text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                        JavaScript/TypeScript &bull; React/Next.js &bull;
                        PostgreSQL &bull; EdTech. I ship practical,
                        human-centred solutions with performance and a11y in
                        mind.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2 text-xs">
                        <Pill
                            text="15+ yrs"
                            mainColour="text-primary"
                            bgColour="bg-primary/10"
                        />
                        <Pill
                            text="Accessibility-first"
                            mainColour="text-secondary"
                            bgColour="bg-secondary/10"
                        />
                        <Pill
                            text="API-driven"
                            mainColour="text-slate-800 dark:text-slate-200"
                            bgColour="bg-slate-200 dark:bg-slate-800"
                        />
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
