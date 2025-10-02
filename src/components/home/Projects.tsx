import ProjectsCard from "./ProjectsCard";

// TODO: replace with a dynamic data source in the future
const recentProjects = [
    {
        name: "Visual Vault (Image Optimiser)",
        description:
            "A desktop image optimiser focused on speed, batch flows and sane defaults.",
        technologies: ["Electron", "Vite", "Sharp"],
        repoLink: "#",
        docsLink: "#",
    },
    {
        name: "Markdown Writing Tracker",
        description:
            "Daily word-count tracker (200-words-a-day) with reminders and exportable stats.",
        technologies: ["Next.js", "React", "Local-first"],
        repoLink: "#",
        docsLink: "#",
    },
];

/**
 * Displays the "Recent projects" section of the site.
 *
 * Renders a list of `ProjectsCard` components in a responsive
 * grid layout. Each card shows a project’s name, description,
 * key technologies, and optional repository or documentation links.
 *
 * @remarks
 * The project data is currently hard-coded (`recentProjects`)
 * but can be replaced with a dynamic data source in the future.
 *
 * @returns A `<section>` containing the recent projects heading
 * and a responsive grid of project cards.
 */
export default function Projects() {
    return (
        <section id="projects" className="mx-auto max-w-6xl px-4 pt-20">
            <h2 className="text-2xl font-bold tracking-tight">
                Recent projects
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {recentProjects.map((project) => (
                    <ProjectsCard key={project.name} {...project} />
                ))}
            </div>
        </section>
    );
}
