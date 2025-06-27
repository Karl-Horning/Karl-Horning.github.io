import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonType = "primary" | "secondary" | "small";

interface ButtonLinkProps {
    href: string;
    text: string;
    type?: ButtonType;
    icon?: ReactNode;
    external?: boolean;
    className?: string;
}

/**
 * A reusable link-style button component that supports multiple styles and optional icon.
 *
 * @component
 * @param {string} href - The link URL.
 * @param {string} text - The button text.
 * @param {"primary" | "secondary" | "small"} [type="primary"] - Button style variant: "primary" | "secondary" | "small".
 * @param {ReactNode} [icon] - Optional icon element.
 * @param {boolean} [external] - If true, forces external behaviour. Defaults to detecting via href.
 * @param {string} [className] - Additional Tailwind classes.
 */
export default function ButtonLink({
    href,
    text,
    type = "primary",
    icon,
    external,
    className = "",
}: ButtonLinkProps) {
    const isExternal = external ?? href.startsWith("http");

    const baseStyles =
        "inline-block font-bold rounded transition-colors duration-300";

    const typeStyles = {
        primary:
            "bg-primary text-white px-6 py-3 text-xl hover:bg-highlight hover:text-black shadow",
        secondary:
            "border-4 border-primary text-primary px-6 py-2 text-xl hover:bg-primary hover:text-white",
        small: "bg-primary text-white text-sm px-3 py-1 shadow hover:bg-highlight hover:text-hero",
    };

    const mergedClass = twMerge(baseStyles, typeStyles[type], className);

    const content = (
        <>
            {text}
            {icon && <span className="ml-1">{icon}</span>}
        </>
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
        <Link href={href} className={mergedClass}>
            {content}
        </Link>
    );
}
