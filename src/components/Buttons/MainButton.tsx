import { PermanentMarker } from "@/fonts";
import { Button } from "@nextui-org/react";

/**
 * @typedef {"sm" | "md" | "lg" | "none" | "full" | undefined} RadiusOptions
 * @typedef { "sm" | "md" | "lg" | undefined } sizeOptions
 * @typedef { "button" | "submit" | "reset" | undefined } typeOptions
 */

/**
 * @typedef {Object} MainButtonProps
 * @property {string} [id] - The element ID of the button.
 * @property {string} text - The text displayed on the button.
 * @property {RadiusOptions} [radius] - The border radius of the button.
 * @property {SizeOptions} [size] - The size of the button.
 * @property {boolean} [fullWidth] - Whether the button should stretch to fill its container horizontally.
 * @property {TypeOptions} [type] - The type of the button.
 */
interface MainButtonProps {
    id?: string;
    text: string;
    radius?: "sm" | "md" | "lg" | "none" | "full" | undefined;
    size?: "sm" | "md" | "lg" | undefined;
    fullWidth?: boolean;
    type?: "button" | "submit" | "reset" | undefined;
}

/**
 * MainButton component renders a customizable button.
 * @component
 * @param {MainButtonProps} props - The props for configuring the button.
 * @param {string} props.id - The element ID of the button.
 * @param {string} props.text - The text displayed on the button.
 * @param {RadiusOptions} props.radius - The border radius of the button.
 * @param {SizeOptions} props.size - The size of the button.
 * @param {boolean} props.fullWidth - Whether the button should stretch to fill its container horizontally.
 * @param {typeOptions} props.type - The type of the button.
 * @returns {JSX.Element} Button component
 */
export default function MainButton({
    id,
    text,
    radius = "sm",
    size = "lg",
    fullWidth = false,
    type = "button",
}: MainButtonProps) {
    return (
        <Button
            id={id}
            radius={radius}
            size={size}
            className={`${PermanentMarker.className} ${fullWidth ? "w-full" : ""} bg-white p-8 text-2xl text-black`}
            type={type}
        >
            {text}
        </Button>
    );
}
