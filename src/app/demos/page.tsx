import SelectedDemos from "@/components/demos/SelectedDemos";
import ContactCta from "@/components/ui/ContactCta";
import PageIntroSplit from "@/components/ui/PageIntroSplit";
import { jsonLdDemos } from "@/lib/constants/site-metadata";
import { externalLinks, icons, internalRoutes } from "@/lib/constants/ui";
import { createMetadata } from "@/lib/helpers";

const { GitHubIcon, DemoIcon, ReadMoreIcon } = icons;
const { GitHubLink } = externalLinks;
const { DemosRoute } = internalRoutes;

/** Provide entry point for the Demos page.
 *
 * Define the server component for the main Demos route.
 * Combine static SEO metadata with accessible UI composition.
 *
 * Layout includes:
 * - Intro section with hero icon and CTAs
 * - Sorted demo grid (see SelectedDemos)
 * - Contact call-to-action for collaboration
 *
 * @remarks
 * All metadata is generated statically at build time for performance.
 */
export const metadata = createMetadata({
    title: "Demos",
    path: DemosRoute,
    jsonLd: jsonLdDemos,
});

/** Render the Demos landing page.
 *
 * Compose intro, demo grid, and contact CTA sections.
 *
 * @returns JSX fragment with accessible layout.
 * @example
 * // Automatically used by Next.js for /demos route
 * export default function Demos() { ... }
 */
export default function Demos() {
    return (
        <>
            {/* Intro block: sets tone and navigation targets */}
            <PageIntroSplit
                title="Demos"
                tagline="Featured Demos & Repos"
                leadParagraph="Examples of my work in web development, learning technology, and experimentation."
                heroIcon={<DemoIcon />}
                primaryCta={{
                    href: `${DemosRoute}#recentDemos`,
                    text: "Recent demos",
                    icon: <ReadMoreIcon />,
                }}
                secondaryCta={{
                    href: GitHubLink,
                    text: "Browse all",
                    icon: <GitHubIcon />,
                }}
            />

            {/* Mid-page demo showcase */}
            <SelectedDemos />

            {/* Footer call-to-action for engagement */}
            <ContactCta
                title="Exploring similar ideas in your own work?"
                description="I'm happy to share resources, documentation, or discuss implementation details."
            />
        </>
    );
}
