import { twMerge } from "tailwind-merge";

export type ButtonType = "primary" | "secondary" | "small";

const base =
    "inline-block font-bold rounded transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white";

const variants: Record<ButtonType, string> = {
    primary:
        "bg-primary text-white px-6 py-3 text-xl hover:bg-highlight shadow",
    secondary:
        "border-4 border-primary text-primary px-6 py-2 text-xl hover:bg-primary hover:text-white",
    small: "bg-primary text-white text-sm px-3 py-1 shadow hover:bg-highlight",
};

export function getButtonClasses(
    type: ButtonType = "primary",
    additional?: string
) {
    return twMerge(base, variants[type], additional);
}
