import { externalLinks, internalRoutes } from "@/constants/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
    label: string;
    href: string;
};

interface MobileMenuProps {
    links?: NavLink[];
    isOpen?: boolean;
    onClose?: () => void;
}

/**
 * Mobile navigation menu component.
 *
 * Displays a collapsible mobile navigation panel with accessible attributes.
 *
 * @component
 * @param {MobileMenuProps} props - Menu visibility state, link data, and optional close handler.
 * @returns The rendered mobile menu.
 */
export default function MobileMenu({
    links = [
        { label: "About", href: internalRoutes.about },
        { label: "Blog", href: externalLinks.blog },
        { label: "Contact", href: internalRoutes.contact },
    ],
    isOpen = false,
    onClose,
}: MobileMenuProps) {
    const pathname = usePathname();

    return (
        <div
            id="mobile-menu"
            aria-hidden={!isOpen}
            className={`absolute left-0 top-16 z-10 w-full overflow-hidden bg-background shadow-md transition-[max-height] duration-500 ease-in-out md:hidden ${
                isOpen ? "max-h-screen" : "max-h-0"
            }`}
        >
            <div className="flex flex-col items-center space-y-8 px-4 py-8 text-center text-lg text-text">
                {links.map(({ label, href }) => (
                    <Link
                        key={label}
                        href={href}
                        aria-current={pathname === href ? "page" : undefined}
                        onClick={onClose}
                        className={`block transition-colors duration-300 hover:text-primary ${
                            pathname === href
                                ? "font-semibold text-primary"
                                : ""
                        }`}
                    >
                        {label}
                    </Link>
                ))}
            </div>
        </div>
    );
}
