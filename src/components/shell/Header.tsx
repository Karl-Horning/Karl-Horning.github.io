"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

/**
 * Header component containing the main navigation bar and mobile menu.
 *
 * Manages the open/close state for the mobile navigation and passes it
 * down to both `Navbar` (for the toggle button) and `MobileMenu`
 * (for the collapsible panel).
 *
 * Features:
 * - Sticky positioning to remain at the top of the viewport
 * - `Navbar` for logo, desktop links, and mobile toggle
 * - `MobileMenu` for mobile navigation links, revealed when open
 *
 * Accessibility:
 * - Uses `aria-controls` and `aria-expanded` on the toggle button (handled in `Navbar`)
 * - Provides a labelled `role="navigation"` region in `MobileMenu`
 *
 * @component
 * @returns The rendered header with navigation bar and mobile menu.
 */
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    /**
     * Toggles the mobile menu open/closed.
     *
     * Updates the `isOpen` state, which controls both the toggle button
     * in `Navbar` and the expanded/collapsed state of `MobileMenu`.
     */
    const toggle = () => setIsOpen((v) => !v);

    return (
        <header className="sticky top-0 z-40">
            <div className="sticky">
                <Navbar isMenuOpen={isOpen} onToggleMenu={toggle} />
                <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
            </div>
        </header>
    );
}
