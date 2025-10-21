import { externalLinks, icons, internalRoutes } from "@/lib/constants/ui";
import { createMetadata } from "@/lib/metadata";
import { jsonLdProjects } from "@/lib/constants/jsonLd";
import ContactCta from "@/components/ui/ContactCta";
import RecentProjects from "@/components/projects/RecentProjects";
import PageIntroSplit from "@/components/ui/PageIntroSplit";

const { GitHubLink } = externalLinks;
const { ProjectsRoute } = internalRoutes;
const { GitHubIcon, ProjectIcon, ReadMoreIcon } = icons;

/**
 * Static metadata for the Projects page.
 *
 * Generated using {@link createMetadata} and enriched with structured
 * data from {@link jsonLdProjects} for search optimisation.
 */
export const metadata = createMetadata({
    title: "Projects",
    path: ProjectsRoute,
    jsonLd: jsonLdProjects,
});

/**
 * Renders the **Projects** page.
 *
 * This page showcases a curated selection of web development and
 * educational technology projects, highlighting technical range
 * and accessibility-focused practice.
 *
 * ### Layout structure
 * - {@link PageIntroSplit} — Hero header with title, tagline, and CTAs.
 * - {@link RecentProjects} — Component listing key featured or recent projects.
 * - {@link ContactCta} — Footer section inviting discussion or deeper exploration.
 *
 * ### Behaviour
 * - Statically generated at build time for performance and reliability.
 * - Links directly to GitHub for full repositories.
 * - Highlights private or experimental projects with summaries and visual context.
 * - Integrates structured JSON-LD metadata for enhanced discoverability.
 *
 * @remarks
 * The project list is curated manually via {@link RecentProjects} rather than
 * dynamically sourced. Each project entry typically includes a description,
 * technologies used, and links to source code or demos.
 *
 * @returns The statically rendered Projects page, including hero, project list, and contact CTA.
 *
 * @example
 * ```tsx
 * export default function Projects() {
 *   return (
 *     <>
 *       <PageIntroSplit
 *         title="Projects"
 *         tagline="Selected Work"
 *         leadParagraph="A selection of web apps, experiments, and learning tools."
 *         heroIcon={<ProjectIcon />}
 *         primaryCta={{
 *           href: `${ProjectsRoute}#main`,
 *           text: "Recent projects",
 *           icon: <ReadMoreIcon />,
 *         }}
 *         secondaryCta={{
 *           href: GitHubLink,
 *           text: "Browse all",
 *           icon: <GitHubIcon />,
 *         }}
 *       />
 *       <RecentProjects />
 *       <ContactCta
 *         title="Want a deeper dive?"
 *         description="I can share private repos and detailed implementation notes on request."
 *       />
 *     </>
 *   );
 * }
 * ```
 */
export default function Projects() {
    return (
        <>
            <PageIntroSplit
                title="Projects"
                leadParagraph="A selection of web apps, experiments, and learning tools."
                tagline="Selected Work"
                heroIcon={<ProjectIcon />}
                primaryCta={{
                    href: `${ProjectsRoute}#recentProjects`,
                    text: "Recent projects",
                    icon: <ReadMoreIcon />,
                }}
                secondaryCta={{
                    href: GitHubLink,
                    text: "Browse all",
                    icon: <GitHubIcon />,
                }}
            />

            <RecentProjects />

            <ContactCta
                title="Want a deeper dive?"
                description="I can share private repos, extended write-ups, and implementation notes on request."
            />
        </>
    );
}
