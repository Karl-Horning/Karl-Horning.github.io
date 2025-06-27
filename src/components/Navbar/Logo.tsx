import styles from "./Logo.module.css";

/**
 * Logo component displaying the site logo with a glitch hover effect.
 *
 * Renders a clickable logo linking to the homepage, styled with
 * custom glitch effect classes and Tailwind utility classes.
 *
 * @component
 */
export default function Logo() {
    return (
        <div className="flex-shrink-0 text-xl font-bold transition-colors duration-300 ease-in-out">
            <a
                href="/"
                className={`font-glitch ${styles["glitch-hover"]} relative text-2xl font-extrabold text-primary transition-colors duration-300`}
                data-text="Karl Horning"
            >
                Karl Horning
            </a>
        </div>
    );
}
