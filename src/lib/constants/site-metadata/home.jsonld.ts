import { seo } from "@/lib/constants/site-metadata/seo";
import { externalLinks } from "../ui";

const { CodePenLink, GitHubLink, LinkedInLink } = externalLinks;
const { defaultDescription, defaultImage, defaultJobTitle, siteName, siteUrl } =
    seo;

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
