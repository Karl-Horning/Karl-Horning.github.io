import { externalLinks } from "@/constants/links";
import type { Metadata } from "next";

const siteName = "Karl Horning";
const siteUrl = externalLinks.portfolio;
const defaultDescription =
    "Karl Horning's portfolio: showcasing projects in JavaScript, GraphQL, Next.js, and more.";
const defaultImage = `${siteUrl}/img/og-image.jpg`; // TODO: Replace with OG image

/**
 * Generates metadata for a given page on the site, including SEO-friendly
 * Open Graph and Twitter card information.
 *
 * @param {Object} options - Configuration object for metadata.
 * @param {string} options.title - The title of the page.
 * @param {string} [options.description] - A brief description of the page.
 * Defaults to a standard portfolio description.
 * @param {string} [options.image] - The full URL to the Open Graph image.
 * Defaults to a placeholder OG image.
 * @param {string} [options.path] - The path of the current page, e.g. `/about`.
 * Defaults to the root path (`/`).
 * @returns {Metadata} - An object compatible with Next.js metadata configuration.
 */
export function createMetadata({
    title,
    description = defaultDescription,
    image = defaultImage,
    path = "/",
}: {
    title: string;
    description?: string;
    image?: string;
    path?: string;
}): Metadata {
    const fullTitle = `${title} | ${siteName}`;
    const url = `${siteUrl}${path}`;

    return {
        title: fullTitle,
        description,
        metadataBase: new URL(siteUrl),
        openGraph: {
            title: fullTitle,
            description,
            url,
            siteName,
            type: "website",
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: fullTitle,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description,
            images: [image],
        },
        alternates: {
            canonical: url,
        },
    };
}
