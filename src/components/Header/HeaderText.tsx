import { Poppins900 } from "@/fonts";
import MainButton from "@/components/Buttons/MainButton";

/**
 * HeaderText component renders the header text and a call-to-action button.
 * @component
 * @returns {JSX.Element} Header text component
 */
export default function HeaderText() {
    return (
        <div>
            <h1
                className={`${Poppins900.className} mb-7 text-6xl text-black md:text-8xl`}
            >
                Hello, my name is Karl!
            </h1>

            <p className="mb-7 text-xl">
                Full-Stack Software Engineer | Backend Developer | GraphQL
                Enthusiast
            </p>

            <MainButton text="Contact Me!" fullWidth />
        </div>
    );
}