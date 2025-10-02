import { cloneElement, isValidElement, ReactElement, ReactNode } from "react";

/**
 * Ensures an icon is accessibility-friendly.
 *
 * - If no `iconLabel` is provided, the icon is treated as decorative
 *   and hidden from assistive technology (`aria-hidden="true"`, `role="presentation"`).
 * - If `iconLabel` is provided, the icon is exposed with `role="img"`
 *   and labelled accordingly.
 *
 * @param icon - The ReactNode representing the icon (typically an SVG).
 * @param iconLabel - Optional label for the icon. If omitted, the icon is decorative.
 * @returns A cloned React element with accessibility attributes applied.
 */
export const decorateIcon = (
    icon: ReactNode,
    iconLabel?: string
): ReactNode => {
    if (!icon || !isValidElement(icon)) return icon;
    const el = icon as ReactElement;

    // Decorative (default): hide from a11y tree
    if (!iconLabel) {
        return cloneElement(el, {
            "aria-hidden": true,
            focusable: false,
            role: "presentation",
        });
    }

    // Meaningful: expose with label
    return cloneElement(el, {
        role: "img",
        "aria-label": iconLabel,
        focusable: false,
    });
};
