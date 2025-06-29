import Link from "next/link";
import { ReactNode } from "react";
import { getButtonClasses, ButtonType } from "@/components/Buttons/buttonStyles";

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

    const mergedClass = getButtonClasses(type, className);

    const content = (
        <span className="inline-flex items-center gap-2">
            {text}
            {icon && <span className="inline-block">{icon}</span>}
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
