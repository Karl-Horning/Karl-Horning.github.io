import type { Metadata } from "next";
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

export const metadata: Metadata = {
    title: "Karl Horning's Portfolio Site",
    description:
        "Welcome to Karl Horning's digital domain—a curated collection of projects, insights, and innovations in web development and design.",
    generator: "Next.js",
    applicationName: "Karl Horning's Portfolio Site",
    keywords: [
        "Next.js",
        "JavaScript",
        "GraphQL",
        "Software Engineer",
        "Portfolio",
    ],
    authors: [
        {
            name: "Karl Horning",
            url: "https://www.linkedin.com/in/karl-horning/",
        },
    ],
    creator: "Karl Horning",
    publisher: "Karl Horning",
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

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
                className={`${inter.className} min-h-screen bg-background font-sans`}
            >
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
