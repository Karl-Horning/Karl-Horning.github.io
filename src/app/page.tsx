import About from "@/components/About";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

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
