import { icons } from "@/constants/icons";
const { CalendarIcon, ClockIcon } = icons;

interface CMALTHeaderProps {
    title: string;
    lastUpdated: string;
    thumbnail?: string;
}

/**
 * Displays the hero header for a CMALT portfolio page.
 * Includes a background image, page title, last updated date, and a placeholder
 * for dynamically calculated reading time.
 *
 * @param {CMALTHeaderProps} props - The properties for the header component.
 * @param {string} props.title - The title of the page, displayed as the main heading.
 * @param {string} props.lastUpdated - An ISO 8601 date string representing the last update date.
 * @param {string} [props.thumbnail="/img/cmalt-default.webp"] - Optional background image URL; falls back to a default.
 * @returns The header section of the CMALT page.
 */
export default function CMALTHeader({
    title,
    lastUpdated,
    thumbnail = "/img/cmalt-default.webp",
}: CMALTHeaderProps) {
    return (
        <header
            className="relative bg-cover bg-center px-4 py-32 text-white"
            style={{ backgroundImage: `url(${thumbnail})` }}
        >
            <div className="cmalt-hero absolute inset-0" />
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
                        <span id="reading-time">Calculating...</span>
                    </span>
                </p>
            </div>
        </header>
    );
}
