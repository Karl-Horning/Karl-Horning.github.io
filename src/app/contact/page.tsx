import { externalLinks, icons, internalRoutes } from "@/lib/constants/ui";
import { createMetadata } from "@/lib/metadata";
import { jsonLdContact } from "@/lib/constants/jsonLd";
import Form from "@/components/contact/Form";
import ContactCta from "@/components/ui/ContactCta";
import PageIntroSplit from "@/components/ui/PageIntroSplit";

const { ContactRoute } = internalRoutes;
const { LinkedInLink } = externalLinks;
const { ContactIcon, ReadMoreIcon, LinkedInIcon } = icons;

/**
 * Static metadata for the Contact page.
 *
 * Generated via {@link createMetadata} with embedded structured data
 * from {@link jsonLdContact} to support SEO and rich search results.
 */
export const metadata = createMetadata({
    title: "Contact",
    path: ContactRoute,
    jsonLd: jsonLdContact,
});

/**
 * Renders the **Contact** page.
 *
 * Displays a contact form and social call-to-action for collaboration
 * opportunities, consultancy work, and professional connections.
 *
 * ### Layout structure
 * - {@link PageIntroSplit} — Hero section with page intro, CTAs, and icon.
 * - {@link Form} — Accessible form powered by Formspree for message submission.
 * - {@link ContactCta} — Footer invitation to get in touch.
 *
 * ### Behaviour
 * - Provides a mail form with fields for name, email, subject, and message.
 * - Encourages LinkedIn contact through a secondary CTA.
 * - Implements accessibility best practices in form structure and labels.
 * - Includes JSON-LD metadata for search engine indexing.
 *
 * @remarks
 * The form component uses Formspree for backend handling,
 * requiring no custom API routes or server-side processing.
 *
 * @returns The rendered Contact page layout including the form and CTAs.
 *
 * @example
 * ```tsx
 * export default function Contact() {
 *   return (
 *     <>
 *       <PageIntroSplit
 *         title="Contact"
 *         tagline="Let's Collaborate"
 *         leadParagraph="Drop me a line about freelance projects or EdTech roles."
 *         heroIcon={<ContactIcon />}
 *         primaryCta={{
 *           href: `${ContactRoute}#contactForm`,
 *           text: "Send a message",
 *           icon: <ReadMoreIcon />,
 *         }}
 *         secondaryCta={{
 *           href: LinkedInLink,
 *           text: "Connect on LinkedIn",
 *           icon: <LinkedInIcon />,
 *         }}
 *       />
 *       <Form />
 *       <ContactCta />
 *     </>
 *   );
 * }
 * ```
 */
export default function Contact() {
    return (
        <>
            <PageIntroSplit
                title="Contact"
                leadParagraph="Drop me a line about freelance projects, consultancy, or roles in EdTech and full-stack development. I aim to reply within 2 working days."
                tagline="Let's Collaborate"
                heroIcon={<ContactIcon />}
                primaryCta={{
                    href: `${ContactRoute}#contactForm`,
                    text: "Send a message",
                    icon: <ReadMoreIcon />,
                }}
                secondaryCta={{
                    href: LinkedInLink,
                    text: "Connect on LinkedIn",
                    icon: <LinkedInIcon />,
                }}
            />
            <Form />
            <ContactCta />
        </>
    );
}
