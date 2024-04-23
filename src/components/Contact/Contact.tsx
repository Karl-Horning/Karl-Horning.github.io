import PageSection from "@/components/PageSection/PageSection";
import { Link } from "@nextui-org/react";
import * as ProfileLinks from "@/components/ProfileLinks/ProfileLinks";
import ContactForm from "@/components/Contact/ContactForm";

/**
 * Contact component for displaying contact information and a contact form.
 * @returns {JSX.Element} The JSX element representing the contact section.
 */
export default function Contact() {
    return (
        <PageSection id="contact" header="Contact Me" bgColour="bg-white">
            <p className="pb-20 text-center">
                Connect with me directly through this form, or explore my
                profiles on{" "}
                <Link
                    href={ProfileLinks.linkedInLink}
                    target="_blank"
                    className="link"
                >
                    LinkedIn
                </Link>
                ,{" "}
                <Link
                    href={ProfileLinks.linkedInLink}
                    target="_blank"
                    className="link"
                >
                    GitHub
                </Link>
                ,{" "}
                <Link
                    href={ProfileLinks.linkedInLink}
                    target="_blank"
                    className="link"
                >
                    CodePen
                </Link>
                . I look forward to hearing from you!
            </p>

            <ContactForm />
        </PageSection>
    );
}
