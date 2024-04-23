import { Input, Textarea } from "@nextui-org/react";
import MainButton from "@/components/Buttons/MainButton";

/**
 * ContactForm component for displaying a contact form.
 * @returns {JSX.Element} The JSX element representing the contact form.
 */
export default function ContactForm() {
    return (
        <div className="mb-20 flex justify-center">
            <form
                id="contact-form"
                action=""
                className="max-w-6xl rounded-2xl bg-black p-3 md:w-2/3 md:p-20"
            >
                <Input
                    type="text"
                    label="Name"
                    radius="none"
                    size="lg"
                    variant="underlined"
                    className="mb-4 bg-white"
                    isRequired
                />

                <Input
                    type="email"
                    label="Email"
                    radius="none"
                    size="lg"
                    variant="underlined"
                    className="mb-4 bg-white"
                    isRequired
                />

                <Textarea
                    label="Message"
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
    );
}
