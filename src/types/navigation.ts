/**
 * Represents a single navigation link in the CMALT structure.
 *
 * Used by `getCmaltNav()` to build grouped navigation data
 * for the CMALT portfolio site.
 */
export type CmaltNavLink = {
    /** Display title of the navigation link. */
    title: string;

    /** Destination URL or path for the link. */
    href: string;

    /**
     * Whether this link should match the route exactly.
     * For example, the homepage link (`/cmalt`) uses `isExact: true`.
     */
    isExact: boolean;

    /**
     * Logical group in which to render the link.
     *
     * - `"top"` → Appears at the top of the navigation.
     * - `"section-n"` → Appears under Section N (for example, "section-1", "section-2").
     */
    group: "top" | `section-${number}`;
};
