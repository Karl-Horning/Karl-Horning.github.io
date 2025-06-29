import Header from "@/components/Header";

/**
 * ContactIntro component displays a heading and introductory message
 * for the contact page.
 *
 * This component uses a centred layout and includes a reusable Header
 * component with an H1 tag, followed by a descriptive paragraph to
 * invite user interaction.
 *
 * @component
 * @returns The rendered ContactIntro section
 */
export default function ContactIntro() {
    return (
        <section className="mx-auto max-w-4xl px-12 py-8 text-center">
            <Header text="Contact Me" level={1} />

            <p className="mx-auto mb-6 max-w-3xl text-lg text-text transition-colors duration-300 md:text-xl">
                Whether you&apos;d like to collaborate, discuss a project, share
                feedback, or just say hello, feel free to get in touch using the
                form below. You can also connect with me via LinkedIn or email.
            </p>
        </section>
    );
}
