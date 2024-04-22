import { Image } from "@nextui-org/react";

/**
 * Props for the WorkAndProjectsImage component.
 * @typedef {object} WorkAndProjectsImageProps
 * @property {string} src - The source URL of the image.
 * @property {string} alt - The alternative text for the image.
 * @property {1 | 2} order - The order of the image (1 or 2).
 */
interface WorkAndProjectsImageProps {
    src: string;
    alt: string;
    order: 1 | 2;
}

/**
 * Component for displaying images in work and projects section.
 * @param {Readonly<WorkAndProjectsImageProps>} props - The props for the component.
 * @property {string} props.src - The source URL of the image.
 * @property {string} props.alt - The alternative text for the image.
 * @property {1 | 2} props.order - The order of the image (1 or 2).
 * @returns {JSX.Element} The rendered WorkAndProjectsImage component.
 */
export default function WorkAndProjectsImage({
    src,
    alt,
    order,
}: Readonly<WorkAndProjectsImageProps>) {
    return (
        <div
            className={`${order === 1 ? "order-1" : "order-2"} mb-20 md:col-span-8`}
        >
            <div className="flex h-full items-center justify-center">
                <Image
                    src={src}
                    alt={alt}
                    height={700}
                    width={700}
                    className="w-full drop-shadow-lg"
                />
            </div>
        </div>
    );
}
