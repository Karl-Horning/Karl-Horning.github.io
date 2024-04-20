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

import {
    CircularProgress,
    Card,
    CardBody,
    CardFooter,
    Link,
} from "@nextui-org/react";

interface CircularProgressBarProps {
    value?: number;
    link: string;
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
}

export default function CircularProgressBar({
    skill,
    link,
    value = 100,
}: CircularProgressBarProps) {
    const skills = {
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

    const selectedSkill = skills[skill];

    return (
        <Card className="mb-10 h-[240px] w-[240px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500">
            <CardBody className="items-center justify-center pb-0">
                <CircularProgress
                    classNames={{
                        svg: "w-36 h-36 drop-shadow-md",
                        indicator: "stroke-white",
                        track: "stroke-white/10",
                        value: "text-3xl font-semibold text-white",
                    }}
                    value={value}
                    strokeWidth={4}
                    showValueLabel={true}
                />
            </CardBody>
            <CardFooter className="items-center justify-center pt-0 text-white">
                <Link
                    href={link}
                    target="_blank"
                    className="text-white"
                >
                    <selectedSkill.icon className="mr-1 text-4xl" />
                    <span className="text-2xl">{selectedSkill.title}</span>
                </Link>
            </CardFooter>
        </Card>
    );
}
