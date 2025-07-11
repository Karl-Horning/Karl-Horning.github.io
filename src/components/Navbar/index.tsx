"use client";

import { useState } from "react";
import DesktopMenu from "@/components/Navbar/DesktopMenu";
import Logo from "@/components/Navbar/Logo";
import MobileMenu from "@/components/Navbar/MobileMenu";
import MobileToggleButton from "@/components/Navbar/MobileToggleButton";

/**
 * Navigation bar component.
 *
 * Displays a fixed navigation bar with a logo, desktop navigation links,
 * and a responsive mobile toggle that reveals a collapsible mobile menu.
 *
 * Features:
 * - Uses `useState` to manage mobile menu open/closed state
 * - Renders `MobileToggleButton` which switches icons and toggles state
 * - Shows `DesktopMenu` on medium+ screens and `MobileMenu` on small screens
 *
 * Accessibility:
 * - Uses ARIA roles and labels for navigation and toggle buttons
 *
 * @component
 * @returns The rendered navigation bar component
 */
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    /**
     * Toggles the mobile menu open/closed.
     *
     * Updates the `isMenuOpen` state and triggers re-rendering of
     * the toggle button and collapsible menu.
     */
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <nav
            role="navigation"
            aria-label="Main menu"
            className="fixed z-30 w-full bg-hero px-6 shadow-md"
        >
            <div className="mx-auto max-w-6xl px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Logo />

                    {/* Mobile toggle button */}
                    <MobileToggleButton
                        isOpen={isMenuOpen}
                        onToggle={toggleMenu}
                    />

                    {/* Desktop Menu */}
                    <DesktopMenu />
                </div>
            </div>

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </nav>
    );
}
