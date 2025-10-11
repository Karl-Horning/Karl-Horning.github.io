import ButtonLink from "@/components/ui/ButtonLink";
import { externalLinks, internalRoutes, icons } from "@/lib/constants/ui";

const { CoffeeIcon, RssIcon } = icons;
const { KofiLink } = externalLinks;
const { RssFeed } = internalRoutes;

/**
 * Displays a footer section for the blog landing page.
 *
 * Encourages readers to support the author or subscribe to updates.
 * Includes calls-to-action such as "Buy me a coffee" (Ko-fi)
 * and an RSS feed link for following new posts.
 *
 * Typically used at the bottom of the blog index page.
 */
export default function BlogLandingFooter() {
    return (
        <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
            <div className="via-secondary/10 rounded-3xl bg-gradient-to-br from-primary/10 to-navy/10 p-8 text-slate-900 shadow-sm dark:bg-gradient-to-br dark:from-navy/60 dark:via-slate-900 dark:to-slate-900 dark:text-slate-100 dark:ring-1 dark:ring-white/10">
                <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto]">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">
                            Blog updates
                        </h2>
                        <p className="mt-2 max-w-prose text-slate-700 dark:text-slate-300">
                            Follow along for new posts and projects — or support
                            my writing on Ko-fi.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 md:flex-row">
                        <ButtonLink
                            href={KofiLink}
                            text="Buy me a coffee"
                            icon={<CoffeeIcon />}
                        />
                        <ButtonLink
                            href={RssFeed}
                            text="RSS Feed"
                            icon={<RssIcon />}
                            type="secondary"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
