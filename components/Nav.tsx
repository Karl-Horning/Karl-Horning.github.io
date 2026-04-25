"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
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
    const [mounted, setMounted] = useState(false);
    const hamburgerRef = useRef<HTMLButtonElement>(null);
    const drawerRef = useRef<HTMLDivElement>(null);

    // Portal requires document.body — only render after hydration
    // eslint-disable-next-line react-hooks/set-state-in-effect
    useEffect(() => { setMounted(true); }, []);

    useEffect(() => {
        function onResize() {
            if (window.innerWidth > 719) setIsOpen(false);
        }
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;
        function onPointerDown(e: PointerEvent) {
            const target = e.target as Node;
            if (
                !hamburgerRef.current?.contains(target) &&
                !drawerRef.current?.contains(target)
            ) {
                setIsOpen(false);
            }
        }
        document.addEventListener("pointerdown", onPointerDown);
        return () => document.removeEventListener("pointerdown", onPointerDown);
    }, [isOpen]);

    function toggleMobileMenu() {
        setIsOpen((prev) => !prev);
    }

    function closeMobileMenu() {
        setIsOpen(false);
    }

    const drawer = (
        <div
            ref={drawerRef}
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
    );

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
                        ref={hamburgerRef}
                        type="button"
                        className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ""}`}
                        aria-label={
                            isOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={isOpen}
                        aria-controls="mobile-nav"
                        onClick={toggleMobileMenu}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </nav>

            {mounted && createPortal(drawer, document.body)}
        </header>
    );
}
