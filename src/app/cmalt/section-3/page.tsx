import CMALTLayout from "@/components/Layouts/CMALTLayout";
import { cmaltSections } from "@/constants/cmalt";
import { internalRoutes } from "@/constants/links";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

const { CmaltRoute } = internalRoutes;

export const metadata = createMetadata({
    title: "Section 3: The Wider Context: Understanding and Engaging with Legislation, Policies and Standards | CMALT",
    path: CmaltRoute,
});

export default function Page() {
    const section3 = cmaltSections.find(
        (section) => section.slug === "section-3"
    );

    return (
        <CMALTLayout
            title="Section 3: The Wider Context: Understanding and Engaging with Legislation, Policies and Standards"
            lastUpdated="2025-09-09"
        >
            <section id="description">
                <h2>Description</h2>

                <p>
                    Section 3 explores the wider context that shapes my
                    professional practice. It focuses on how I understand and
                    engage with legislation, policies, and standards relevant to
                    learning technology. In the following subsections, I provide
                    examples that demonstrate this awareness and explain how
                    these frameworks influence the decisions I make in my work:
                </p>

                {section3?.children && (
                    <ul className="ml-4 mt-1 space-y-1 text-sm">
                        {section3.children.map((child) => (
                            <li key={child.slug}>
                                <Link
                                    href={`/cmalt/${section3.slug}/${child.slug}`}
                                    className="cmalt-nav"
                                >
                                    {child.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </CMALTLayout>
    );
}
