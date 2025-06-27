import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar";
import Personal from "@/components/Personal/Personal";
import Skills from "@/components/Skills/Skills";
import Work from "@/components/Work/Work";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Work />
            <Personal />
            <Contact />
            <Footer />
        </main>
    );
}
