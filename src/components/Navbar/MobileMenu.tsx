import { navLinks } from "@/constants/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
    isOpen?: boolean;
    onClose?: () => void;
}

/**
 * Mobile navigation menu component.
 *
 * Displays a collapsible mobile navigation panel with accessible attributes.
 *
 * @component
 * @param {MobileMenuProps} props - Menu visibility state and optional close handler.
 * @returns The rendered mobile menu.
 */
export default function MobileMenu({
    isOpen = false,
    onClose,
}: MobileMenuProps) {
    const pathname = usePathname();

    return (
        <div
            id="mobile-menu"
            aria-hidden={!isOpen}
            className={`absolute left-0 top-16 z-10 w-full overflow-hidden bg-hero shadow-md transition-[max-height] duration-500 ease-in-out md:hidden ${
                isOpen ? "max-h-screen" : "max-h-0"
            }`}
        >
            <div className="flex flex-col items-center space-y-8 px-4 py-8 text-center text-lg text-text">
                {navLinks.map(({ label, href }) => (
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
