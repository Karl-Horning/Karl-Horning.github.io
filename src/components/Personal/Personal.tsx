import PageSection from "@/components/PageSection/PageSection";
import * as Icons from "@/components/Icons/Icons";
import * as ProfileLinks from "@/components/ProfileLinks/ProfileLinks";
import WorkAndProjectsImage from "@/components/WorkAndProjects/WorkAndProjectsImage";
import WorkAndProjectsText from "@/components/WorkAndProjects/WorkAndProjectsText";

/**
 * Personal component displays personal projects completed.
 * @component
 * @returns {JSX.Element} JSX Element representing the Personal component.
 */
export default function Personal() {
    const portfolioAppAvailableFromTags = [
        {
            link: ProfileLinks.portfolioSiteLink,
            colour: "primary",
            icon: <Icons.GitHubIcon />,
            name: "GitHub",
        },
    ];

    const portfolioAppBuiltUsingTags = [
        {
            link: ProfileLinks.gitHubNextJsTagLink,
            colour: "secondary",
            icon: <Icons.NextJsIcon />,
            name: "Next.js",
        },
        {
            link: ProfileLinks.gitHubTailwindTagLink,
            colour: "secondary",
            icon: <Icons.TailwindCssIcon />,
            name: "Tailwind CSS",
        },
        {
            link: ProfileLinks.gitHubTypeScriptTagLink,
            colour: "secondary",
            icon: <Icons.TypeScriptIcon />,
            name: "TypeScript",
        },
    ];

    return (
        <PageSection id="personal" header="Personal Projects" bgColour="bg-red">
            <p className="mb-20 text-center text-black">
                Welcome to my sandbox of innovation and learning. Here, I put my
                spare time and professional knowledge to the test, experimenting
                with new ideas and honing my skills through personal projects.
            </p>

            <div className="gap-4 md:grid md:grid-cols-12">
                <WorkAndProjectsText
                    title="Portfolio Site"
                    description="Introducing my personal portfolio site—a testament to my journey in web development and design. Crafted with Next.js, Tailwind CSS, and TypeScript, this portfolio site reflects my dedication to clean design and efficient development. Hosted on GitHub and deployed seamlessly with YAML and GitHub Actions, it serves as a canvas where my technical skills and creative expression harmonize, providing a window into my holistic approach to crafting digital experiences."
                    order={1}
                    availableFromTags={portfolioAppAvailableFromTags}
                    builtUsingTags={portfolioAppBuiltUsingTags}
                />

                <WorkAndProjectsImage
                    src="/work-and-projects/portfolio-site.webp"
                    alt="This site!"
                    order={2}
                    className="border-8 border-white"
                />
            </div>
        </PageSection>
    );
}
