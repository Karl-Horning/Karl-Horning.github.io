import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";
import { ROUTES } from "@/lib/routes";

/**
 * Generates the site's XML sitemap for search engine crawlers.
 *
 * @return Array of sitemap entries, one per route.
 */
export default function sitemap(): MetadataRoute.Sitemap {
    return ROUTES.map((route) => ({
        url: `${SITE_URL}${route}`,
        lastModified: new Date(),
    }));
}
