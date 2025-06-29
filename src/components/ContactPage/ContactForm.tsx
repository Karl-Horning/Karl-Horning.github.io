import Button from "@/components/Buttons/Button";
import LinkedInCta from "./LinkedInCta";
import FormField from "./FormField";

/**
 * Renders the contact form section of the page.
 *
 * This form includes fields for name, email, company, and message,
 * and submits via a third-party endpoint. It also includes a LinkedIn
 * call-to-action and uses accessible form labelling.
 *
 * @component
 * @returns The contact form JSX structure.
 */
export default function ContactForm() {
    return (
        <section className="flex items-center justify-center py-6 md:px-4">
            <div className="w-full max-w-xl rounded-2xl bg-hero p-8 shadow-lg md:p-10">
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
                    <FormField
                        id="name"
                        name="name"
                        label="Name"
                        hint="Enter your name."
                        required={true}
                        autoComplete="name"
                    />

                    {/* Email */}
                    <FormField
                        id="email"
                        name="email"
                        label="Email"
                        type="email"
                        hint="Enter a valid email address."
                        required={true}
                        autoComplete="email"
                    />

                    {/* Company */}
                    <FormField
                        id="company"
                        name="company"
                        label="Company"
                        hint="Enter your company name."
                        autoComplete="organization"
                    />

                    {/* Message */}
                    <FormField
                        id="message"
                        name="message"
                        label="Message"
                        hint="Type your message."
                        isTextarea={true}
                        required={true}
                    />

                    {/* Submit */}
                    <Button type="submit" className="mb-4 w-full">
                        Send Message
                    </Button>

                    {/* TODO: redirect */}
                    {/* <input type="hidden" name="_redirect" value="https://yourdomain.com/thank-you"> */}
                </form>

                <LinkedInCta />
            </div>
        </section>
    );
}
