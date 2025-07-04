import ButtonLink from "@/components/Buttons/ButtonLink";
import Section from "@/components/Section";
import { internalRoutes } from "@/constants/links";

const { ContactRoute } = internalRoutes;

/**
 * Contact section inviting collaboration, with a brief message and call-to-action button.
 *
 * @component
 * @returns The rendered contact section with heading, description, and a "Get in Touch" button.
 */
export default function Contact() {
    return (
        <Section
            id="contact"
            header="Let's Collaborate"
            headerId="collaborate-header"
        >
            <div role="region" aria-labelledby="collaborate-header">
                <p
                    className="mx-auto mb-6 max-w-3xl text-lg text-text md:text-xl"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    I&apos;m open to freelance projects, consultancy, or
                    full-time opportunities in EdTech, accessibility, and
                    full-stack development. Let&apos;s build something great
                    together.
                </p>
                <div data-aos="zoom-in" data-aos-delay="600" className="pb-16">
                    <ButtonLink text="Get in Touch" href={ContactRoute} />
                </div>
            </div>
        </Section>
    );
}
