"use client";

import { ReactNode, useState, useEffect } from "react";
import Sidebar from "../cmalt/Sidebar";
import Header from "../cmalt/Header";
import PrevNext from "../cmalt/PrevNext";
import ContactCta from "../ui/ContactCta";

interface CMALTLayoutProps {
    /**
     * The main content for the CMALT page, typically markdown-rendered sections.
     */
    children: ReactNode;

    /**
     * The title displayed in the CMALT header section.
     */
    title: string;

    /**
     * The date the page was last updated, in ISO 8601 format (for example, "2025-09-10").
     */
    lastUpdated: string;

    /**
     * An optional thumbnail image for future use (not currently implemented).
     */
    thumbnail?: string;
}

/**
 * Provides the layout structure for CMALT portfolio pages.
 *
 * Renders the page header, sidebar navigation, content area, and
 * previous/next navigation controls. The component also calculates
 * an estimated reading time based on the visible article text.
 *
 * @component
 * @param {CMALTLayoutProps} props - The properties for the CMALT layout.
 * @param {ReactNode} props.children - The main content of the CMALT page.
 * @param {string} props.title - The page title displayed in the header.
 * @param {string} props.lastUpdated - The ISO 8601 date when the page was last updated.
 * @param {string} [props.thumbnail] - Optional thumbnail image (not currently used).
 * @returns The structured layout for a CMALT portfolio page, including header, content, sidebar, and footer sections.
 */
export default function CMALTLayout({
    children,
    title,
    lastUpdated,
}: CMALTLayoutProps) {
    const [readingTime, setReadingTime] = useState<string>("1 min read");

    useEffect(() => {
        const calculateReadingTime = (text: string): string => {
            const wordsPerMinute = 150;
            const words = text.trim().split(/\s+/).length;
            const minutes = Math.ceil(words / wordsPerMinute);
            return `${minutes} min read`;
        };

        const updateReadingTime = () => {
            const mainText = document.querySelector(
                "article.prose"
            ) as HTMLElement | null;

            if (mainText) {
                const text = mainText.innerText || "";
                const readingTime = calculateReadingTime(text);
                setReadingTime(readingTime);
            }
        };

        // Delay ensures content has fully rendered
        const timeout = setTimeout(updateReadingTime, 100);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pt-20 md:grid-cols-[18rem_1fr]">
                <Sidebar />
                <div className="space-y-8">
                    <Header
                        title={title}
                        lastUpdated={lastUpdated}
                        readingTime={readingTime}
                    />
                    <article className="prose max-w-none">{children}</article>
                    <PrevNext />
                </div>
            </div>
            <ContactCta
                title="Questions about this section?"
                description="Contact me for clarifications or further evidence."
            />
        </>
    );
}
