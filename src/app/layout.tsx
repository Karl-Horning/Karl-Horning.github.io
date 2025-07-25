import "./styles/fonts.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { jsonLdHome } from "@/constants/jsonLd";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className="scroll-smooth"
            style={{ scrollBehavior: "smooth" }}
        >
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLdHome),
                    }}
                />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/android-chrome-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="512x512"
                    href="/android-chrome-512x512.png"
                />
            </head>
            <body className="text-foreground flex min-h-screen flex-col bg-background font-sans">
                <Navbar />
                <main className="flex-1 pt-16">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
