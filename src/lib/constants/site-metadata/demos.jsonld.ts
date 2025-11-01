import { seo } from "@/lib/constants/site-metadata/seo";
import { externalLinks, internalRoutes } from "../ui";

const { DemosRoute } = internalRoutes;
const { CodePenLink, GitHubLink, LinkedInLink } = externalLinks;
const { defaultImage, defaultJobTitle, siteName, siteUrl } = seo;

/** Provide JSON-LD metadata for the demos page.
 *
 * Declare a schema.org CollectionPage with an ItemList placeholder.
 * Embed via {@link createMetadata} into the <head> at build time.
 *
 * @remarks
 * Static shape only; no fetching. Update when tech tags or links change.
 *
 * @example
 * import { jsonLdDemos } from "@/lib/constants/site-metadata";
 * export const metadata = createMetadata({ jsonLd: jsonLdDemos });
 */
export const jsonLdDemos = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",

    // Canonical URL and naming
    url: `${siteUrl}${DemosRoute}`,
    name: `${siteName} Demos`,
    description:
        "Selected software and learning-technology demos, including web apps, APIs, data, and evaluation work.",
    inLanguage: "en-GB",

    // Publisher/owner of the collection
    publisher: {
        "@type": "Person",
        name: siteName,
        url: siteUrl,
        sameAs: [CodePenLink, GitHubLink, LinkedInLink],
        jobTitle: defaultJobTitle,
        image: defaultImage,
    },

    // Keywords / technologies covered
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

    // ItemList stub for featured demos
    hasPart: {
        "@type": "ItemList",
        name: "Featured projects",
        itemListOrder: "http://schema.org/ItemListOrderAscending",
    },

    // Primary entity reference
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${siteUrl}${DemosRoute}`,
    },
};
