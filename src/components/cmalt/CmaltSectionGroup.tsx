// src/components/cmalt/CmaltSectionGroup.tsx
import Link from "next/link";
import { Chevron } from "./Chevron";
import { CmaltNavLink } from "@/types";

/**
 * Collapsible CMALT section group (for example, "Section 1").
 *
 * Handles its own expanded visual state (controlled by props) and
 * renders child links with active highlighting.
 *
 * @param props - Component properties.
 * @param props.id - Unique ID for the collapsible panel element.
 * @param props.label - Visible section label (for example, "Section 1").
 * @param props.items - Links belonging to this section.
 * @param props.expanded - Whether the panel is expanded.
 * @param props.onToggle - Handler to toggle expansion.
 * @param props.isActive - Predicate to determine if a link is active.
 * @returns A collapsible section with a list of links.
 */
export function CmaltSectionGroup({
    id,
    label,
    items,
    expanded,
    onToggle,
    isActive,
}: {
    id: string;
    label: string;
    items: CmaltNavLink[];
    expanded: boolean;
    onToggle: () => void;
    isActive: (href: string, isExact: boolean) => boolean;
}) {
    return (
        <div>
            <button
                type="button"
                aria-expanded={expanded}
                aria-controls={id}
                onClick={onToggle}
                className="mb-1 flex w-full items-center justify-between rounded px-2 py-1 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
            >
                <span>{label}</span>
                <Chevron
                    className={`h-4 w-4 shrink-0 transition-transform ${expanded ? "rotate-0" : "rotate-90"}`}
                />
            </button>

            <ul
                id={id}
                className={`space-y-1 overflow-hidden transition-[max-height,opacity] duration-200 ease-out ${
                    expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
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
                                        ? "pointer-events-none text-primary dark:bg-primary dark:text-white"
                                        : "text-slate-700",
                                ].join(" ")}
                            >
                                {title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
