/**
 * CloseIcon component renders a classic close (X) SVG icon.
 *
 * @param {React.SVGProps<SVGSVGElement>} props - SVG properties passed to the icon.
 * @returns {JSX.Element} The close (X) SVG element.
 */
export default function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
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
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    );
}
