import { getProjectItems } from "@/lib/projects/getProjects";
import ProjectsCard from "./ProjectsCard";

/**
 * Displays the "Recent Projects" section of the site.
 *
 * Fetches a list of project data from the local JSON source using
 * `getProjectItems()` and renders them as `ProjectsCard` components.
 * The layout alternates automatically between left and right image
 * alignment for visual variety.
 *
 * @returns The rendered project grid section containing all recent projects.
 */
export default async function RecentProjects() {
    const recentProjectItems = await getProjectItems();
    return (
        <section id="recentProjects" className="mx-auto mt-20 max-w-6xl px-4">
            {recentProjectItems.map(({ title, ...props }, index) => (
                <ProjectsCard
                    key={title}
                    title={title}
                    reverse={index % 2 === 1}
                    {...props}
                />
            ))}
        </section>
    );
}
