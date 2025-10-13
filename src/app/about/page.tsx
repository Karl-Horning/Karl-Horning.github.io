import { icons, internalRoutes } from "@/lib/constants/ui";
import { createMetadata } from "@/lib/metadata";
import { jsonLdAbout } from "@/lib/constants/jsonLd";
import Bio from "@/components/about/Bio";
import Values from "@/components/about/Values";
import Experience from "@/components/about/Experience";
import Platforms from "@/components/about/Platforms";
import ContactCta from "@/components/ui/ContactCta";
import Certifications from "@/components/about/Certifications";
import PageIntroSplit from "@/components/ui/PageIntroSplit";

const { ProjectIcon, ContactIcon, InfoIcon } = icons;
const { AboutRoute, ProjectsRoute, ContactRoute } = internalRoutes;

/**
 * Static page metadata for the About route.
 *
 * Created via {@link createMetadata} and used by Next.js for SEO.
 * Includes structured data from {@link jsonLdAbout}.
 */
export const metadata = createMetadata({
    title: "About",
    path: AboutRoute,
    jsonLd: jsonLdAbout,
});

/**
 * Renders the **About** page.
 *
 * Provides an overview of the author’s professional background,
 * values, platforms experience, and certifications.
 * This page acts as a personal profile hub and uses several modular components
 * for clear visual hierarchy and accessible structure.
 *
 * ### Layout structure
 * - {@link PageIntroSplit} — Introductory hero section with headline and CTAs.
 * - {@link Bio} — Concise biography and visual profile card.
 * - {@link Values} — Grid or list describing professional values.
 * - {@link Experience} — Overview of relevant career or project experience.
 * - {@link Platforms} — Technologies and systems used in academic and technical work.
 * - {@link Certifications} — Professional credentials and recognitions.
 * - {@link ContactCta} — Footer contact prompt encouraging further engagement.
 *
 * ### Behaviour
 * - The `metadata` export provides title and structured data for SEO.
 * - All sections are statically rendered and responsive.
 * - Uses Tailwind CSS grid utilities for vertical rhythm and consistent spacing.
 *
 * @remarks
 * This page does not fetch any remote data — it relies entirely on local,
 * pre-defined content components.
 *
 * @component
 * @returns The full About page layout, combining all major subsections.
 *
 * @example
 * ```tsx
 * import About from "@/app/about/page";
 *
 * export default function Page() {
 *   return <About />;
 * }
 * ```
 */
export default function About() {
    return (
        <>
            <PageIntroSplit
                title="About Me"
                tagline="Background & Values"
                leadParagraph="Learning technologist and developer passionate about building accessible, meaningful digital experiences. I combine educational insight with technical practice to improve how people learn and work."
                heroIcon={<InfoIcon />}
                primaryCta={{
                    href: `${ProjectsRoute}`,
                    text: "Explore my projects",
                    icon: <ProjectIcon />,
                }}
                secondaryCta={{
                    href: `${ContactRoute}#contactForm`,
                    text: "Get in touch",
                    icon: <ContactIcon />,
                    type: "secondary",
                }}
            />
            <main id="main">
                <Bio />
                <Values />
                <Experience />
                <Platforms />
                <Certifications />
            </main>
            <ContactCta />
        </>
    );
}
