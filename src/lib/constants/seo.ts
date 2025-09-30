import { externalLinks } from "./links";
import { assets } from "./assets";

const { PortfolioLink } = externalLinks;

/**
 * SEO-related constants for consistent use across metadata and structured data.
 */
export const seo = {
    siteName: "Karl Horning",
    siteUrl: PortfolioLink,
    defaultDescription:
        "Self-taught Full-Stack JavaScript and TypeScript developer and Learning Technologist with over 15 years of cross-sector experience, specialising in scalable APIs, LMS platforms, and educational technology.",
    defaultImage: `${PortfolioLink}${assets.profileImage}`, // TODO: Update with a dedicated OG image
    defaultEmail: "karl.h@me.com",
    defaultJobTitle: [
        "Full-Stack JavaScript & TypeScript Developer",
        "Learning Technologist",
    ],
};
