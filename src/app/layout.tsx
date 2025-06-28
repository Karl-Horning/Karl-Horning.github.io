import { Inter, Poppins, Rubik_Glitch } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { externalLinks } from "@/constants/links";

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
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Karl Horning",
                            url: externalLinks.portfolio,
                            sameAs: [
                                externalLinks.linkedIn,
                                externalLinks.gitHub,
                            ],
                            jobTitle: "Web Developer",
                            worksFor: {
                                "@type": "Organization",
                                name: "Freelance",
                            },
                        }),
                    }}
                ></script>
            </head>
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
