import { SiteLink } from "@/types";

/**
 * Centralised collection of external URLs used across the site.
 *
 * Ensures consistent and maintainable links to social profiles,
 * external apps, and project repositories.
 */
export const externalLinks = {
    /** Blog subdomain */
    BlogLink: "https://www.karlhorning.dev/dev-blog",

    /** Karl Horning’s CodePen profile */
    CodePenLink: "https://codepen.io/karlhorning",

    /** Karl Horning’s GitHub profile */
    GitHubLink: "https://github.com/Karl-Horning",

    /** Karl Horning’s Ko-fi profile */
    KofiLink: "https://ko-fi.com/karlhorning",

    /** Karl Horning’s LinkedIn profile */
    LinkedInLink: "https://www.linkedin.com/in/karl-horning",

    /** Karl Horning’s portfolio site */
    PortfolioLink: "https://www.karlhorning.dev",

    /** GitHub repository for Karl Horning’s portfolio site */
    PortfolioRepoLink: "https://github.com/Karl-Horning/Karl-Horning.github.io",

    /** RSS feed for the blog */
    RssLink: "https://www.karlhorning.dev/rss.xml",
} satisfies SiteLink;
