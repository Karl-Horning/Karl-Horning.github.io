import CloseIcon from "../Icons/CloseIcon";
import HamburgerIcon from "../Icons/HamburgerIcon";
import DesktopMenu from "./DesktopMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    return (
        <nav
            role="navigation"
            aria-label="Main menu"
            className="fixed z-30 w-full bg-background px-6 shadow-md"
        >
            <div className="mx-auto max-w-6xl px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Logo />

                    <div className="md:hidden">
                        <button
                            id="menu-btn"
                            className="text-text rounded focus:outline-none focus:ring-2 focus:ring-primary"
                            aria-label="Toggle menu"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            aria-haspopup="true"
                            type="button"
                        >
                            {/* Hamburger Icon */}
                            <HamburgerIcon
                                id="icon-hamburger"
                                className="block h-6 w-6"
                                aria-hidden="true"
                                focusable="false"
                            />

                            {/* Close Icon */}
                            <CloseIcon
                                id="icon-close"
                                className="hidden h-6 w-6"
                                aria-hidden="true"
                                focusable="false"
                            />
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <DesktopMenu />
                </div>
            </div>

            {/* Mobile Menu */}
            <MobileMenu />
        </nav>
    );
}
