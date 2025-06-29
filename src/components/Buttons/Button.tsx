import { ButtonHTMLAttributes } from "react";
import {
    getButtonClasses,
    ButtonType,
} from "@/components/Buttons/buttonStyles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    typeStyle?: ButtonType;
    className?: string;
}

/**
 * A reusable standard button component for forms and UI actions.
 *
 * @param {ButtonType} [typeStyle="primary"] - Style variant for the button.
 * @param {string} [className] - Additional Tailwind classes.
 * @param {ReactNode} children - Button content.
 */
export default function Button({
    typeStyle = "primary",
    className = "",
    children,
    ...props
}: ButtonProps) {
    const mergedClass = getButtonClasses(typeStyle, className);

    return (
        <button className={mergedClass} {...props}>
            {children}
        </button>
    );
}
