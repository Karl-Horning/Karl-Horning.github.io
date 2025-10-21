import { seo } from "@/lib/constants/site-metadata/seo";
import { externalLinks, internalRoutes } from "../ui";

const { BlogRoute } = internalRoutes;
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
