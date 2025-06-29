import ButtonLink from "@/components/Buttons/ButtonLink";
import Section from "@/components/Section";
import { internalRoutes } from "@/constants/links";

/**
 * A section component that introduces the user with a heading, description, and a call-to-action button.
 *
 * @component
 * @returns A centred "About Me" section with a heading, paragraph, and link-style button.
 */
export default function About() {
    return (
        <Section
            id="about"
            header="About Me"
            headerId="about-header"
            className="mt-16"
        >
            <div role="region" aria-labelledby="about-header">
                <p
                    className="mx-auto mb-6 max-w-3xl text-lg text-text md:text-xl"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                >
                    I&apos;m a Full-Stack JavaScript Developer and Learning
                    Technologist with over 15 years&apos; experience in EdTech,
                    specialising in building user-focused, accessible tools for
                    learners and educators.
                </p>

                <div
                    data-aos="zoom-in"
                    data-aos-duration="700"
                    data-aos-delay="600"
                >
                    <ButtonLink
                        text="More About Me"
                        href={internalRoutes.about}
                        type="secondary"
                    />
                </div>
            </div>
        </Section>
    );
}
