/**
 * Small chevron icon used for collapsible headings.
 *
 * @param props - Component properties.
 * @param props.className - Optional classes to control size/rotation/colour.
 * @returns An SVG chevron icon.
 */
export function Chevron({ className = "" }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.167l3.71-2.937a.75.75 0 111.06 1.06l-4.24 3.36a.75.75 0 01-.94 0l-4.24-3.36a.75.75 0 01-.02-1.06z" />
        </svg>
    );
}
