import ButtonLink from "./ButtonLink";
import { icons } from "@/lib/constants/icons";
import { externalLinks, internalRoutes } from "@/lib/constants/links";

const { ContactIcon, LinkedInIcon } = icons;
const { LinkedInLink } = externalLinks;
const { ContactRoute } = internalRoutes;

interface ContactCtaProps {
    /**
     * Optional custom heading for the section.
     *
     * Defaults to "Let's collaborate" if not provided.
     */
    title?: string;

    /**
     * Optional supporting text displayed beneath the heading.
     *
     * Defaults to a general invitation for freelance, consultancy,
     * or full-time work in EdTech, accessibility, and development.
     */
    description?: string;
}

/**
 * Renders the site's contact call-to-action section.
 *
 * Displays a visually distinct gradient block encouraging visitors
 * to get in touch. Includes a title, optional description, and two
 * buttons — one linking to the internal contact form and the other
 * to an external LinkedIn profile.
 *
 * @param props - Component properties.
 * @param props.title - Optional custom heading text for the section.
 * @param props.description - Optional supporting paragraph beneath the heading.
 *
 * @remarks
 * The background features a soft gradient that adapts to theme:
 * lighter tones in light mode, and a navy-based gradient with
 * subtle white ring effects in dark mode.
 *
 * @returns The "Contact" call-to-action section with heading, text, and buttons.
 */
export default function ContactCta({ title, description }: ContactCtaProps) {
    return (
        <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
            <div className="via-secondary/10 rounded-3xl bg-gradient-to-br from-primary/10 to-navy/10 p-8 text-slate-900 shadow-sm dark:bg-gradient-to-br dark:from-navy/60 dark:via-slate-900 dark:to-slate-900 dark:text-slate-100 dark:ring-1 dark:ring-white/10">
                <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto]">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">
                            {title ? title : "Let's collaborate"}
                        </h2>
                        <p className="mt-2 max-w-prose text-slate-700 dark:text-slate-300">
                            {description
                                ? description
                                : "Open to freelance projects, consultancy, or a full-time role in EdTech, accessibility, and full-stack development."}
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <ButtonLink
                            href={`${ContactRoute}#contactForm`}
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
