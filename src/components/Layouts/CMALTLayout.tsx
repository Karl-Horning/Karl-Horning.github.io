import { ReactNode } from "react";
import CMALTSidebar from "@/components/CMALT/CMALTSidebar";
import { icons } from "@/constants/icons";
const { CalendarIcon, ClockIcon } = icons;
import Script from "next/script";

/**
 * Layout for CMALT portfolio pages, including a hero header and sidebar.
 *
 * @param children - The main content for the page.
 * @param title - The page title (h1), displayed in the hero section.
 * @param lastUpdated - ISO date string for when the page was last updated.
 * @param thumbnail - Optional background image URL for the header.
 */
export default function CMALTLayout({
    children,
    title,
    lastUpdated,
    thumbnail = "/img/cmalt-default.webp", // fallback if not provided
}: {
    children: ReactNode;
    title: string;
    lastUpdated: string;
    thumbnail?: string;
}) {
    return (
        <>
            <header
                className="relative bg-cover bg-center px-4 py-32 text-white"
                style={{ backgroundImage: `url(${thumbnail})` }}
            >
                <div className="cmalt-hero absolute inset-0" />
                <div className="relative z-10 mx-auto max-w-4xl text-center">
                    <h1 className="cmalt-title">{title}</h1>
                    <p className="flex items-center justify-center gap-2 text-sm opacity-80">
                        <CalendarIcon aria-hidden="true" />
                        Last Updated:
                        <time dateTime={lastUpdated}>
                            {new Date(lastUpdated).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                            })}
                        </time>
                        <span className="mx-1 text-xs">•</span>
                        <ClockIcon aria-hidden="true" />
                        <span id="reading-time">Calculating...</span>
                    </p>
                </div>
            </header>

            <div className="mx-auto grid max-w-4xl gap-12 px-4 py-16 text-[var(--text)] lg:grid-cols-3">
                <main className="prose-cmalt lg:col-span-2">{children}</main>
                <CMALTSidebar />
            </div>
            <Script id="reading-time" strategy="lazyOnload">
                {`
                    const calculateReadingTime = (text) => {
                        const wordsPerMinute = 225;
                        const words = text.trim().split(/\\s+/).length;
                        const minutes = Math.ceil(words / wordsPerMinute);
                        return \`\${minutes} min read\`;
                    };

                    const updateReadingTime = () => {
                        const mainContent = document.querySelector("main");
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
