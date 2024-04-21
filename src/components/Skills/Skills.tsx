import PageSection from "@/components/PageSection/PageSection";
import SkillItem from "@/components/Skills/SkillItem";

/**
 * Skills component displays a section containing skills and their corresponding links
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
            link: "https://github.com/Karl-Horning?tab=repositories&q=markdown&type=&language=&sort=",
        },
        {
            skill: "git",
            link: "https://github.com/Karl-Horning?tab=repositories&q=git&type=&language=&sort=",
        },
        {
            skill: "graphQl",
            link: "https://github.com/Karl-Horning?tab=repositories&q=graphql&type=&language=&sort=",
        },
        {
            skill: "nodeJs",
            link: "https://github.com/Karl-Horning?tab=repositories&q=node-js&type=&language=&sort=",
        },
        {
            skill: "nextJs",
            link: "https://github.com/Karl-Horning?tab=repositories&q=next-js&type=&language=&sort=",
        },
        {
            skill: "postgreSql",
            link: "https://github.com/Karl-Horning?tab=repositories&q=sql&type=&language=&sort=",
        },
        {
            skill: "mongoDb",
            link: "https://github.com/Karl-Horning?tab=repositories&q=mongodb&type=&language=&sort=",
        },
        {
            skill: "html5",
            link: "https://github.com/Karl-Horning?tab=repositories&q=html&type=&language=&sort=",
        },
        {
            skill: "css3",
            link: "https://github.com/Karl-Horning?tab=repositories&q=css&type=&language=&sort=",
        },
        {
            skill: "bootstrap",
            link: "https://github.com/Karl-Horning?tab=repositories&q=bootstrap&type=&language=&sort=",
        },
        {
            skill: "electron",
            link: "https://github.com/Karl-Horning?tab=repositories&q=electron&type=&language=&sort=",
        },
        {
            skill: "python",
            link: "https://github.com/Karl-Horning?tab=repositories&q=python&type=&language=&sort=",
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
