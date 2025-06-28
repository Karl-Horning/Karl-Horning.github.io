import { internalRoutes } from "@/constants/links";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
    title: "About",
    path: internalRoutes.about,
});

export default function Contact() {
    return (
        <main className="mx-auto max-w-6xl pt-16 md:pt-36">
            <section className="mx-auto max-w-4xl px-12 py-8 text-center">
                <h1 className="mb-6 text-4xl font-bold text-[var(--colour-primary)]">
                    About Me
                </h1>
            </section>
        </main>
    );
}
