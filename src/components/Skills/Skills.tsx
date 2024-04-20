import PageSection from "@/components/PageSection/PageSection";
import CircularProgressBar from "@/components/Skills/CircularProgressBar";

export default function Skills() {
    const skills = [
        { skill: "markdown", link: "#", value: 100 },
        { skill: "git", link: "#", value: 100 },
        { skill: "graphQl", link: "#", value: 100 },
        { skill: "nodeJs", link: "#", value: 100 },
        { skill: "nextJs", link: "#", value: 100 },
        { skill: "postgreSql", link: "#", value: 80 },
        { skill: "mongoDb", link: "#", value: 80 },
        { skill: "html5", link: "#", value: 60 },
        { skill: "css3", link: "#", value: 60 },
        { skill: "bootstrap", link: "#", value: 40 },
        { skill: "electron", link: "#", value: 20 },
        { skill: "python", link: "#", value: 20 },
    ];

    return (
        <PageSection id="skills" header="Skills" bgColour="bg-red">
            <p className="pb-20 text-center">
                Below are the skills that I use regularly and the frequency of
                use.
            </p>
            <div className="grid place-items-center gap-1 md:grid-cols-4">
                {skills.map((skill) => (
                    <CircularProgressBar
                        key={skill.value}
                        skill={skill.skill}
                        value={skill.value}
                    />
                ))}
            </div>
        </PageSection>
    );
}
