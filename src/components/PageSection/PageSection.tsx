import { Poppins900 } from "@/fonts";
import { ReactNode } from "react";

interface PageSectionProps {
    /** The unique identifier for the section. */
    id: string;
    /** The header text of the section. */
    header: string;
    /** The background color of the section. */
    bgColour?: "bg-red" | "bg-white";
    /** The content to be rendered within the section. */
    children?: ReactNode;
}

/**
 * PageSection component renders a section with a header and content.
 * @component
 * @param {PageSectionProps} props - The props for configuring the section.
 * @param {string} props.id - The unique identifier for the section.
 * @param {string} props.header - The header text of the section.
 * @param {"bg-red" | "bg-white"} [props.bgColour="bg-white"] - The background color of the section.
 * @param {ReactNode} [props.children] - The content to be rendered within the section.
 * @returns {JSX.Element} Section component
 */
export default function PageSection({
    id,
    header,
    bgColour = "bg-white",
    children,
}: Readonly<PageSectionProps>) {
    return (
        <section id={id} className={`${bgColour} min-h-screen`}>
            <div className="container mx-auto">
                <div className="px-10 py-20">
                    <h2
                        className={`${Poppins900.className} pb-20 text-center text-5xl text-black md:text-7xl`}
                    >
                        {header}
                    </h2>

                    <div>{children}</div>
                </div>
            </div>
        </section>
    );
}
