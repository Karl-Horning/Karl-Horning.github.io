import styles from "@/components/Navbar/Logo.module.css";

/**
 * Logo component displaying the site logo with a glitch hover effect.
 *
 * Renders a clickable logo linking to the homepage, styled with
 * custom glitch effect classes and Tailwind utility classes.
 *
 * @component
 * @returns The logo for the website
 */
export default function Logo() {
    return (
        <div className="flex-shrink-0 text-xl transition-colors duration-300 ease-in-out">
            <a
                href="/"
                className={`font-glitch ${styles["glitch-hover"]} relative rounded px-2 py-1 text-2xl font-extrabold text-primary transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
                data-text="Karl Horning"
            >
                Karl Horning
            </a>
        </div>
    );
}
