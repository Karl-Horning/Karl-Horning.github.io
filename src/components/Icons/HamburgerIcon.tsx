/**
 * HamburgerIcon component renders a classic hamburger menu SVG icon.
 *
 * @param {React.SVGProps<SVGSVGElement>} props - SVG properties passed to the icon.
 * @returns {JSX.Element} The hamburger menu SVG element.
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
