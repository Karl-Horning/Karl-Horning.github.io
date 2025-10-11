import { internalRoutes } from "@/lib/constants/ui";
import { createMetadata } from "@/lib/metadata";
import { jsonLdContact } from "@/lib/constants/jsonLd";
import Hero from "@/components/ui/Hero";
import QuickCards from "@/components/contact/QuickCards";
import Form from "@/components/contact/Form";
import ContactCta from "@/components/ui/ContactCta";

const { ContactRoute } = internalRoutes;

export const metadata = createMetadata({
    title: "Contact",
    path: ContactRoute,
    jsonLd: jsonLdContact,
});

/**
 * The Contact page component.
 *
 * Renders a contact form section with fields for name, email, subject, and message,
 * as well as a call to action to connect on LinkedIn.
 * Includes form accessibility features and uses Formspree for form submission.
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
        <>
            <Hero
                title="Contact"
                leadParagraph="Drop me a line about freelance projects, consultancy, or roles in EdTech and full-stack development. I aim to reply within 2 working days."
                highlights={["UK hours (BST/GMT)", "Remote & hybrid"]}
            />
            <QuickCards />
            <Form />
            <ContactCta />
        </>
    );
}
