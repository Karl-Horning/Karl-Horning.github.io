import { internalRoutes } from "@/constants/links";
import Link from "next/link";

type NavLink = {
    label: string;
    href: string;
};

interface DesktopMenuProps {
    links?: NavLink[];
}

/**
 * Desktop navigation menu component for larger viewports.
 *
 * @component
 * @param {DesktopMenuProps} props - Optional array of nav links (label and href).
 * @returns The rendered desktop menu.
 */
export default function DesktopMenu({
    links = [
        { label: "About", href: internalRoutes.about },
        { label: "Blog", href: internalRoutes.blog },
        { label: "Contact", href: internalRoutes.contact },
    ],
}: DesktopMenuProps) {
    return (
        <div className="hidden space-x-6 text-text md:flex">
            {links.map(({ label, href }) => (
                <Link
                    key={label}
                    href={href}
                    className="transition-colors duration-300 hover:text-primary"
                >
                    {label}
                </Link>
            ))}
        </div>
    );
}
