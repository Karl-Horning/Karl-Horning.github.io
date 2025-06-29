import { externalLinks, internalRoutes } from "@/constants/links";
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
        { label: "Blog", href: externalLinks.blog },
        { label: "Contact", href: internalRoutes.contact },
    ],
}: DesktopMenuProps) {
    return (
        <div className="hidden space-x-6 text-text md:flex">
            {links.map(({ label, href }) => (
                <Link
                    key={label}
                    href={href}
                    className="inline-block rounded px-2 py-1 transition-colors duration-300 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                    {label}
                </Link>
            ))}
        </div>
    );
}
