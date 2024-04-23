import WorkAndProjectsTag from "@/components/WorkAndProjects/WorkAndProjectsTag";
import { Poppins900 } from "@/fonts";

/**
 * Represents a tag used in the WorkAndProjectsText component.
 * @typedef {object} Tag
 * @property {string} link - The link associated with the tag.
 * @property {string} colour - The color of the tag.
 * @property {JSX.Element} icon - The icon element for the tag.
 * @property {string} name - The name of the tag.
 */
interface Tag {
    link: string;
    colour: "secondary" | "default" | "primary" | "success" | "warning" | "danger";
    icon: JSX.Element;
    name: string;
}

/**
 * Props for the WorkAndProjectsText component.
 * @typedef {object} WorkAndProjectsTextProps
 * @property {string} title - The title of the text.
 * @property {string} description - The description text.
 * @property {1 | 2} order - The order of the text (1 or 2).
 * @property {Tag[]} availableFromTags - Tags representing availability.
 * @property {Tag[]} builtUsingTags - Tags representing technologies used.
 */
interface WorkAndProjectsTextProps {
    title: string;
    description: string;
    order: 1 | 2;
    availableFromTags: Tag[];
    builtUsingTags: Tag[];
}

/**
 * Component for displaying text and associated tags in work and projects section.
 * @param {Readonly<WorkAndProjectsTextProps>} props - The props for the component.
 * @property {string} props.title - The title of the text.
 * @property {string} props.description - The description text.
 * @property {1 | 2} props.order - The order of the text (1 or 2).
 * @property {Tag[]} props.availableFromTags - Tags representing availability.
 * @property {Tag[]} props.builtUsingTags - Tags representing technologies used.
 * @returns {JSX.Element} The rendered WorkAndProjectsText component.
 */
export default function WorkAndProjectsText({
    title,
    description,
    order,
    availableFromTags,
    builtUsingTags,
}: Readonly<WorkAndProjectsTextProps>) {
    return (
        <div
            className={`${order === 1 ? "order-1" : "order-2"} mb-20 md:col-span-4`}
        >
            <div className="flex h-full items-center justify-center">
                <div className="text-black">
                    <h3 className={`${Poppins900.className} mb-2 text-3xl`}>
                        {title}
                    </h3>

                    <p className="mb-8">{description}</p>

                    <p className="mb-2 font-bold">Available from:</p>

                    <div className="mb-2">
                        {availableFromTags.map((i) => (
                            <WorkAndProjectsTag
                                link={i.link}
                                color={i.colour}
                                icon={i.icon}
                                name={i.name}
                                key={i.name}
                            />
                        ))}
                    </div>

                    <p className="mb-2 font-bold">Built using:</p>

                    <div className="">
                        {builtUsingTags.map((i) => (
                            <WorkAndProjectsTag
                                link={i.link}
                                color={i.colour}
                                icon={i.icon}
                                name={i.name}
                                key={i.name}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
