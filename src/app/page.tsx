import Header from "@/components/Header/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Work from "@/components/Work/Work";
import Personal from "@/components/Personal/Personal";
import Contact from "@/components/Contact/Contact";

export default function Home() {
    return (
        <main>
            <Header />
            <About />
            <Skills />
            <Blog />
            <Work />
            <Personal />
            <Contact />
        </main>
    );
}
