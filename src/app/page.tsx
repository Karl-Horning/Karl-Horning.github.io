import About from "@/components/About";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

import { createMetadata } from "@/lib/metadata";
import { internalRoutes } from "@/constants/links";
import { jsonLdHome } from "@/constants/jsonLd";

export const metadata = createMetadata({
    title: "Home",
    path: internalRoutes.home,
});

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Skills />
            <Blog />
            <Contact />
        </main>
    );
}
