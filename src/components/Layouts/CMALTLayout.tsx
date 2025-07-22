import { ReactNode } from "react";
import CMALTSidebar from "@/components/CMALT/CMALTSidebar";
import Script from "next/script";
import CMALTHeader from "../CMALT/CMALTHeader";

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
    return (
        <>
            <CMALTHeader
                title={title}
                lastUpdated={lastUpdated}
                thumbnail={thumbnail}
            />

            <div className="mx-auto grid max-w-4xl gap-12 px-4 py-16 text-[var(--text)] lg:grid-cols-3">
                <main className="prose-cmalt lg:col-span-2">{children}</main>
                <CMALTSidebar />
            </div>
            <Script id="reading-time" strategy="lazyOnload">
                {`
                    const calculateReadingTime = (text) => {
                        const wordsPerMinute = 150;
                        const words = text.trim().split(/\\s+/).length;
                        const minutes = Math.ceil(words / wordsPerMinute);
                        return \`\${minutes} min read\`;
                    };

                    const updateReadingTime = () => {
                        const mainContent = document.querySelector("main.prose-cmalt");
                        const readingTimeEl = document.getElementById("reading-time");

                        if (mainContent && readingTimeEl) {
                            const text = mainContent.innerText || "";
                            const readingTime = calculateReadingTime(text);
                            readingTimeEl.textContent = readingTime;
                        }
                    };

                    if (document.readyState === "complete" || document.readyState === "interactive") {
                        updateReadingTime();
                    } else {
                        document.addEventListener("DOMContentLoaded", updateReadingTime);
                    }
                `}
            </Script>
        </>
    );
}
