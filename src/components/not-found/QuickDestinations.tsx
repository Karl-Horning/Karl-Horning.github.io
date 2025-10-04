import { quickDestinationItems } from "@/lib/constants/notFound";
import IconCard from "../ui/IconCard";

/**
 * Displays a set of quick navigation cards on the 404 page.
 *
 * Provides users with shortcuts to useful or popular destinations
 * on the site, helping them recover from navigation errors.
 * Each destination is sourced from `quickDestinationItems` and
 * rendered using the shared `IconCard` component.
 *
 * @remarks
 * The layout uses a responsive grid — a single column on small screens
 * and three columns on larger screens — ensuring clear visibility and
 * easy navigation across devices.
 *
 * @returns A grid of `IconCard` components representing quick navigation links.
 */
export default function QuickDestinations() {
    return (
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {quickDestinationItems.map(({ title, icon: Icon, ...props }) => (
                <IconCard
                    key={title}
                    title={title}
                    icon={<Icon />}
                    {...props}
                />
            ))}
        </div>
    );
}
