import { externalLinks, icons, internalRoutes } from "@/lib/constants/ui";
import { ProjectMeta } from "@/types";
import Image from "next/image";
import ButtonLink from "../ui/ButtonLink";
import TopicChipsList from "../ui/TopicChipsList";
import Link from "next/link";

const { ExternalLinkIcon, FolderIcon } = icons;
const { GitHubLink } = externalLinks;
const { ProjectsRoute } = internalRoutes;

type ProjectsCardProps = Pick<
    ProjectMeta,
    "slug" | "title" | "description" | "topics" | "repo"
> & {
    /**
     * Thumbnail image object containing the source and alt text
     * for the project cover image.
     */
    thumbnail: ProjectMeta["thumbnail"];

    /**
     * If `true`, the image will be displayed on the right and text on the left.
     * Defaults to `false`.
     */
    reverse?: boolean;
};

/**
 * Displays a project card with an image, description, topic tags, and links.
 *
 * The layout can be flipped using the `reverse` prop, allowing the image to
 * appear on the right and text content on the left. Each card is styled with
 * Tailwind CSS for consistent light and dark mode presentation.
 *
 * @component
 * @param {ProjectsCardProps} props - The properties for the ProjectsCard component.
 * @param {string} props.title - The project title displayed as the main heading.
 * @param {string} props.description - A short description of the project.
 * @param {string} props.thumbnail - The project's main cover image and its alt text.
 * @param {string} props.slug - The project slug used to generate internal case study links.
 * @param {string} props.repo - The GitHub repository name for the project.
 * @param {string[]} props.topics - A list of topic tags rendered as pill components.
 * @param {boolean} [props.reverse=false] - Determines whether to reverse the layout (image on the right).
 * @returns A responsive section containing a project preview with image, text, and links.
 */
export default function ProjectsCard({
    title,
    description,
    thumbnail,
    slug,
    repo,
    topics,
    reverse = false,
}: ProjectsCardProps) {
    return (
        <article className="card mt-8 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            {/* Image column */}
            <div className={reverse ? "md:order-2" : "md:order-1"}>
                <Image
                    className="rounded-3xl border border-slate-200 object-cover shadow-sm dark:border-slate-800"
                    src={thumbnail.src}
                    alt={thumbnail.alt}
                    height={540}
                    width={960}
                />
            </div>

            {/* Text column */}
            <div className={reverse ? "md:order-1" : "md:order-2"}>
                <Link href={`${ProjectsRoute}/${slug}`}>
                    <h2 className="text-2xl font-bold">{title}</h2>
                </Link>
                <p className="mt-2 text-slate-700 dark:text-slate-300">
                    {description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    <TopicChipsList topics={topics} />
                </div>

                <hr className="mt-6 border-slate-100 dark:border-slate-800" />

                <div className="mt-6 flex gap-3">
                    <ButtonLink
                        text="Read case study"
                        href={`${ProjectsRoute}/${slug}`}
                        icon={<FolderIcon />}
                    />
                    {repo && (
                        <ButtonLink
                            text="Repo"
                            href={repo}
                            icon={<ExternalLinkIcon />}
                            type="secondary"
                        />
                    )}
                </div>
            </div>
        </article>
    );
}
