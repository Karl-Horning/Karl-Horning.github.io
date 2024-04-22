import PageSection from "@/components/PageSection/PageSection";
import SkillItem from "@/components/Skills/SkillItem";
import * as ProfileLinks from "@/components/ProfileLinks/ProfileLinks";

/**
 * Skills component displays a section containing skills and their corresponding links
 * @component
 * @returns {JSX.Element} JSX Element representing the Skills component
 */
export default function Skills() {
    /**
     * Set containing all valid skills
     * @type {Set<string>}
     */
    const validSkills = new Set([
        "markdown",
        "git",
        "graphQl",
        "nodeJs",
        "nextJs",
        "postgreSql",
        "mongoDb",
        "html5",
        "css3",
        "bootstrap",
        "electron",
        "python",
        "npm",
        "tailwindCss",
    ]);

    /**
     * Array containing skills with their corresponding links
     * @type {Array<{ skill: string, link: string }>}
     */
    const skillsWithLinks = [
        {
            skill: "markdown",
            link: ProfileLinks.gitHubMarkdownTagLink,
        },
        {
            skill: "git",
            link: ProfileLinks.gitHubGitTagLink,
        },
        {
            skill: "graphQl",
            link: ProfileLinks.gitHubGraphQlTagLink,
        },
        {
            skill: "nodeJs",
            link: ProfileLinks.gitHubNodeJsTagLink,
        },
        {
            skill: "nextJs",
            link: ProfileLinks.gitHubNextJsTagLink,
        },
        {
            skill: "postgreSql",
            link: ProfileLinks.gitHubPostgreSqlTagLink,
        },
        {
            skill: "mongoDb",
            link: ProfileLinks.gitHubMongoDbTagLink,
        },
        {
            skill: "html5",
            link: ProfileLinks.gitHubHtmlTagLink,
        },
        {
            skill: "css3",
            link: ProfileLinks.gitHubCssServerTagLink,
        },
        {
            skill: "bootstrap",
            link: ProfileLinks.gitHubBootstrapTagLink,
        },
        {
            skill: "electron",
            link: ProfileLinks.gitHubElectronTagLink,
        },
        {
            skill: "python",
            link: ProfileLinks.gitHubPythonTagLink,
        },
    ];

    // Verify each skill in skillsWithLinks matches the Skill type
    skillsWithLinks.forEach(({ skill }) => {
        // Check if the skill is not in the validSkills set
        if (!validSkills.has(skill)) {
            console.error(
                `Skill '${skill}' does not match any predefined values.`
            );
        }
    });

    return (
        <PageSection id="skills" header="Skills & Experience" bgColour="bg-red">
            <p className="pb-5 text-center text-white">
                I predominantly work on the back end, but a number of my
                projects include front ends developed by me.
            </p>

            <p className="pb-20 text-center text-white">
                Below are the skills that I use regularly. Each skill is a link
                to my GitHub filtered by the skill as a tag. Please note that
                much of my back end work is in private repositories.
            </p>

            <div className="grid place-items-center gap-1 md:grid-cols-4">
                {skillsWithLinks.map((skillWithLink) => (
                    <SkillItem
                        key={skillWithLink.skill}
                        skill={skillWithLink.skill}
                        link={skillWithLink.link}
                    />
                ))}
            </div>
        </PageSection>
    );
}
