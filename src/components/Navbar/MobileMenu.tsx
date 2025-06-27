import Link from "next/link";

type NavLink = {
    label: string;
    href: string;
};

interface MobileMenuProps {
    links?: NavLink[];
    isOpen?: boolean;
}

/**
 * Mobile navigation menu component.
 *
 * @param {MobileMenuProps} props - Menu visibility state and link data.
 * @returns {JSX.Element} The rendered mobile menu.
 */
export default function MobileMenu({
    links = [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
    ],
    isOpen = false,
}: MobileMenuProps): JSX.Element {
    return (
        <div
            id="mobile-menu"
            className={`bg-surface absolute left-0 top-16 z-10 w-full overflow-hidden shadow-md transition-[max-height] duration-500 ease-in-out md:hidden ${
                isOpen ? "max-h-screen" : "max-h-0"
            }`}
        >
            <div className="flex flex-col items-center space-y-8 px-4 py-8 text-center text-lg">
                {links.map(({ label, href }) => (
                    <Link
                        key={label}
                        href={href}
                        className="block transition-colors duration-300 hover:text-primary"
                    >
                        {label}
                    </Link>
                ))}
            </div>
        </div>
    );
}
