import { icons } from "@/lib/constants/icons";
import IconBox from "../ui/IconBox";
import Pill from "../ui/Pill";

const { ExternalLinkIcon, ProjectIcon } = icons;

interface ProjectsCardProps {
    /**
     * The project name, displayed as the card title.
     */
    name: string;

    /**
     * A short description of the project's purpose or features.
     */
    description: string;

    /**
     * A list of key technologies used in the project.
     * Each one is rendered as a styled pill.
     */
    technologies: string[];

    /**
     * URL to the project's repository (e.g., GitHub or GitLab).
     */
    repoLink: string;

    /**
     * URL to the project's documentation or demo site.
     */
    docsLink: string;
}

/**
 * A card component that showcases an individual project.
 *
 * Displays:
 * - Project name and description
 * - Technology stack as pills
 * - Project icon in a styled `IconBox`
 * - External links to the repo and documentation
 *
 * Used within the `Projects` section to present recent or featured projects.
 *
 * @param props - The properties for the project card.
 * @param props.name - The project title.
 * @param props.description - A short project description.
 * @param props.technologies - An array of technologies rendered as pills.
 * @param props.repoLink - External link to the project repository.
 * @param props.docsLink - External link to the project documentation.
 * @returns A styled `<article>` representing a project card.
 */
export default function ProjectsCard({
    name,
    description,
    technologies,
    repoLink,
    docsLink,
}: ProjectsCardProps) {
    return (
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-transparent transition hover:ring-secondary dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <ul className="mt-3 flex gap-2">
                        {technologies.map((technology) => (
                            <li key={technology} className="text-xs">
                                <Pill
                                    text={technology}
                                    bgColour="bg-slate-200 dark:bg-slate-800"
                                    mainColour="text-slate-800 dark:text-slate-200"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <IconBox
                    icon={<ProjectIcon />}
                    bgColour="bg-secondary/10"
                    mainColour="text-secondary"
                />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {description}
            </p>
            <div className="mt-4 flex gap-3">
                <a
                    href={repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-secondary hover:underline"
                >
                    <span className="flex items-center justify-center gap-1">
                        Repo <ExternalLinkIcon className="text-lg" />
                    </span>
                </a>
                <a
                    href={docsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-secondary hover:underline"
                >
                    Docs
                </a>
            </div>
        </article>
    );
}
