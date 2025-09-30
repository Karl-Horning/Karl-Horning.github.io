import { externalLinks, internalRoutes } from "./links";
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
 * JSON-LD structured data describing Karl Horning as a Person,
 * including job titles, skills, contact info, and employer.
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
 * JSON-LD structured data for the home page,
 * describing the website and its publisher.
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
 * JSON-LD structured data for the contact page,
 * including postal addresses and multiple contact points
 * (contact form, email, LinkedIn).
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
