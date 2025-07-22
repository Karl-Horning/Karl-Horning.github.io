/**
 * A collection of external links used throughout the site.
 * Useful for maintaining consistent URLs for social profiles, apps, and repositories.
 */
export const externalLinks = {
    /** The blog subdomain */
    BlogLink: "https://www.karlhorning.dev/dev-blog",

    /** Karl Horning's CodePen profile link */
    CodePenLink: "https://codepen.io/karlhorning",

    /** Karl Horning's GitHub profile link  */
    GitHubLink: "https://github.com/Karl-Horning",

    /** Karl Horning's LinkedIn profile link */
    LinkedInLink: "https://www.linkedin.com/in/karl-horning",

    /** Karl Horning's portfolio site */
    PortfolioLink: "https://www.karlhorning.dev",

    /** Karl Horning's portfolio site repo */
    PortfolioRepoLink: "https://github.com/Karl-Horning/Karl-Horning.github.io",

    /** The RSS feed for the blog subdomain */
    RssLink: "https://www.karlhorning.dev/dev-blog/feed.xml",

    /** Learnlight iOS App link */
    LearnlightLink: {
        IosApp: "https://apps.apple.com/gb/app/learnlight/id1479158492",

        /** Learnlight Android App link */
        PlayApp:
            "https://play.google.com/store/apps/details?id=com.ct.learnlight",
    },
};

/**
 * A collection of internal route paths for use in navigation and routing.
 */
export const internalRoutes = {
    /** The home page */
    HomeRout: "/",

    /** The about page */

    AboutRoute: "/about",

    /** The CMALT page */
    CmaltRoute: "/cmalt",

    /** The contact page */
    ContactRoute: "/contact",
};

/**
 * A collection of links for use in the site navigation.
 */
export const navLinks = [
    { label: "About", href: internalRoutes.AboutRoute },
    { label: "Blog", href: externalLinks.BlogLink },
    { label: "CMALT", href: internalRoutes.CmaltRoute },
    { label: "Contact", href: internalRoutes.ContactRoute },
];
