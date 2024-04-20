import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import Skills from "@/components/Skills/Skills";
import { Poppins500 } from "@/fonts";


export default function Home() {
    return (
        <main className={Poppins500.className}>
            <Header />
            <About />
            <Skills />
        </main>
    );
}
