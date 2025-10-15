import { PropsWithChildren } from "react";
import { ProjectMeta } from "@/types";
import AuthorCard from "@/components/ui/AuthorCard";
import EntryCoverImage from "@/components/ui/EntryCoverImage";
import EntryHeader from "@/components/ui/EntryHeader";
import PrevNextButtons from "@/components/ui/PrevNextButtons";
import ProjectsSidebar from "@/components/projects/ProjectsSidebar";
import ShareButtons from "@/components/ui/ShareButtons";
import { getPrevNextProject } from "@/lib/helpers/getPrevNext";
import ContactCta from "@/components/ui/ContactCta";

type ProjectLayoutProps = PropsWithChildren<ProjectMeta>;

/**
 * Provides the full layout structure for an individual project page,
 * combining header, main content, sidebar navigation, sharing options,
 * author details, and previous/next navigation.
 *
 * This component is used by project detail pages and automatically
 * integrates features such as:
 * - A dynamic “On this page” sidebar generated from headings.
 * - A consistent header with metadata and topic tags.
 * - A responsive layout optimised for readability.
 *
 * @component
 * @param props - Component properties.
 * @param props.title - The project title displayed in the header.
 * @param props.description - A short summary of the project’s purpose or focus.
 * @param props.date - The ISO 8601 date string representing when the project was created or last updated.
 * @param props.readingTime - Estimated reading time for the content, in minutes.
 * @param props.slug - The project’s slug, used to construct share and navigation URLs.
 * @param props.thumbnail - The project’s main cover image and its alt text.
 * @param props.topics - Tags or topics associated with the project.
 * @param props.children - The main page content (usually an article or case study).
 * @returns A fully composed layout for a project case study page.
 */
export default async function ProjectLayout({
    children,
    date,
    description,
    readingTime,
    slug,
    thumbnail,
    title,
    topics,
}: ProjectLayoutProps) {
    const { previous, next } = await getPrevNextProject(slug);

    return (
        <>
            <EntryHeader
                title={title}
                description={description}
                date={date}
                readingTime={readingTime}
                topics={topics}
            />
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pt-20 md:grid-cols-[16rem_1fr]">
                <ProjectsSidebar rootSelector="#main" />
                <div className="max-w-3xl">
                    <EntryCoverImage {...thumbnail} />
                    <main
                        id="main"
                        className="prose prose-slate dark:prose-invert max-w-none"
                    >
                        {children}
                    </main>
                    <ShareButtons slug={`projects/${slug}`} />
                    <AuthorCard />
                    {/* Populates the previous and next buttons dynamically from JSON data */}
                    {(previous || next) && (
                        <PrevNextButtons
                            contextTitle="Case study"
                            itemType="section"
                            previous={previous ?? undefined}
                            next={next ?? undefined}
                        />
                    )}
                </div>
            </div>
            <ContactCta
                title="Want a deeper dive?"
                description="I can share private repos, extended write-ups and implementation notes on request."
            />
        </>
    );
}
