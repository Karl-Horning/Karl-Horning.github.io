import { ReactNode } from "react";
import Header from "@/components/Header";

interface SectionProps {
    /** The unique identifier for the section. */
    id: string;
    /** The header text of the section. */
    header: string;
    /** The header ID of the section. */
    headerId?: string;
    /** The header level of the section. */
    headerLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    /** The content to be rendered within the section. */
    children?: ReactNode;
    /** Any additional classes for the section */
    className?: string;
}

/**
 * PageSection component renders a section with a header and content.
 *
 * @component
 * @param {string} id - The unique identifier for the section.
 * @param {string} header - The header text of the section.
 * @param {string} headerId - The header ID of the section.
 * @param {number} headerLevel - The header level of the section.
 * @param {ReactNode} [children] - The content to be rendered within the section.
 * @param {string} [className] - Additional Tailwind CSS classes to apply.
 * @returns Section component
 */
export default function Section({
    id,
    header,
    headerId,
    headerLevel = 2,
    children,
    className = "",
}: SectionProps) {
    return (
        <section
            id={id}
            className={`mx-auto max-w-6xl px-6 py-16 text-center ${className}`}
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="200"
            >
                <Header text={header} headerId={headerId} level={headerLevel} />
            </div>
            {children}
        </section>
    );
}
