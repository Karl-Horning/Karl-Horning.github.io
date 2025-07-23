import Image, { StaticImageData } from "next/image";

interface FigureWithCaptionProps {
    src: string | StaticImageData;
    alt: string;
    title?: string;
    caption: string;
    width?: number;
    height?: number;
    className?: string;
}

/**
 * A reusable figure component that displays an image with a caption underneath.
 *
 * @component
 * @param {string | StaticImageData} src - The image source, either a static import or a path string.
 * @param {string} alt - Alternative text for accessibility and SEO.
 * @param {string} [title] - Optional image title (defaults to alt text if not provided).
 * @param {string} caption - The text to display below the image.
 * @param {number} [width=600] - Optional width of the image in pixels.
 * @param {number} [height=600] - Optional height of the image in pixels.
 * @param {string} [className] - Optional Tailwind CSS class names to customise the figure wrapper.
 */
export default function FigureWithCaption({
    src,
    alt,
    title,
    caption,
    width = 600,
    height = 600,
    className = "",
}: FigureWithCaptionProps) {
    return (
        <figure className={`text-center ${className}`}>
            <Image
                src={src}
                alt={alt}
                title={title || alt}
                width={width}
                height={height}
            />
            <figcaption className="mt-2 text-sm text-muted">
                {caption}
            </figcaption>
        </figure>
    );
}
