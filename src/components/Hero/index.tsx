import Image from "next/image";
import ButtonLink from "@/components/Buttons/ButtonLink";

/**
 * Hero section displayed at the top of the homepage, introducing the developer with an image,
 * a short bio, and a call-to-action button.
 *
 * @component
 * @returns The rendered hero section with a background image, heading, description, and button.
 */
export default function Hero() {
    return (
        <section className="relative flex min-h-screen flex-col items-center overflow-hidden bg-hero px-6 py-24 text-white md:flex-row">
            {/* Image container */}
            <div className="relative left-0 top-0 flex h-48 w-full items-center justify-center overflow-hidden md:absolute md:h-full md:w-1/2 md:justify-start">
                <Image
                    src="/karl.png"
                    alt=""
                    className="pointer-events-none h-40 w-40 select-none rounded-full border-4 border-white object-cover object-top opacity-50 md:h-full md:w-full md:rounded-none md:border-0"
                    aria-hidden="true"
                    width={3024}
                    height={4032}
                />
                <div className="absolute inset-0 hidden md:block"></div>
            </div>

            {/* Text and button container */}
            <div className="relative z-10 mt-8 flex w-full max-w-3xl flex-col items-center pr-0 text-center md:ml-auto md:mt-0 md:w-1/2 md:items-start md:pr-6 md:text-left">
                <h1 className="text-3xl font-extrabold leading-tight drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
                    Hi, I&apos;m Karl Horning
                </h1>
                <p className="mt-4 max-w-xl text-lg leading-relaxed drop-shadow-md sm:text-xl md:mt-6 md:text-2xl lg:text-3xl">
                    Full-Stack JavaScript Developer & Learning Technologist
                    bridging tech and teaching through accessible design.
                </p>
                <ButtonLink
                    text="Work With Me"
                    href="/contact"
                    className="mt-8"
                />
            </div>
        </section>
    );
}
