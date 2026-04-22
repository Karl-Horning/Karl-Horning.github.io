"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import styles from "@/components/Nav.module.css";

/**
 * A single navigation link entry.
 */
interface NavLink {
    /** URL the link points to (absolute path or hash anchor). */
    href: string;
    /** Visible label rendered inside the anchor. */
    label: string;
}

/** Links rendered in both the desktop and mobile navigation menus. */
const NAV_LINKS: NavLink[] = [
    { href: "/#projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

/**
 * Site-wide navigation bar with a responsive mobile menu.
 *
 * Renders a fixed header containing the site {@link Logo}, desktop
 * navigation links, and a hamburger button that toggles a full-width
 * mobile drawer. All interactive elements expose appropriate ARIA
 * attributes for keyboard and screen-reader users.
 *
 * @return The primary site navigation element.
 */
export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    // Toggles the mobile menu between open and closed states.
    function toggleMobileMenu() {
        setIsOpen((prev) => !prev);
    }

    // Closes the mobile menu after a link is activated.
    function closeMobileMenu() {
        setIsOpen(false);
    }

    return (
        <header>
            <nav className={styles.nav} aria-label="Main navigation">
                <div className={styles.navBar}>
                    <Logo />

                    <ul className={styles.navLinks} role="list">
                        {NAV_LINKS.map(({ href, label }) => (
                            <li key={href}>
                                <Link href={href}>{label}</Link>
                            </li>
                        ))}
                    </ul>

                    <button
                        type="button"
                        className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ""}`}
                        aria-label={
                            isOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={isOpen ? "true" : "false"}
                        aria-controls="mobile-nav"
                        onClick={toggleMobileMenu}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>

                <div
                    id="mobile-nav"
                    className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}
                    role="navigation"
                    aria-label="Mobile navigation"
                >
                    {NAV_LINKS.map(({ href, label }) => (
                        <Link key={href} href={href} onClick={closeMobileMenu}>
                            {label}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}
