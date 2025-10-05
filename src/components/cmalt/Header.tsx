import { icons } from "@/lib/constants/icons";
import Pill from "../ui/Pill";

const { CalendarIcon, ClockIcon } = icons;

interface HeaderProps {
    /**
     * The specific CMALT section or page title to display.
     */
    title: string;

    /**
     * The ISO 8601 date string representing the last update.
     */
    lastUpdated: string;

    /**
     * The estimated reading time for the content.
     * Defaults to `"1 min read"`.
     */
    readingTime?: string;
}

/**
 * Displays the CMALT page header containing the section title,
 * last updated date, and estimated reading time.
 *
 * Uses the `Pill` component for structured metadata and includes
 * light and dark mode styling consistent with the site’s theme.
 *
 * @param props - Component properties.
 * @param props.title - The section or page title displayed in the header.
 * @param props.lastUpdated - The ISO 8601 date representing the last content update.
 * @param props.readingTime - Optional estimated reading time (default: `"1 min read"`).
 * @returns A styled `<section>` element containing the CMALT header information.
 */
export default function Header({
    title,
    lastUpdated,
    readingTime = "1 min read",
}: HeaderProps) {
    return (
        <section className="hero-bg rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h1 className="text-3xl font-extrabold tracking-tight">
                CMALT {title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <Pill
                    icon={<CalendarIcon />}
                    text={
                        <time dateTime={lastUpdated}>
                            {new Date(lastUpdated).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                            })}
                        </time>
                    }
                />
                <Pill icon={<ClockIcon />} text={readingTime} />
            </div>
        </section>
    );
}
