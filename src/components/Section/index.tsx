import { ReactNode } from "react";
import Header from "../Header";

interface SectionProps {
    /** The unique identifier for the section. */
    id: string;
    /** The header text of the section. */
    header: string;
    /** The content to be rendered within the section. */
    children?: ReactNode;
}

/**
 * PageSection component renders a section with a header and content.
 *
 * @component
 * @param {string} id - The unique identifier for the section.
 * @param {string} header - The header text of the section.
 * @param {ReactNode} [children] - The content to be rendered within the section.
 * @returns Section component
 */
export default function Section({ id, header, children }: SectionProps) {
    return (
        <section id={id} className="bg-background px-6 py-16">
            <Header text={header} />
            {children}
        </section>
    );
}
