import { navLinks } from "@/lib/constants/links";
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
            role="navigation"
            aria-label="Mobile"
            aria-hidden={!isOpen}
            inert={!isOpen}
            className={`glass absolute left-0 top-16 z-10 w-full overflow-hidden border-b border-slate-200/70 bg-white/80 shadow-md transition-[max-height] duration-500 ease-in-out md:hidden dark:border-slate-800 dark:bg-slate-950/70 ${
                isOpen ? "max-h-screen" : "max-h-0"
            }`}
        >
            <div className="flex flex-col items-center space-y-8 px-4 py-8 text-center text-lg text-slate-900 dark:text-slate-100">
                {navLinks.map(({ label, href }) => (
                    <Link
                        key={label}
                        href={href}
                        aria-current={pathname === href ? "page" : undefined}
                        onClick={onClose}
                        className={`rounded px-2 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 ${
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
