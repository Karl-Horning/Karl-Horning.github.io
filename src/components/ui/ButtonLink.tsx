import Link from "next/link";
import { ReactNode } from "react";
import { ButtonType, getButtonClasses } from "./buttonStyles";

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
 * @param href - The link URL.
 * @param text - The button text.
 * @param [type="primary"] - Button style variant: "primary" | "secondary" | "small".
 * @param [icon] - Optional icon element.
 * @param [external] - If true, forces external behaviour. Defaults to detecting via href.
 * @param [className] - Additional Tailwind classes.
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
    const mergedClass = getButtonClasses(type, className);
    const content = (
        <span className="inline-flex items-center gap-2">
            {icon && <span className="inline-block">{icon}</span>}
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
        <Link href={href} className={mergedClass}>
            {content}
        </Link>
    );
}
