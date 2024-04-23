import { Chip, Link } from "@nextui-org/react";

/**
 * Props for the WorkAndProjectsTag component.
 * @typedef {object} WorkAndProjectsTagProps
 * @property {string} link - The link associated with the tag.
 * @property {"secondary" | "default" | "primary" | "success" | "warning" | "danger" | undefined} color - The color of the tag.
 * @property {React.ReactNode} icon - The icon for the tag.
 * @property {string} name - The name of the tag.
 */
interface WorkAndProjectsTagProps {
    link: string;
    color:
        | "secondary"
        | "default"
        | "primary"
        | "success"
        | "warning"
        | "danger"
        | undefined;
    icon: React.ReactNode;
    name: string;
}

/**
 * Component for displaying tags in work and projects section.
 * @param {Readonly<WorkAndProjectsTagProps>} props - The props for the component.
 * @property {string} props.link - The link associated with the tag.
 * @property {"secondary" | "default" | "primary" | "success" | "warning" | "danger" | undefined} props.color - The color of the tag.
 * @property {React.ReactNode} props.icon - The icon for the tag.
 * @property {string} props.name - The name of the tag.
 * @returns {JSX.Element} The rendered WorkAndProjectsTag component.
 */
export default function WorkAndProjectsTag({
    link,
    color = "default",
    icon,
    name,
}: Readonly<WorkAndProjectsTagProps>) {
    return (
        <Link href={link} target="_blank" className="m-2">
            <Chip variant="solid" color={color} avatar={icon} size="lg">
                {name}
            </Chip>
        </Link>
    );
}
