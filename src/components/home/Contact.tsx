import ButtonLink from "../ui/ButtonLink";
import { icons } from "@/lib/constants/icons";
import { externalLinks, internalRoutes } from "@/lib/constants/links";

const { ContactIcon, LinkedInIcon } = icons;
const { LinkedInLink } = externalLinks;
const { ContactRoute } = internalRoutes;

/**
 * Displays the "Contact" section of the site.
 *
 * Renders a styled gradient container with a heading, supporting text,
 * and action buttons for getting in touch. The primary action links to
 * the internal contact page, while the secondary action links to an
 * external LinkedIn profile.
 *
 * @remarks
 * The background uses a light gradient in light mode and switches to
 * a darker gradient with subtle ring styling in dark mode.
 *
 * @returns A `<section>` element containing the contact call-to-action.
 */
export default function Contact() {
    return (
        <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
            <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-navy/10 p-8 text-slate-900 shadow-sm dark:bg-gradient-to-br dark:from-navy/60 dark:via-slate-900 dark:to-slate-900 dark:text-slate-100 dark:ring-1 dark:ring-white/10">
                <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto]">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">
                            Let&apos;s collaborate
                        </h2>
                        <p className="mt-2 max-w-prose text-slate-700 dark:text-slate-300">
                            Open to freelance projects, consultancy, or a
                            full-time role in EdTech, accessibility, and
                            full-stack development.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <ButtonLink
                            href={ContactRoute}
                            text="Contact me"
                            icon={<ContactIcon />}
                        />
                        <ButtonLink
                            href={LinkedInLink}
                            text="LinkedIn"
                            icon={<LinkedInIcon />}
                            type="secondary"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
