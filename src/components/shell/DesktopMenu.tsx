import { navLinks } from "@/lib/constants/links";
import Link from "next/link";
import ButtonLink from "../ui/ButtonLink";
import { internalRoutes } from "@/lib/constants/links";
import { icons } from "@/lib/constants/icons";

const { ContactRoute } = internalRoutes;
const { HireMeIcon } = icons;

/**
 * Desktop navigation menu component for larger viewports.
 *
 * @component
 * @returns The rendered desktop menu.
 */
export default function DesktopMenu() {
    return (
        <div id="desktop-menu" className="hidden items-center gap-3 md:flex">
            {navLinks.map(({ label, href }) =>
                label === "Contact" ? (
                    <ButtonLink
                        key={label}
                        text="Hire me"
                        href={href}
                        icon={<HireMeIcon />}
                    />
                ) : (
                    <Link
                        key={label}
                        href={href}
                        className="rounded px-2 py-1 text-sm font-medium text-slate-700 transition hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-300 dark:hover:text-primary dark:focus-visible:ring-offset-slate-900"
                    >
                        {label}
                    </Link>
                )
            )}
        </div>
    );
}
