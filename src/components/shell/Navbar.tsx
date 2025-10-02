"use client";

import DesktopMenu from "@/components/shell/DesktopMenu";
import Logo from "@/components/shell/Logo";
import MobileToggleButton from "@/components/shell/MobileToggleButton";

interface NavbarProps {
    /**
     * Whether the mobile menu is currently open.
     */
    isMenuOpen: boolean;

    /**
     * Callback to toggle the mobile menu open/closed.
     */
    onToggleMenu: () => void;
}

/**
 * Main navigation bar component.
 *
 * Renders the site logo, desktop navigation links, and a toggle button
 * for the mobile menu. Designed to be sticky at the top of the viewport.
 *
 * Features:
 * - Displays the `Logo` at the left
 * - Shows `DesktopMenu` on medium+ screens
 * - Provides `MobileToggleButton` to open/close the mobile menu
 *
 * Accessibility:
 * - Uses `role="navigation"` and `aria-label="Main menu"`
 * - Toggle button includes `aria-controls`, `aria-expanded`, and dynamic labels
 *
 * @param props - The navigation bar properties.
 * @param props.isMenuOpen - Whether the mobile menu is currently open.
 * @param props.onToggleMenu - Function to toggle the mobile menu state.
 * @returns A sticky `<nav>` element containing logo, toggle, and navigation links.
 */
export default function Navbar({ isMenuOpen, onToggleMenu }: NavbarProps) {
    return (
        <nav
            role="navigation"
            aria-label="Main menu"
            className="glass sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 dark:border-slate-800 dark:bg-slate-950/70"
        >
            <div className="mx-auto max-w-6xl px-4">
                <div className="flex h-16 items-center justify-between">
                    <Logo />
                    <MobileToggleButton
                        isOpen={isMenuOpen}
                        onToggle={onToggleMenu}
                        aria-controls="mobile-menu"
                        aria-expanded={isMenuOpen}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    />
                    <DesktopMenu />
                </div>
            </div>
        </nav>
    );
}
