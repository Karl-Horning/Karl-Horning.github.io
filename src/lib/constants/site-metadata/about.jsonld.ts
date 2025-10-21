import { seo } from "@/lib/constants/site-metadata/seo";
import { externalLinks, internalRoutes } from "../ui";

const { AboutRoute } = internalRoutes;
const { CodePenLink, GitHubLink, LinkedInLink } = externalLinks;
const { defaultDescription, defaultEmail, defaultJobTitle, siteName, siteUrl } =
    seo;

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
