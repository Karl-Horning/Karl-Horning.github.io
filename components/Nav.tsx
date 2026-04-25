"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
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
 * mobile drawer. The logo and nav chrome are hidden while the homepage
 * hero is visible and revealed once the hero scrolls out of view.
 *
 * @return The primary site navigation element.
 */
export default function Nav() {
    const pathname = usePathname();
    const isHomepage = pathname === "/";

    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [scrolledPastHero, setScrolledPastHero] = useState(false);

    // Nav chrome is fully revealed when not on the homepage, or once the
    // hero sentinel has scrolled out of view.
    const navRevealed = !isHomepage || scrolledPastHero;

    // Logo is visible when the nav is revealed or the mobile menu is open.
    const logoVisible = navRevealed || isOpen;

    // Portal requires document.body — only render after hydration
    // eslint-disable-next-line react-hooks/set-state-in-effect
    useEffect(() => { setMounted(true); }, []);

    useEffect(() => {
        if (!isHomepage) return;
        const sentinel = document.getElementById("hero-rule");
        if (!sentinel) return;
        const observer = new IntersectionObserver(
            ([entry]) => setScrolledPastHero(!entry.isIntersecting),
            { threshold: 0 }
        );
        observer.observe(sentinel);
        return () => observer.disconnect();
    }, [isHomepage]);

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

    const hamburgerRef = useRef<HTMLButtonElement>(null);
    const drawerRef = useRef<HTMLDivElement>(null);

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
            <nav
                className={`${styles.nav} ${!navRevealed && !isOpen ? styles.navTransparent : ""}`}
                aria-label="Main navigation"
            >
                <div className={styles.navBar}>
                    <div
                        className={`${styles.logoWrapper} ${!logoVisible ? styles.logoHidden : ""}`}
                        aria-hidden={!logoVisible || undefined}
                    >
                        <Logo />
                    </div>

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
                        aria-expanded={isOpen ? "true" : "false"}
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
