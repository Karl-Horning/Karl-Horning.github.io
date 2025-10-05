"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getPrevNext } from "@/lib/cmalt/cmalt-nav";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

/**
 * Renders the CMALT section navigation component for moving
 * between adjacent pages (“Previous” and “Next”).
 *
 * This component:
 * - Retrieves the current path using Next.js `usePathname()`.
 * - Determines the previous and next pages from a navigation map via `getPrevNext()`.
 * - Displays accessible navigation cards with arrow icons and labels.
 * - Gracefully handles missing navigation targets by showing a placeholder.
 *
 * @remarks
 * Each link is styled as a card with responsive layout, supporting both
 * light and dark themes. The `aria-label` attributes ensure screen readers
 * correctly announce navigation context.
 *
 * @component
 * @returns A `<nav>` element containing “Previous” and “Next” navigation cards.
 */
export default function PrevNext() {
    const pathname = usePathname();
    const { prev, next } = getPrevNext(pathname ?? "");

    return (
        <nav
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
            aria-label="CMALT pagination"
        >
            {prev ? (
                <Link
                    href={prev.href}
                    className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
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
                <div
                    className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition  dark:border-slate-800 dark:bg-slate-900"
                    aria-label={`Previous: None`}
                >
                    <FiArrowLeft
                        className="mt-0.5 shrink-0 self-start"
                        aria-hidden
                    />

                    <span className="min-w-0 flex-1">
                        <span className="block text-xs opacity-70">
                            Previous
                        </span>
                        <span className="block overflow-hidden whitespace-normal font-semibold leading-snug [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                            —
                        </span>
                    </span>
                </div>
            )}
            {next ? (
                <Link
                    href={next.href}
                    className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
                    aria-label={`Next: ${next.label}`}
                >
                    {/* Text fills available space, keeping arrow flush right */}
                    <span className="min-w-0 flex-1">
                        <span className="block text-xs opacity-70">Next</span>
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
                <div
                    className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition dark:border-slate-800 dark:bg-slate-900"
                    aria-label={`Next: None`}
                >
                    {/* Text fills available space, keeping arrow flush right */}
                    <span className="min-w-0 flex-1">
                        <span className="block text-xs opacity-70">Next</span>
                        <span className="block overflow-hidden whitespace-normal font-semibold leading-snug [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                            —
                        </span>
                    </span>

                    {/* Right arrow icon pinned to edge */}
                    <FiArrowRight
                        className="mt-0.5 shrink-0 self-start"
                        aria-hidden
                    />
                </div>
            )}
        </nav>
    );
}
