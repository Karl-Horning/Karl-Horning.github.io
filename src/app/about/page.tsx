import { internalRoutes } from "@/lib/constants/links";
import { createMetadata } from "@/lib/metadata";
import { jsonLdAbout } from "@/lib/constants/jsonLd";
import Hero from "@/components/ui/Hero";
import Bio from "@/components/about/Bio";
import Values from "@/components/about/Values";
import Experience from "@/components/about/Experience";
import Platforms from "@/components/about/Platforms";
import ContactCta from "@/components/ui/ContactCta";
import Certifications from "@/components/about/Certifications";

const { AboutRoute } = internalRoutes;

export const metadata = createMetadata({
    title: "About",
    path: AboutRoute,
    jsonLd: jsonLdAbout,
});

/**
 * The main About page component.
 *
 * Composes multiple presentational components to display
 * an overview about the user, including a photo card,
 * introductory text, personal values, skills grid, and badges.
 *
 * This component arranges child components in a responsive grid layout.
 *
 * Metadata for the page title and path is created and exported separately.
 *
 * @component
 */
export default function About() {
    return (
        <>
            <Hero
                title="About me"
                leadParagraph="I'm Karl — a full-stack JavaScript/TypeScript developer and learning technologist. I build accessible interfaces and pragmatic, well-documented APIs for people in higher education and beyond."
                highlights={["CMALT", "CELTA", "PTLLS"]}
            />
            <Bio />
            <Values />
            <Experience />
            <Platforms />
            <Certifications />
            <ContactCta />
        </>
    );
}
