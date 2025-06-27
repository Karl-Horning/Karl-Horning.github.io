"use client";

import { useState } from "react";
import CloseIcon from "../Icons/CloseIcon";
import HamburgerIcon from "../Icons/HamburgerIcon";
import DesktopMenu from "./DesktopMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <nav
            role="navigation"
            aria-label="Main menu"
            className="fixed z-30 w-full bg-background px-6 shadow-md"
        >
            <div className="mx-auto max-w-6xl px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Logo />

                    {/* Mobile toggle button */}
                    <div className="md:hidden">
                        <button
                            id="menu-btn"
                            className="text-text rounded focus:outline-none focus:ring-2 focus:ring-primary"
                            aria-label="Toggle menu"
                            aria-controls="mobile-menu"
                            aria-expanded={isMenuOpen}
                            aria-haspopup="true"
                            type="button"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? (
                                <CloseIcon
                                    id="icon-close"
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                    focusable="false"
                                />
                            ) : (
                                <HamburgerIcon
                                    id="icon-hamburger"
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                    focusable="false"
                                />
                            )}
                        </button>
                    </div>

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
