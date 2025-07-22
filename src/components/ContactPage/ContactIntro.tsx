import Section from "../Section";
import { externalLinks } from "@/constants/links";
import { icons } from "@/constants/icons";

const { ExternalLinkIcon } = icons;
const { LinkedInLink } = externalLinks;

/**
 * ContactIntro component displays a heading and introductory message
 * for the contact page.
 *
 * This component uses a centred layout and includes a reusable Header
 * component with an H1 tag, followed by a descriptive paragraph to
 * invite user interaction.
 *
 * @component
 * @returns The rendered ContactIntro section
 */
export default function ContactIntro() {
    return (
        <Section id="contact-intro" header="Contact Me" headerLevel={1}>
            <p className="mx-auto max-w-3xl text-center text-text">
                Whether you&apos;d like to collaborate, discuss a project, share
                feedback, or just say hello, feel free to get in touch using the
                form below. You can also{" "}
                <a
                    href={LinkedInLink}
                    aria-label="Connect with Karl Horning on LinkedIn"
                    className="text-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    connect with me via LinkedIn
                </a>
                .
            </p>
        </Section>
    );
}
