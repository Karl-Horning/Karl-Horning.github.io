"use client";

import { useEffect, useMemo, useState } from "react";

type HeadingItem = { id: string; text: string };

/**
 * Converts a string into a URL-safe slug suitable for use as an HTML `id`.
 *
 * @param text - The text to be slugified.
 * @returns A lowercased, hyphen-separated string with non-alphanumeric characters removed.
 */
function slugify(text: string) {
    return text
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-]/g, "");
}

interface ProjectsSidebarProps {
    /**
     * CSS selector for the content container to scan for headings.
     * Defaults to `"#main"`.
     */
    rootSelector?: string;

    /**
     * Margin around the root element used by the IntersectionObserver.
     * Adjusts when headings are considered "active" during scrolling.
     * Defaults to `"0px 0px -70% 0px"`.
     */
    rootMargin?: string;
}

/**
 * A dynamic sidebar component that generates a table of contents ("On this page")
 * by scanning for `<h2>` elements within a specified container.
 *
 * Each heading is assigned a unique slug-based ID (if not already present),
 * and the active section is highlighted based on scroll position using
 * the Intersection Observer API.
 *
 * Hidden automatically if no headings are detected.
 *
 * @component
 * @param props - Component properties.
 * @param props.rootSelector - CSS selector for the main content area to scan for headings (default: `"#main"`).
 * @param props.rootMargin - Margin offset controlling when headings become active (default: `"0px 0px -70% 0px"`).
 * @returns A sticky sidebar `<aside>` element listing all `<h2>` headings found in the main content.
 */
export default function ProjectsSidebar({
    rootSelector = "#main",
    rootMargin = "0px 0px -70% 0px",
}: ProjectsSidebarProps) {
    const [headings, setHeadings] = useState<HeadingItem[]>([]);
    const [activeId, setActiveId] = useState<string | null>(null);

    // Stable thresholds for the observer
    const observerOptions = useMemo<IntersectionObserverInit>(
        () => ({ root: null, rootMargin, threshold: 0.1 }),
        [rootMargin]
    );

    useEffect(() => {
        const container = document.querySelector(rootSelector);
        if (!container) {
            setHeadings([]);
            return;
        }

        const h2s = Array.from(
            container.querySelectorAll<HTMLHeadingElement>("h2")
        );

        // Ensure each h2 has an id, and collect items
        const items: HeadingItem[] = h2s.map((h2) => {
            const existing = h2.id && h2.id.trim();
            const id = existing || slugify(h2.textContent || "");
            if (!existing) h2.id = id;
            return { id, text: h2.textContent || "" };
        });

        setHeadings(items);

        // Scroll-spy observer setup
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, observerOptions);

        h2s.forEach((h) => observer.observe(h));

        // Cleanup when component unmounts or dependencies change        return () => observer.disconnect();
    }, [rootSelector, observerOptions]);

    // Hide the sidebar entirely if no headings are found
    if (headings.length === 0) {
        return null;
    }

    return (
        <aside className="sticky top-[5rem] hidden max-h-[calc(100vh-6rem)] overflow-auto rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm md:block dark:border-slate-800 dark:bg-slate-900">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
                On this page
            </p>
            <nav className="toc space-y-1" aria-label="On this page">
                {headings.map((h) => {
                    const isActive = activeId === h.id;
                    return (
                        <a
                            key={h.id}
                            href={`#${h.id}`}
                            className={[
                                "block rounded px-2 py-1 text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800",
                                isActive ? "font-semibold underline" : "",
                            ].join(" ")}
                        >
                            {h.text}
                        </a>
                    );
                })}
            </nav>
        </aside>
    );
}
