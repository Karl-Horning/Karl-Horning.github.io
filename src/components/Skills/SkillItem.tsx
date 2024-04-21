import { Card, CardBody, Link } from "@nextui-org/react";
import * as Icons from "@/components/Icons/Icons";

/**
 * Props for SkillItem component
 * @typedef {Object} SkillItemProps
 * @property {string} skill - The skill to display, must be one of "bootstrap", "css3", "electron", "git", "graphQl", "html5", "markdown", "mongoDb", "nextJs", "nodeJs", "npm", "postgreSql", "python", "tailwindCss"
 * @property {string} link - The link associated with the skill
 */
interface SkillItemProps {
    skill:
        | "bootstrap"
        | "css3"
        | "electron"
        | "git"
        | "graphQl"
        | "html5"
        | "markdown"
        | "mongoDb"
        | "nextJs"
        | "nodeJs"
        | "npm"
        | "postgreSql"
        | "python"
        | "tailwindCss";
    link: string;
}

/**
 * SkillItem component displays a skill card with its icon and title
 * @param {Object} props - The props for SkillItem component
 * @param {string} props.skill - The skill to display, must be one of "bootstrap", "css3", "electron", "git", "graphQl", "html5", "markdown", "mongoDb", "nextJs", "nodeJs", "npm", "postgreSql", "python", "tailwindCss"
 * @param {string} props.link - The link associated with the skill
 * @returns {JSX.Element} JSX Element representing the SkillItem
 */
export default function SkillItem({ skill, link }: Readonly<SkillItemProps>) {
    const skillIcons = {
        bootstrap: {
            icon: Icons.BootstrapIcon,
            title: "Bootstrap",
        },
        css3: {
            icon: Icons.Css3Icon,
            title: "CSS3",
        },
        electron: {
            icon: Icons.ElectronIcon,
            title: "Electron",
        },
        git: {
            icon: Icons.GitIcon,
            title: "Git",
        },
        graphQl: {
            icon: Icons.GraphQlIcon,
            title: "GraphQL",
        },
        html5: {
            icon: Icons.Html5Icon,
            title: "HTML5",
        },
        markdown: {
            icon: Icons.MarkdownIcon,
            title: "Markdown",
        },
        mongoDb: {
            icon: Icons.MongoDbIcon,
            title: "MongoDB",
        },
        nextJs: {
            icon: Icons.NextJsIcon,
            title: "Next.js",
        },
        nodeJs: {
            icon: Icons.NodeJsIcon,
            title: "Node.js",
        },
        npm: {
            icon: Icons.NpmIcon,
            title: "NPM",
        },
        postgreSql: {
            icon: Icons.PostgreSqlIcon,
            title: "PostgreSQL",
        },
        python: {
            icon: Icons.PythonIcon,
            title: "Python",
        },
        tailwindCss: {
            icon: Icons.TailwindCssIcon,
            title: "Tailwind CSS",
        },
    };

    const selectedSkill = skillIcons[skill];

    return (
        <Link href={link} target="_blank">
            <Card
                className="mb-10 h-[240px] w-[240px] border-none bg-white"
                isPressable
            >
                <CardBody className="items-center justify-center pb-0">
                    <selectedSkill.icon className="mr-1 text-8xl" />
                    <span className="text-2xl">{selectedSkill.title}</span>
                </CardBody>
            </Card>
        </Link>
    );
}
