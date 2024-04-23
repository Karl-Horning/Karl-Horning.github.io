import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Personal from "@/components/Personal/Personal";
import Skills from "@/components/Skills/Skills";
import Work from "@/components/Work/Work";
import { Poppins500 } from "@/fonts";

export default function Home() {
    return (
        <main className={Poppins500.className}>
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
