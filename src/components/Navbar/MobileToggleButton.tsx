"use client";

import CloseIcon from "../Icons/CloseIcon";
import HamburgerIcon from "../Icons/HamburgerIcon";

interface MobileToggleButtonProps {
    isOpen: boolean;
    onToggle: () => void;
}

/**
 * Button to toggle the mobile navigation menu.
 *
 * @component
 * @param {MobileToggleButtonProps} props - Contains `isOpen` flag and `onToggle` handler.
 * @returns Toggle button with correct icon.
 */
export default function MobileToggleButton({
    isOpen,
    onToggle,
}: MobileToggleButtonProps) {
    return (
        <div className="md:hidden">
            <button
                id="menu-btn"
                className="text-text rounded focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Toggle menu"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                aria-haspopup="true"
                type="button"
                onClick={onToggle}
            >
                {isOpen ? (
                    <CloseIcon
                        id="icon-close"
                        className="h-6 w-6"
                        aria-hidden="true"
                        focusable="false"
                    />
                ) : (
                    <HamburgerIcon
                        id="icon-hamburger"
                        className="h-6 w-6"
                        aria-hidden="true"
                        focusable="false"
                    />
                )}
            </button>
        </div>
    );
}
