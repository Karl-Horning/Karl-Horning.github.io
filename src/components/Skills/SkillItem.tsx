import {
    BiLogoMongodb,
    BiLogoPostgresql,
    BiLogoTailwindCss,
} from "react-icons/bi";
import { FaBootstrap, FaMarkdown } from "react-icons/fa";
import {
    FaCss3,
    FaGitAlt,
    FaHtml5,
    FaNode,
    FaNpm,
    FaPython,
} from "react-icons/fa6";
import { GrGraphQl } from "react-icons/gr";
import { IoLogoElectron } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";

import { Card, CardBody, Link } from "@nextui-org/react";

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
            icon: FaBootstrap,
            title: "Bootstrap",
        },
        css3: {
            icon: FaCss3,
            title: "CSS3",
        },
        electron: {
            icon: IoLogoElectron,
            title: "Electron",
        },
        git: {
            icon: FaGitAlt,
            title: "Git",
        },
        graphQl: {
            icon: GrGraphQl,
            title: "GraphQL",
        },
        html5: {
            icon: FaHtml5,
            title: "HTML5",
        },
        markdown: {
            icon: FaMarkdown,
            title: "Markdown",
        },
        mongoDb: {
            icon: BiLogoMongodb,
            title: "MongoDB",
        },
        nextJs: {
            icon: TbBrandNextjs,
            title: "Next.js",
        },
        nodeJs: {
            icon: FaNode,
            title: "Node.js",
        },
        npm: {
            icon: FaNpm,
            title: "NPM",
        },
        postgreSql: {
            icon: BiLogoPostgresql,
            title: "PostgreSQL",
        },
        python: {
            icon: FaPython,
            title: "Python",
        },
        tailwindCss: {
            icon: BiLogoTailwindCss,
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
