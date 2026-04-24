/**
 * @fileoverview Canonical list of all page routes.
 *
 * Used as the single source of truth for both the generated sitemap
 * and Playwright smoke tests. Add a route here when a new page is created.
 */

export const ROUTES = ["/"] as const;

export type Route = (typeof ROUTES)[number];
