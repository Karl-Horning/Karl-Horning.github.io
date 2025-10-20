/**
 * A simple close (X) icon rendered as an inline SVG.
 *
 * Typically used for dismiss buttons, modal close controls,
 * or anywhere a "close" affordance is needed.
 *
 * Accessibility:
 * - Marked with `aria-hidden="true"` and `focusable="false"` to be
 *   treated as decorative by default.
 * - If the icon needs to be announced, override `aria-hidden` and
 *   provide a descriptive `aria-label` when using the component.
 *
 * @param props - Standard SVG properties forwarded to the `<svg>` element.
 * @returns An accessible close (X) icon as an SVG element.
 */
export default function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            id="CloseIcon"
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
