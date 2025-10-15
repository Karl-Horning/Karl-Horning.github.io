// src/components/cmalt/CmaltTopList.tsx
import Link from "next/link";
import type { NavLink } from "@/lib/helpers/cmaltNavHelpers";

/**
 * Renders the top-level (non-section) CMALT links.
 *
 * @param props - Component properties.
 * @param props.items - Array of top-level CMALT links.
 * @param props.isActive - Predicate to determine if a link is active.
 * @returns A simple list of top-level links.
 */
export function CmaltTopList({
    items,
    isActive,
}: {
    items: NavLink[];
    isActive: (href: string, isExact: boolean) => boolean;
}) {
    return (
        <ul className="space-y-1">
            {items.map(({ href, title, isExact }) => {
                const active = isActive(href, isExact);
                return (
                    <li key={href}>
                        <Link
                            href={href}
                            aria-current={active ? "page" : undefined}
                            className={[
                                "block rounded px-2 py-1 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800",
                                active
                                    ? "text-primary dark:bg-primary dark:text-white"
                                    : "text-slate-700",
                            ].join(" ")}
                        >
                            {title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
