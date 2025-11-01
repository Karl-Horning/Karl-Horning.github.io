import { SiteLink } from "@/types";

/**
 * Collection of internal route paths used for navigation and routing.
 *
 * Provides a single source of truth for route definitions within
 * the site to prevent hard-coded paths in multiple components.
 */
export const internalRoutes = {
    /** Home page */
    HomeRoute: "/",

    /** About page */
    AboutRoute: "/about",

    /** Blog page */
    BlogRoute: "/blog",

    /** CMALT page */
    CmaltRoute: "/cmalt",

    /** Contact page */
    ContactRoute: "/contact",

    /** Demos page */
    DemosRoute: "/demos",

    /** Projects page */
    ProjectsRoute: "/projects",

    /** XML file for feed */
    RssFeed: "/rss.xml",
} satisfies SiteLink;
