import Link from "next/link";
import React, { ReactNode } from "react";
import { ButtonType, getButtonClasses } from "./buttonStyles";
import { decorateIcon } from "@/lib/helpers";

interface ButtonLinkProps {
    /**
     * The link URL (internal or external).
     */
    href: string;

    /**
     * The visible button text.
     */
    text: ReactNode;

    /**
     * Button style variant.
     * Defaults to `"primary"`.
     */
    type?: ButtonType;

    /**
     * Optional icon element to render before the text.
     */
    icon?: ReactNode;

    /**
     * If true, forces external behaviour (opens in a new tab).
     * Defaults to detecting via `href` (treats URLs starting with http as external).
     */
    external?: boolean;

    /**
     * Additional Tailwind CSS utility classes.
     */
    className?: string;

    /**
     * Optional accessible label for the icon.
     * If omitted, the icon is marked as decorative (hidden from screen readers).
     */
    iconLabel?: string;
}

/**
 * A reusable button-styled link component.
 *
 * Renders either a Next.js `Link` (for internal routes) or
 * an `<a>` element (for external URLs). Supports multiple style
 * variants, optional icons, and accessibility-friendly icon labelling.
 *
 * @param props - The properties for the button link.
 * @param props.href - The link URL (internal or external).
 * @param props.text - The button text.
 * @param props.type - Optional button variant (`"primary"`, `"secondary"`, or `"small"`).
 * @param props.icon - Optional icon element.
 * @param props.external - Force external link behaviour (default: auto-detected).
 * @param props.className - Additional Tailwind CSS classes to merge.
 * @param props.iconLabel - Accessible label for the icon (omit if decorative).
 * @returns A styled link element (`<a>` or `Link`) with optional icon and text.
 */
export default function ButtonLink({
    href,
    text,
    type = "primary",
    icon,
    external,
    className = "",
    iconLabel,
}: ButtonLinkProps) {
    const isExternal = external ?? href.startsWith("http");
    const mergedClass = getButtonClasses(type, className);

    const content = (
        <span className="inline-flex items-center gap-2">
            {icon && (
                <span className="inline-block">
                    {decorateIcon(icon, iconLabel)}
                </span>
            )}
            {text}
        </span>
    );

    return isExternal ? (
        <a
            href={href}
            className={mergedClass}
            target="_blank"
            rel="noopener noreferrer"
        >
            {content}
        </a>
    ) : (
        <Link
            href={href}
            className={mergedClass}
            type={href.endsWith("rss.xml") ? "application/rss+xml" : undefined}
        >
            {content}
        </Link>
    );
}
