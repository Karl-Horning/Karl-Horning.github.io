import { icons } from "@/lib/constants/icons";
const { CalendarIcon, ClockIcon } = icons;

interface CMALTHeaderProps {
    title: string;
    lastUpdated: string;
    readingTime?: string;
    thumbnail?: string;
}

/**
 * Displays the hero header for a CMALT portfolio page.
 *
 * Includes a background image, page title, last updated date,
 * and estimated reading time. Used as the top section of each
 * CMALT layout page.
 *
 * @param {CMALTHeaderProps} props - Component properties.
 * @param {string} props.title - The main heading shown on the page.
 * @param {string} props.lastUpdated - ISO 8601 date string representing the last update.
 * @param {string} [props.readingTime="1 min read"] - Optional estimated reading time displayed alongside the last updated date.
 * @param {string} [props.thumbnail="/img/cmalt-default.webp"] - Optional background image URL for the header section.
 * @returns The styled header section for CMALT portfolio pages.
 */
export default function CMALTHeader({
    title,
    lastUpdated,
    readingTime = "1 min read",
    thumbnail = "/img/cmalt-default.webp",
}: CMALTHeaderProps) {
    return (
        <header className="relative px-4 py-32 text-white">
            {/* Background image layer */}
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${thumbnail})` }}
            />
            {/* Colour overlay */}
            <div className="cmalt-hero absolute inset-0" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-4xl text-center">
                <h1 className="cmalt-title">{title}</h1>
                <p className="flex flex-col items-center justify-center gap-2 text-sm opacity-80 md:flex-row">
                    <span className="flex items-center gap-1">
                        <CalendarIcon aria-hidden="true" />
                        Last Updated:{" "}
                        <time dateTime={lastUpdated}>
                            {new Date(lastUpdated).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                            })}
                        </time>
                    </span>
                    <span className="mx-1 hidden text-xs md:inline">•</span>
                    <span className="flex items-center gap-1">
                        <ClockIcon aria-hidden="true" />
                        <span id="reading-time" aria-live="polite">
                            {readingTime}
                        </span>
                    </span>
                </p>
            </div>
        </header>
    );
}
