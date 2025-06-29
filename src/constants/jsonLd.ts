import { externalLinks, internalRoutes } from "./links";

/**
 * JSON-LD structured data describing Karl Horning as a Person,
 * including job titles, skills, contact info, and employer.
 */
export const jsonLdAbout = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Karl Horning",
    jobTitle: [
        "Full-Stack JavaScript & TypeScript Developer",
        "Learning Technologist",
    ],
    email: "karl.h@me.com",
    url: externalLinks.portfolio,
    sameAs: [
        externalLinks.gitHub,
        externalLinks.codePen,
        externalLinks.linkedIn,
    ],
    description:
        "Self-taught Full-Stack JavaScript and TypeScript developer and Learning Technologist with over 15 years of cross-sector experience, specialising in scalable APIs, LMS platforms, and educational technology.",
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
    url: externalLinks.portfolio,
    name: "Karl Horning Portfolio",
    description:
        "Portfolio site of Karl Horning: Self-taught Full-Stack JavaScript and TypeScript developer and Learning Technologist with over 15 years of cross-sector experience, specialising in scalable APIs, LMS platforms, and educational technology.",
    publisher: {
        "@type": "Person",
        name: "Karl Horning",
        url: externalLinks.portfolio,
        sameAs: [
            externalLinks.linkedIn,
            externalLinks.gitHub,
            externalLinks.codePen,
        ],
        jobTitle: [
            "Full-Stack JavaScript & TypeScript Developer",
            "Learning Technologist",
        ],
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
    url: `${externalLinks.portfolio}${internalRoutes.contact}`,
    name: "Karl Horning",
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
            contactType: "customer support",
            description: "Contact form available on the website",
            url: `${externalLinks.portfolio}${internalRoutes.contact}`,
            availableLanguage: ["English", "Portuguese"],
        },
        {
            "@type": "ContactPoint",
            contactType: "professional",
            email: "karl.h@me.com",
            description: "Email Karl Horning",
            availableLanguage: ["English", "Portuguese"],
        },
        {
            "@type": "ContactPoint",
            contactType: "professional",
            url: externalLinks.linkedIn,
            description: "Connect with Karl on LinkedIn",
            availableLanguage: ["English", "Portuguese"],
        },
    ],
    sameAs: [
        externalLinks.linkedIn,
        externalLinks.gitHub,
        externalLinks.codePen,
    ],
};
