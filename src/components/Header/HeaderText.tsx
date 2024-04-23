import { Poppins900 } from "@/fonts";
import MainButton from "@/components/Buttons/MainButton";
import { Link } from "@nextui-org/react";

/**
 * HeaderText component renders the header text and a call-to-action button.
 * @component
 * @returns {JSX.Element} Header text component
 */
export default function HeaderText() {
    return (
        <div className="pb-20">
            <h1
                className={`${Poppins900.className} mb-7 text-6xl text-black md:text-8xl`}
            >
                Hello, my name is Karl!
            </h1>

            <p className="mb-7 text-xl">
                Empowering digital dreams with cutting-edge technology.
                Specializing in full-stack development and backend wizardry.
                Passionate about the limitless possibilities of GraphQL.
            </p>

            <Link href="#contact-form" className="w-full">
                <MainButton text="Contact Me!" fullWidth />
            </Link>
        </div>
    );
}
