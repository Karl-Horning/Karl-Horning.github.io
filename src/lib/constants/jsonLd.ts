import { externalLinks, internalRoutes } from "./ui";
import { seo } from "@/lib/constants/seo";

const { ContactRoute } = internalRoutes;
const { CodePenLink, GitHubLink, LinkedInLink } = externalLinks;
const {
    defaultDescription,
    defaultEmail,
    defaultImage,
    defaultJobTitle,
    siteName,
    siteUrl,
} = seo;

/**
 * JSON-LD structured data describing **Karl Horning** as a person.
 *
 * Defines key attributes such as job title, areas of expertise,
 * contact details, social links, and current employer. Used in
 * the `<head>` section for semantic SEO and rich search snippets.
 */
export const jsonLdAbout = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteName,
    jobTitle: defaultJobTitle,
    email: defaultEmail,
    url: siteUrl,
    sameAs: [CodePenLink, GitHubLink, LinkedInLink],
    description: defaultDescription,
    knowsAbout: [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "React",
        "Next.js",
        "GraphQL",
        "PostgreSQL",
        "LMS Evaluation",
        "API Testing",
        "Agile",
    ],
    worksFor: {
        "@type": "Organization",
        name: "Imperial College London",
        url: "https://www.imperial.ac.uk/",
    },
};

/**
 * JSON-LD structured data for the **home page**.
 *
 * Describes the portfolio website as a whole, including its name,
 * URL, publisher, and overall purpose. Used to enhance search
 * engine visibility and establish authorship.
 */
export const jsonLdHome = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteUrl,
    name: `${siteName} Portfolio`,
    description: defaultDescription,
    publisher: {
        "@type": "Person",
        name: siteName,
        url: siteUrl,
        sameAs: [CodePenLink, GitHubLink, LinkedInLink],
        jobTitle: defaultJobTitle,
        image: defaultImage,
    },
};

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
