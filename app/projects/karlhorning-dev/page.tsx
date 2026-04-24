import type { Metadata } from "next";
import { meta } from "./meta";
import ProjectLayout from "@/components/ProjectLayout";

export const metadata: Metadata = {
    title: meta.title,
    description: meta.description,
};

/**
 * Learnlight Platform project page.
 *
 * @return The project page element.
 */
export default function Page() {
    return (
        <ProjectLayout meta={meta}>
            TODO
        </ProjectLayout>
    );
}
