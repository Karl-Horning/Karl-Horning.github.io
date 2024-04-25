"use client";

import { Input, Textarea } from "@nextui-org/react";
import MainButton from "@/components/Buttons/MainButton";
import { Grow } from "@/components/Animations/Animations";

/**
 * ContactForm component for displaying a contact form.
 * @returns {JSX.Element} The JSX element representing the contact form.
 */
export default function ContactForm() {
    return (
        <Grow>
            <div className="mb-20 flex justify-center">
                <form
                    id="contact-form"
                    action="https://fabform.io/f/d6S6WtJ"
                    method="post"
                    className="max-w-6xl rounded-2xl bg-black p-3 md:w-2/3 md:p-20"
                >
                    <Input
                        type="text"
                        label="Name"
                        name="name"
                        radius="none"
                        size="lg"
                        variant="underlined"
                        className="mb-4 bg-white"
                        isRequired
                    />

                    <Input
                        type="text"
                        label="Company"
                        name="company"
                        radius="none"
                        size="lg"
                        variant="underlined"
                        className="mb-4 bg-white"
                    />

                    <Input
                        type="email"
                        label="Email"
                        name="email"
                        radius="none"
                        size="lg"
                        variant="underlined"
                        className="mb-4 bg-white"
                        isRequired
                    />

                    <Textarea
                        label="Message"
                        name="message"
                        radius="none"
                        size="lg"
                        variant="underlined"
                        className="mb-4 bg-white"
                        isRequired
                        minRows={10}
                    />

                    <MainButton
                        text="Message Me!"
                        type="submit"
                        radius="none"
                        fullWidth
                    />
                </form>
            </div>
        </Grow>
    );
}
