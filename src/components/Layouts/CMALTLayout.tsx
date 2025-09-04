"use client";

import { ReactNode, useState, useEffect } from "react";
import CMALTSidebar from "@/components/CMALT/CMALTSidebar";
import CMALTHeader from "../CMALT/CMALTHeader";
import CMALTPrevNext from "../CMALT/CMALTPrevNext";

interface CMALTLayoutProps {
    children: ReactNode;
    title: string;
    lastUpdated: string;
    thumbnail?: string;
}

/**
 * Layout wrapper for CMALT portfolio pages.
 *
 * Includes a hero header with title, last updated date, and reading time,
 * a main content area, and a sidebar. Automatically injects and calculates
 * estimated reading time based on visible content.
 *
 * @param {object} props - Component props.
 * @param {ReactNode} props.children - Main page content.
 * @param {string} props.title - Title shown in the hero section.
 * @param {string} props.lastUpdated - ISO 8601 date string for when the page was last updated.
 * @param {string} [props.thumbnail="/img/cmalt-default.webp"] - Optional background image URL for the header.
 * @returns Page layout structure for CMALT pages.
 */
export default function CMALTLayout({
    children,
    title,
    lastUpdated,
    thumbnail = "/img/cmalt-default.webp", // fallback if not provided
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
            const mainContent = document.querySelector(
                "main.prose-cmalt"
            ) as HTMLElement | null;

            if (mainContent) {
                const text = mainContent.innerText || "";
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
            <CMALTHeader
                title={title}
                lastUpdated={lastUpdated}
                thumbnail={thumbnail}
                readingTime={readingTime}
            />

            <div className="mx-auto grid max-w-4xl gap-12 px-4 py-16 text-[var(--text)] lg:grid-cols-3">
                <main className="prose-cmalt lg:col-span-2">
                    {children}
                    <CMALTPrevNext />
                </main>
                <CMALTSidebar />
            </div>
        </>
    );
}
