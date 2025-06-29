import ContactForm from "@/components/ContactPage/ContactForm";
import ContactIntro from "@/components/ContactPage/ContactIntro";
import { internalRoutes } from "@/constants/links";
import { createMetadata } from "@/lib/metadata";
import { jsonLdContact } from "@/constants/jsonLd";

export const metadata = createMetadata({
    title: "Contact",
    path: internalRoutes.contact,
    jsonLd: jsonLdContact,
});

/**
 * The Contact page component.
 *
 * Renders a contact form section with fields for name, email, company, and message,
 * as well as a call to action to connect on LinkedIn.
 * Includes form accessibility features and uses fabform.io for form submission.
 *
 * Also injects JSON-LD structured data for SEO purposes.
 *
 * Metadata for the page title and path is created and exported separately.
 *
 * @component
 * @returns The rendered Contact page section.
 */
export default function Contact() {
    return (
        <main className="mx-auto max-w-6xl pt-16 md:pt-36">
            <ContactIntro />
            <ContactForm />
        </main>
    );
}
