import { icons } from "@/lib/constants/icons";
import FormSidebar from "./FormSidebar";
import { decorateIcon } from "@/lib/helpers/iconHelpers";

const { SendIcon } = icons;

/**
 * Renders the contact form section with a sidebar.
 *
 * The form allows users to send a message via Formspree. It includes
 * required fields for name, email, and message, along with optional
 * fields for subject and a hidden honeypot field for spam prevention.
 * A sidebar (`FormSidebar`) is displayed alongside the form to provide
 * additional context or contact details.
 *
 * Accessibility features:
 * - Required fields marked with asterisks.
 * - Proper labels for all inputs.
 * - `aria-live` region for form submission status updates.
 *
 * @returns The contact form section with inputs, submit button, and sidebar.
 */
export default function Form() {
    return (
        <section className="mx-auto max-w-6xl px-4 pt-20">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="md:col-span-2">
                    <form
                        id="contactForm"
                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                        action="https://formspree.io/f/mgvnyjyq"
                        method="POST"
                        aria-label="Contact form"
                    >
                        <h2 className="text-xl font-bold">Send a message</h2>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                            Required fields are marked with an asterisk (
                            <span className="text-red-600 dark:text-red-300">
                                *
                            </span>
                            ).
                        </p>

                        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="req block text-sm font-semibold"
                                >
                                    Name
                                    <span className="text-red-600 dark:text-red-300">
                                        *
                                    </span>
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-slate-700 dark:bg-slate-950"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="req block text-sm font-semibold"
                                >
                                    Email
                                    <span className="text-red-600 dark:text-red-300">
                                        *
                                    </span>
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-slate-700 dark:bg-slate-950"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-semibold"
                                >
                                    Subject
                                </label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-slate-700 dark:bg-slate-950"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="message"
                                    className="req block text-sm font-semibold"
                                >
                                    Message
                                    <span className="text-red-600 dark:text-red-300">
                                        *
                                    </span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    required
                                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-slate-700 dark:bg-slate-950"
                                ></textarea>
                            </div>

                            <div className="hidden" aria-hidden="true">
                                <label htmlFor="company">Company</label>
                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between gap-4">
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                By sending this form you agree to be contacted
                                about your enquiry.
                            </p>
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-105"
                            >
                                {decorateIcon(<SendIcon />)} Send
                            </button>
                        </div>

                        <p
                            id="formStatus"
                            className="sr-only"
                            role="status"
                            aria-live="polite"
                        ></p>
                    </form>
                </div>

                <FormSidebar />
            </div>
        </section>
    );
}
