import styles from "@/components/Logo.module.css";
import Link from "next/link";

/**
 * Displays the site logo with a glitch hover effect.
 *
 * Renders a clickable logo that links to the homepage,
 * styled using a combination of Tailwind utility classes
 * and a custom glitch effect from `Logo.module.css`.
 *
 * @return The site logo as a styled clickable element.
 */
export default function Logo() {
    return (
        <div className="shrink-0 text-xl transition-colors duration-300 ease-in-out">
            <Link
                id="logo"
                href="/"
                className={`relative inline-block rounded px-2 py-1 font-glitch text-2xl font-extrabold leading-none text-primary ${styles.glitch} transition-colors duration-300`}
                data-text="Karl Horning"
            >
                Karl Horning
            </Link>
        </div>
    );
}
