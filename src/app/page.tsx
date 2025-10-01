import Hero from "@/components/home/Hero";
import Highlights from "@/components/home/Highlights";
import Skills from "@/components/home/Skills";
import Blog from "@/components/home/Blog";
import Contact from "@/components/home/Contact";

import { createMetadata } from "@/lib/metadata";
import { internalRoutes } from "@/lib/constants/links";
import Projects from "@/components/home/Projects";

const { HomeRoute } = internalRoutes;

export const metadata = createMetadata({
    title: "Home",
    path: HomeRoute,
});

export default function Home() {
    return (
        <main>
            <Hero />
            <Highlights />
            <Skills />
            <Projects />
            <Blog />
            <Contact />
        </main>
    );
}
