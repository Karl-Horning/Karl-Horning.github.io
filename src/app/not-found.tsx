import Section from "@/components/Section";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import { internalRoutes } from "@/constants/links";

const { HomeRout } = internalRoutes;

export const metadata = createMetadata({
    title: "404",
    description:
        "The page you're looking for doesn't exist. Maybe try heading home?",
});

/**
 * A custom 404 page component rendered when a user navigates to a non-existent route.
 *
 * This page includes:
 * - A heading and message indicating the error.
 * - A stylised "terminal" interface with simulated commands and an error output.
 * - A button to navigate back to the homepage.
 *
 * @component
 * @returns A 404 error page styled with a retro terminal aesthetic.
 */
export default function NotFound() {
    return (
        <section className="text-foreground flex flex-col bg-background px-6 pb-12">
            <div className="flex flex-1 flex-col items-center justify-center gap-8">
                {/* Header & Message */}
                <Section id="not-found" header="404 Error" headerLevel={1}>
                    <p className="mx-auto max-w-3xl text-lg text-text md:text-xl">
                        Oops...! (ʘ_ʘ&apos;)
                    </p>
                </Section>

                {/* Terminal */}
                <div
                    className="border-border w-full max-w-xl rounded-2xl border bg-muted shadow-lg"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    {/* Terminal Header */}
                    <div className="border-border flex items-center gap-2 rounded-t-2xl border-b bg-muted/80 px-4 py-2">
                        <span className="h-3 w-3 rounded-full bg-red-500" />
                        <span className="h-3 w-3 rounded-full bg-yellow-400" />
                        <span className="h-3 w-3 rounded-full bg-green-500" />
                        <span className="text-muted-foreground ml-auto text-xs">
                            404.sh
                        </span>
                    </div>

                    {/* Terminal Content */}
                    <div className="rounded-b-2xl bg-black px-4 py-6 font-mono text-sm text-green-500">
                        <p className="mb-2">&gt; cd /missing-page</p>
                        <p className="mb-2">&gt; ls</p>
                        <p className="mb-2 text-red-500">
                            ls: cannot access &apos;.&apos;: No such file or
                            directory
                        </p>
                        <p className="mb-6">&gt; return /</p>

                        <p className="mb-2">&gt; Error 404: page not found</p>
                        <p className="mb-6">
                            Try returning to a safe directory:
                        </p>
                        <Link
                            href={HomeRout}
                            className="mb-6 inline-block border border-green-400 px-4 py-2 transition hover:bg-green-400 hover:text-black focus:outline-none focus:ring focus:ring-green-400"
                        >
                            [ home ]
                        </Link>

                        <div className="mb-10 text-sm opacity-60">
                            <span className="animate-pulse">█</span> waiting for
                            input...
                        </div>
                        <input
                            type="text"
                            placeholder="Type a command..."
                            className="w-full border-none bg-transparent text-green-500 placeholder-green-700 outline-none"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
