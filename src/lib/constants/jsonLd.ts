import { externalLinks, internalRoutes } from "./ui";
import { seo } from "@/lib/constants/seo";

const {
    AboutRoute,
    BlogRoute,
    CmaltRoute,
    ContactRoute,
    HomeRoute,
    ProjectsRoute,
} = internalRoutes;
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
    url: `${siteUrl}${AboutRoute}`,
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

/**
 * JSON-LD structured data for the **blog**.
 *
 * Uses the `Blog` type to describe the site’s articles feed. This helps search
 * engines understand that this page lists posts and can improve rich results.
 * Place in the `<head>` of the blog index page.
 */
export const jsonLdBlog = {
    "@context": "https://schema.org",
    "@type": "Blog",
    url: `${siteUrl}${BlogRoute}`,
    name: `${siteName} Blog`,
    description: defaultDescription,
    inLanguage: "en-GB",
    publisher: {
        "@type": "Person",
        name: siteName,
        url: siteUrl,
        sameAs: [CodePenLink, GitHubLink, LinkedInLink],
        jobTitle: defaultJobTitle,
        image: defaultImage,
        email: defaultEmail,
    },
    author: {
        "@type": "Person",
        name: siteName,
        url: siteUrl,
        sameAs: [CodePenLink, GitHubLink, LinkedInLink],
        jobTitle: defaultJobTitle,
    },
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${siteUrl}${BlogRoute}`,
    },
};

/**
 * JSON-LD structured data for the **CMALT portfolio page**.
 *
 * Marks the page as a ProfilePage whose main entity is the site owner (you),
 * and associates an EducationalOccupationalCredential (CMALT) awarded by ALT.
 * Place in the `<head>` of the CMALT portfolio landing page.
 */
export const jsonLdCMALT = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: `${siteUrl}${CmaltRoute}`,
    name: `${siteName} CMALT Portfolio`,
    description:
        "CMALT (Certified Member of the Association for Learning Technology) portfolio evidencing practice, reflection, and professional development.",
    inLanguage: "en-GB",
    mainEntity: {
        "@type": "Person",
        name: siteName,
        url: siteUrl,
        jobTitle: defaultJobTitle,
        email: defaultEmail,
        sameAs: [CodePenLink, GitHubLink, LinkedInLink],
        hasCredential: {
            "@type": "EducationalOccupationalCredential",
            name: "CMALT (Certified Member of ALT)",
            credentialCategory: "Professional certification",
            url: "https://www.alt.ac.uk/certified-membership",
            awardingBody: {
                "@type": "Organization",
                name: "Association for Learning Technology (ALT)",
                url: "https://www.alt.ac.uk/",
            },
            // TODO: when awarded, add: validFor, dateCreated/issued, recognisedBy, etc.
        },
        knowsAbout: [
            "Learning technology",
            "Instructional design",
            "VLE/LMS",
            "Accessibility (a11y)",
            "Assessment and feedback",
            "Educational evaluation",
        ],
    },
    publisher: {
        "@type": "Person",
        name: siteName,
        url: siteUrl,
        sameAs: [CodePenLink, GitHubLink, LinkedInLink],
        jobTitle: defaultJobTitle,
        image: defaultImage,
    },
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${siteUrl}${CmaltRoute}`,
    },
};

/**
 * JSON-LD structured data for the **projects page**.
 *
 * Declares the page as a CollectionPage and includes an ItemList placeholder
 * for featured projects. This supports richer understanding of your portfolio
 * listings. Place in the `<head>` of the projects index page.
 */
export const jsonLdProjects = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: `${siteUrl}${ProjectsRoute}`,
    name: `${siteName} Projects`,
    description:
        "Selected software and learning-technology projects, including web apps, APIs, data, and evaluation work.",
    inLanguage: "en-GB",
    publisher: {
        "@type": "Person",
        name: siteName,
        url: siteUrl,
        sameAs: [CodePenLink, GitHubLink, LinkedInLink],
        jobTitle: defaultJobTitle,
        image: defaultImage,
    },
    about: [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "React",
        "Next.js",
        "GraphQL",
        "PostgreSQL",
        "Accessibility",
        "LMS integrations",
        "API testing",
    ],
    hasPart: {
        "@type": "ItemList",
        name: "Featured projects",
        itemListOrder: "http://schema.org/ItemListOrderAscending",
    },
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${siteUrl}${ProjectsRoute}`,
    },
};
