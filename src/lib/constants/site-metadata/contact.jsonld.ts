import { seo } from "@/lib/constants/site-metadata/seo";
import { externalLinks, internalRoutes } from "../ui";

const { ContactRoute } = internalRoutes;
const { CodePenLink, GitHubLink, LinkedInLink } = externalLinks;
const { defaultEmail, siteName, siteUrl } = seo;

/**
 * JSON-LD structured data for the **contact page**.
 *
 * Provides postal addresses, available languages, and multiple
 * contact points (form, email, LinkedIn). Helps search engines
 * display verified contact information in rich results.
 */
export const jsonLdContact = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${siteUrl}${ContactRoute}`,
    name: siteName,
    description: "Use the form to contact Karl Horning or connect on LinkedIn.",
    address: [
        {
            "@type": "PostalAddress",
            addressLocality: "London",
            addressCountry: "GB",
        },
        {
            "@type": "PostalAddress",
            addressLocality: "Pinhal Novo",
            addressCountry: "PT",
        },
    ],
    contactPoint: [
        {
            "@type": "ContactPoint",
            contactType: "personal",
            description: "Contact form available on the website",
            url: `${siteUrl}${ContactRoute}`,
            availableLanguage: ["English", "Portuguese"],
        },
        {
            "@type": "ContactPoint",
            contactType: "professional",
            email: defaultEmail,
            description: "Email Karl Horning",
            availableLanguage: ["English", "Portuguese"],
        },
        {
            "@type": "ContactPoint",
            contactType: "professional",
            url: LinkedInLink,
            description: "Connect with Karl on LinkedIn",
            availableLanguage: ["English", "Portuguese"],
        },
    ],
    sameAs: [CodePenLink, GitHubLink, LinkedInLink],
};
