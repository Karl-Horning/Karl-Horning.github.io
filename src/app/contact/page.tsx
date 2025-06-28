import Header from "@/components/Header";
import { externalLinks, internalRoutes } from "@/constants/links";
import { createMetadata } from "@/lib/metadata";
import Script from "next/script";

export const metadata = createMetadata({
    title: "Contact",
    path: internalRoutes.contact,
});

/**
 * The Contact page component.
 *
 * Renders a contact form section with fields for name, email, company, and message,
 * as well as a call to action to connect on LinkedIn.
 * Includes form accessibility features and uses fabform.io for form submission.
 *
 * Also injects JSON-LD structured data for SEO purposes.
 *
 * Metadata for the page title and path is created and exported separately.
 *
 * @component
 */
export default function Contact() {
    return (
        <main className="mx-auto max-w-6xl pt-16 md:pt-36">
            <section className="mx-auto max-w-4xl px-12 py-8 text-center">
                <Header text="Contact Me" level={1} />

                <p className="mx-auto mb-6 max-w-3xl text-lg text-text transition-colors duration-300 md:text-xl">
                    Whether you&apos;d like to collaborate, discuss a project,
                    share feedback, or just say hello, feel free to get in touch
                    using the form below. You can also connect with me via
                    LinkedIn or email.
                </p>
            </section>
            <section className="flex items-center justify-center py-6 md:px-4">
                <div className="w-full max-w-xl rounded-2xl bg-hero p-8 shadow-lg md:p-10">
                    <h2 className="sr-only">Contact Form</h2>

                    <form
                        fab-form
                        name="Portfolio Form"
                        method="POST"
                        action="https://fabform.io/f/d6S6WtJ"
                        className="space-y-6 text-muted"
                        aria-label="Contact form"
                    >
                        {/* Form Name */}
                        <input
                            type="hidden"
                            name="form-name"
                            value="Portfolio Form"
                        />

                        <h2 className="sr-only">Contact Form</h2>

                        {/* Name */}
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                placeholder=" "
                                className="peer w-full rounded-lg border border-transparent bg-surface p-3 pt-6 focus:outline-none focus:ring-2 focus:ring-primary"
                                aria-describedby="nameHint"
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-3 top-2 text-sm text-primary transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary"
                            >
                                Name
                                <span className="text-primary">*</span>
                            </label>
                            <span
                                id="nameHint"
                                className="mt-1 block text-sm text-primary opacity-0 transition-opacity duration-200 peer-placeholder-shown:opacity-0 peer-focus:opacity-100"
                            >
                                Please enter your name.
                            </span>
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder=" "
                                className="peer w-full rounded-lg border border-transparent bg-surface p-3 pt-6 focus:outline-none focus:ring-2 focus:ring-primary"
                                aria-describedby="emailHint"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-3 top-2 text-sm text-primary transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary"
                            >
                                Email
                                <span id="emailHint" className="text-primary">
                                    *
                                </span>
                            </label>
                            <span
                                id="emailHint"
                                className="mt-1 block text-sm text-primary opacity-0 transition-opacity duration-200 peer-placeholder-shown:opacity-0 peer-focus:opacity-100"
                            >
                                Enter a valid email.
                            </span>
                        </div>

                        {/* Company */}
                        <div className="relative">
                            <input
                                id="company"
                                name="company"
                                type="text"
                                autoComplete="organization"
                                placeholder=" "
                                className="peer w-full rounded-lg border border-transparent bg-surface p-3 pt-6 focus:outline-none focus:ring-2 focus:ring-primary"
                                aria-describedby="companyHint"
                            />
                            <label
                                htmlFor="company"
                                className="absolute left-3 top-2 text-sm text-primary transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary"
                            >
                                Company
                            </label>
                            <span
                                id="companyHint"
                                className="mt-1 block text-sm text-primary opacity-0 transition-opacity duration-200 peer-placeholder-shown:opacity-0 peer-focus:opacity-100"
                            >
                                Please enter your company.
                            </span>
                        </div>

                        {/* Message */}
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                placeholder=" "
                                aria-describedby="messageHint"
                                className="peer mt-1 w-full resize-none rounded-lg border border-transparent bg-surface p-3 pt-6 focus:outline-none focus:ring-2 focus:ring-primary"
                            ></textarea>

                            <label
                                htmlFor="message"
                                className="absolute left-3 top-2 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary"
                            >
                                Message
                                <span className="text-primary">*</span>
                            </label>

                            <span
                                id="messageHint"
                                className="mt-1 block text-sm text-primary opacity-0 transition-opacity duration-200 peer-placeholder-shown:opacity-0 peer-focus:opacity-100"
                            >
                                Please type your message.
                            </span>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="mb-4 inline-block w-full cursor-pointer rounded-lg bg-primary px-8 py-4 text-xl font-semibold text-white shadow transition-colors duration-300 hover:bg-highlight hover:text-hero focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            Send Message
                        </button>

                        {/* TODO: redirect */}
                        {/* <input type="hidden" name="_redirect" value="https://yourdomain.com/thank-you"> */}
                    </form>

                    <p className="mt-6 text-center text-sm text-muted">
                        Prefer LinkedIn?&nbsp;
                        <a
                            href={externalLinks.linkedIn}
                            aria-label="Connect with Karl Horning on LinkedIn"
                            className="font-semibold text-primary hover:underline focus:underline focus:outline-none"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Connect with me on LinkedIn
                        </a>
                    </p>
                </div>
            </section>

            <Script
                id="contact-ld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        url: `${externalLinks.portfolio}${internalRoutes.contact}`,
                        name: "Contact - Karl Horning",
                        description:
                            "Use the form to contact Karl Horning or connect on LinkedIn.",
                    }),
                }}
            />
        </main>
    );
}
