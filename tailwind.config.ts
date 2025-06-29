import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"], // body text
                heading: ["var(--font-poppins)", "sans-serif"], // headings
                glitch: ["var(--font-rubik-glitch)", "cursive"], // logo
            },
            colors: {
                black: "#2d292d",
                "custom-red": "#da4453",
                primary: "#e93681", // vibrant pink/red
                accent: "#14a098", // teal accent
                highlight: "#148aad", // teal for emphasis
                background: "#0f292f", // main background
                "background-subtle": "#254c4f", // slight contrast
                surface: "#1a3b3d", // card background
                hero: "#0b1d21", // strong background (header/hero)
                text: "#cccccc", // default light text
                muted: "#b3b3b3", // for secondary text, icons etc.
            },
        },
    },
    plugins: [nextui()],
    darkMode: "class",
    safelist: [
        "bg-amber-600",
        "bg-blue-700",
        "bg-blue-900",
        "bg-green-700",
        "bg-orange-700",
        "bg-pink-700",
        "bg-violet-800",
        "bg-yellow-600",
        "text-blue-400",
        "text-orange-400",
        "text-yellow-400",
        "text-custom-red",
    ],
};
export default config;
