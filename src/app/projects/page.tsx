import { internalRoutes } from "@/lib/constants/ui";
import { createMetadata } from "@/lib/metadata";
import { jsonLdContact } from "@/lib/constants/jsonLd";
import Hero from "@/components/ui/Hero";
import ContactCta from "@/components/ui/ContactCta";
import RecentProjects from "@/components/projects/RecentProjects";

const { ProjectsRoute } = internalRoutes;

export const metadata = createMetadata({
    title: "Projects",
    path: ProjectsRoute,
    jsonLd: jsonLdContact,
});

/**
 * Renders the main **Projects** page.
 *
 * Displays a hero introduction with key highlights, a list of recent
 * project case studies (via `RecentProjects`), and a contact call-to-action
 * for further discussion or portfolio access.
 *
 * @returns The rendered Projects page including the hero section, project list, and contact CTA.
 */
export default function Projects() {
    return (
        <>
            <Hero
                title="Project case studies"
                leadParagraph="Selected work with outcomes, process, and links to code or live demos."
                highlights={["Accessibility", "Full-stack", "API-driven"]}
            />
            <RecentProjects />
            <ContactCta
                title="Want a deeper dive?"
                description="I can share private repos, extended write-ups, and implementation notes on request."
            />
        </>
    );
}
