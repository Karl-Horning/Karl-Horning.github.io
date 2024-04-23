import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
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
            <Footer />
        </main>
    );
}
