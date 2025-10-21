import { seo } from "@/lib/constants/site-metadata/seo";
import { externalLinks, internalRoutes } from "../ui";

const { ProjectsRoute } = internalRoutes;
const { CodePenLink, GitHubLink, LinkedInLink } = externalLinks;
const { defaultImage, defaultJobTitle, siteName, siteUrl } = seo;

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
