import { externalLinks } from "./links";
import { assets } from "./assets";

/**
 * SEO-related constants for consistent use across metadata and structured data.
 */
export const seo = {
    siteName: "Karl Horning",
    siteUrl: externalLinks.portfolio,
    defaultDescription:
        "Self-taught Full-Stack JavaScript and TypeScript developer and Learning Technologist with over 15 years of cross-sector experience, specialising in scalable APIs, LMS platforms, and educational technology.",
    defaultImage: `${externalLinks.portfolio}${assets.profileImage}`, // TODO: Update with a dedicated OG image
    defaultEmail: "karl.h@me.com",
    defaultJobTitle: [
        "Full-Stack JavaScript & TypeScript Developer",
        "Learning Technologist",
    ],
};
