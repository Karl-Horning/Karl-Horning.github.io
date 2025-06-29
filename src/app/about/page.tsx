import AboutPhotoCard from "@/components/AboutPage/AboutPhotoCard";
import AboutIntro from "@/components/AboutPage/AboutIntro";
import AboutValues from "@/components/AboutPage/AboutValues";
import AboutSkills from "@/components/AboutPage/AboutSkills";
import AboutBadges from "@/components/AboutPage/AboutBadges";
import { internalRoutes } from "@/constants/links";
import { createMetadata } from "@/lib/metadata";
import Head from "next/head";
import { jsonLdAbout } from "@/constants/jsonLd";

export const metadata = createMetadata({
    title: "About",
    path: internalRoutes.about,
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
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLdAbout),
                    }}
                    key="jsonld-person"
                />
            </Head>
            <main className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 pt-16 text-text sm:grid-cols-2 md:pt-36 lg:grid-cols-3">
                <AboutPhotoCard />
                <AboutIntro />
                <AboutValues />
                <AboutSkills />
                <AboutBadges />
            </main>
        </>
    );
}
