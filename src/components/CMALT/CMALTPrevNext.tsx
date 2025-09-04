"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getPrevNext } from "@/lib/cmalt/cmalt-nav";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

/**
 * Renders Previous/Next navigation links for CMALT portfolio pages.
 *
 * Uses the current pathname to look up the neighbouring sections in
 * the linear CMALT reading order. Displays each link inside a styled
 * card-like box with a left/right arrow.
 *
 * Behaviour:
 * - On small screens: links stack vertically.
 * - On medium+ screens: links sit side-by-side, each taking up 50% width.
 * - If no previous or next page exists (start/end of portfolio), a muted dash is shown instead.
 *
 * Accessibility:
 * - Uses `aria-label` to announce the full link context (for example, "Previous: Contextual Statement").
 * - Maintains left-aligned text for readability.
 *
 * @returns A responsive navigation component with "Previous" and "Next" links.
 */
export default function CMALTPrevNext() {
    const pathname = usePathname();
    const { prev, next } = getPrevNext(pathname ?? "");

    return (
        <nav className="mt-10 border-t pt-5" aria-label="CMALT pagination">
            {/* Grid ensures stacked layout on mobile, side-by-side on desktop */}
            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
                {/* Previous link (always aligned left with arrow flush to the edge) */}
                <div className="flex">
                    {prev ? (
                        <Link
                            href={prev.href}
                            className="group flex w-full items-start gap-3 rounded-xl border px-4 py-3 hover:bg-accent/30 focus:outline-none focus:ring"
                            aria-label={`Previous: ${prev.label}`}
                        >
                            {/* Left arrow icon stays pinned to the edge */}
                            <FiArrowLeft
                                className="mt-0.5 shrink-0 self-start"
                                aria-hidden
                            />

                            {/* Text block flexes to fill available space */}
                            <span className="min-w-0 flex-1">
                                <span className="block text-xs opacity-70">
                                    Previous
                                </span>
                                <span
                                    className="block overflow-hidden whitespace-normal font-semibold leading-snug [-webkit-box-orient:vertical] [-webkit-line-clamp:2]"
                                    title={prev.label}
                                >
                                    {prev.label}
                                </span>
                            </span>
                        </Link>
                    ) : (
                        // If no previous page, show muted dash
                        <span className="text-sm opacity-50">—</span>
                    )}
                </div>

                {/* Next link (arrow sticks to far right, text fills space) */}
                <div className="flex">
                    {next ? (
                        <Link
                            href={next.href}
                            className="group flex w-full items-start gap-3 rounded-xl border px-4 py-3 hover:bg-accent/30 focus:outline-none focus:ring"
                            aria-label={`Next: ${next.label}`}
                        >
                            {/* Text fills available space, keeping arrow flush right */}
                            <span className="min-w-0 flex-1">
                                <span className="block text-xs opacity-70">
                                    Next
                                </span>
                                <span
                                    className="block overflow-hidden whitespace-normal font-semibold leading-snug [-webkit-box-orient:vertical] [-webkit-line-clamp:2]"
                                    title={next.label}
                                >
                                    {next.label}
                                </span>
                            </span>

                            {/* Right arrow icon pinned to edge */}
                            <FiArrowRight
                                className="mt-0.5 shrink-0 self-start"
                                aria-hidden
                            />
                        </Link>
                    ) : (
                        // If no next page, show muted dash
                        <span className="text-sm opacity-50">—</span>
                    )}
                </div>
            </div>
        </nav>
    );
}
