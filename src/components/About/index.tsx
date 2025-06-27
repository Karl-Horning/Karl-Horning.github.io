import ButtonLink from "../Buttons/ButtonLink";
import Header from "../Header";

/**
 * A section component that introduces the user with a heading, description, and a call-to-action button.
 *
 * @component
 * @returns A centred "About Me" section with a heading, paragraph, and link-style button.
 */
export default function About() {
    return (
        <section className="bg-background px-6 py-16">
            <div className="mx-auto max-w-4xl text-center">
                <Header text="About Me" />
                <p className="mx-auto mb-6 max-w-3xl text-lg text-text transition-colors duration-300 md:text-xl">
                    I&apos;m a Full-Stack JavaScript Developer and Learning
                    Technologist with over 15 years&apos; experience in EdTech,
                    specialising in building user-focused, accessible tools for
                    learners and educators.
                </p>

                <ButtonLink
                    text="More About Me"
                    href="/about"
                    type="secondary"
                />
            </div>
        </section>
    );
}
