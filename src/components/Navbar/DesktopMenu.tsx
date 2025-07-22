import { navLinks } from "@/constants/links";
import Link from "next/link";

/**
 * Desktop navigation menu component for larger viewports.
 *
 * @component
 * @returns The rendered desktop menu.
 */
export default function DesktopMenu() {
    return (
        <div className="hidden space-x-6 text-text md:flex">
            {navLinks.map(({ label, href }) => (
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
