/**
 * A hamburger menu icon rendered as an inline SVG.
 *
 * Typically used as a toggle button for opening and closing
 * a navigation drawer or mobile menu.
 *
 * Accessibility:
 * - Marked with `aria-hidden="true"` and `focusable="false"` so it is
 *   treated as decorative by default.
 * - If the icon needs to be announced (for example, without
 *   accompanying text), override `aria-hidden` and provide an
 *   accessible label such as `aria-label="Menu"`.
 *
 * @param props - Standard SVG properties forwarded to the `<svg>` element.
 * @returns An accessible hamburger menu icon as an SVG element.
 */
export default function HamburgerIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
    );
}
