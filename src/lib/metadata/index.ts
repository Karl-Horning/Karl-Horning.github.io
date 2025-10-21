import type { Metadata } from "next";
import { seo } from "@/lib/constants/seo";

const { defaultDescription, defaultImage, siteName, siteUrl } = seo;

type CreateMetadataOptions = {
    title: string;
    description?: string;
    image?: string;
    path?: string;
    jsonLd?: Record<string, unknown>;
};

/**
 * Creates a Metadata object for a Next.js App Router page.
 * Includes SEO metadata for Open Graph, Twitter cards, canonical links,
 * and optional JSON-LD structured data for enhanced search engine indexing.
 *
 * @param {Object} options - Options to configure metadata.
 * @param {string} options.title - The page title (appended with site name).
 * @param {string} [options.description] - A brief description of the page.
 * Defaults to a standard portfolio description.
 * @param {string} [options.image] - A full URL to the Open Graph and Twitter card image.
 * Defaults to a placeholder OG image.
 * @param {string} [options.path] - The relative URL path of the page (for example, "/about").
 * Defaults to "/".
 * @param {Record<string, unknown>} [options.jsonLd] - A JSON-LD object to inject into
 * the <head> via the `other` field in the Metadata API. Automatically stringified.
 *
 * @returns {Metadata} A Metadata object compatible with the Next.js App Router,
 * suitable for use as a page-level `export const metadata`.
 */
export function createMetadata({
    title,
    description = defaultDescription,
    image = defaultImage,
    path = "/",
    jsonLd,
}: CreateMetadataOptions): Metadata {
    const fullTitle = `${title} | ${siteName}`;
    const url = `${siteUrl}${path}`;

    const metadata: Metadata = {
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

    if (jsonLd) {
        metadata.other = {
            "script:ld+json": JSON.stringify(jsonLd),
        };
    }

    return metadata;
}
