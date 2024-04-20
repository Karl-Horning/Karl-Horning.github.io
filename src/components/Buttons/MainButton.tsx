import { PermanentMarker } from "@/fonts";
import { Button } from "@nextui-org/react";

interface MainButtonProps {
    /**
     * The text displayed on the button.
     */
    text: string;
    /**
     * The border radius of the button.
     */
    radius?: "sm" | "md" | "lg" | "none" | "full" | undefined;
    /**
     * The size of the button.
     */
    size?: "sm" | "md" | "lg" | undefined;
    /**
     * Whether the button should stretch to fill its container horizontally.
     */
    fullWidth?: boolean;
}

/**
 * MainButton component renders a customizable button.
 * @component
 * @param {MainButtonProps} props - The props for configuring the button.
 * @returns {JSX.Element} Button component
 */
export default function MainButton({
    text,
    radius = "sm",
    size = "lg",
    fullWidth = false,
}: MainButtonProps) {
    return (
        <Button
            radius={radius}
            size={size}
            className={`${PermanentMarker.className} ${fullWidth ? "w-full" : ""} bg-white p-8 text-2xl text-black`}
        >
            {text}
        </Button>
    );
}
