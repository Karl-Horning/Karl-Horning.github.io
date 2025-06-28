import Header from "@/components/Header/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main>
            <Header />
            <About />
            <Skills />
            <Blog />
            <Contact />
        </main>
    );
}
