import { Inter, Poppins, Rubik_Glitch } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"], // Bold
    variable: "--font-poppins",
});

const rubikGlitch = Rubik_Glitch({
    subsets: ["latin"],
    weight: "400", // Only weight available
    variable: "--font-rubik-glitch",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${poppins.variable} ${rubikGlitch.variable} scroll-smooth`}
            style={{ scrollBehavior: "smooth" }}
        >
            <body
                className={`${inter.className}flex min-h-screen flex-col bg-background font-sans text-foreground`}
            >
                <Navbar />
                <main className="flex-1 pt-16">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
