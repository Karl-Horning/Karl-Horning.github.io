import { createMetadata } from "@/lib/metadata";
import QuickDestinations from "@/components/not-found/QuickDestinations";
import Image from "next/image";
import { assets } from "@/lib/constants/ui";
import ContactCta from "@/components/ui/ContactCta";
import { notFoundTopics } from "@/lib/constants/notFound";
import TopicChipsList from "@/components/ui/TopicChipsList";

const { notFoundImage } = assets;

export const metadata = createMetadata({
    title: "404",
    description:
        "The link may be broken or the page removed. Here are a few common destinations and topics you might be after.",
});

/**
 * Renders the custom 404 error page shown when a user visits a non-existent route.
 *
 * Provides helpful navigation options and a search form to guide users
 * back to relevant areas of the site. Designed with accessibility and
 * clarity in mind rather than a purely decorative "error" display.
 *
 * @remarks
 * The layout includes quick links, topic chips, a search input, and a
 * friendly call-to-action for further assistance. It uses light and dark
 * mode styling for consistent visual balance.
 *
 * @returns The structured 404 error page with helpful navigation and contact options.
 */
export default function NotFound() {
    return (
        <section id="not-found" className="hero-bg">
            <div className="mx-auto max-w-6xl px-4 pt-20">
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_20rem]">
                        <div>
                            <p className="text-sm font-semibold text-primary">
                                404 — Page missing
                            </p>
                            <h1 className="mt-3 text-4xl font-extrabold tracking-tight">
                                Let&apos;s get you back on course
                            </h1>
                            <p className="mt-3 text-slate-700 dark:text-slate-300">
                                The link may be broken or the page removed. Here
                                are a few common destinations and topics you
                                might be after.
                            </p>

                            <QuickDestinations />

                            <div className="mt-6">
                                <ul className="mt-6 flex flex-wrap gap-2">
                                    <TopicChipsList topics={notFoundTopics} />
                                </ul>
                            </div>
                        </div>

                        <Image
                            src={notFoundImage}
                            height={200}
                            width={200}
                            alt=""
                            className="mx-auto w-full max-w-md rounded-2xl border border-slate-200 object-cover dark:border-slate-800"
                        />
                    </div>
                </div>
            </div>
            <ContactCta title="Still stuck?" description="I'm happy to help." />
        </section>
    );
}
