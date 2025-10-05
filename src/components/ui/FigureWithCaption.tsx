import Image, { StaticImageData } from "next/image";

interface FigureWithCaptionProps {
    /**
     * The image source — either a static import (for example, from `/public`)
     * or a string path/URL.
     */
    src: string | StaticImageData;

    /**
     * Alternative text describing the image content for accessibility.
     */
    alt: string;

    /**
     * Optional image title. Defaults to the `alt` text if omitted.
     */
    title?: string;

    /**
     * The caption text displayed beneath the image.
     */
    caption: string;

    /**
     * Optional image width in pixels. Default: 1200.
     */
    width?: number;

    /**
     * Optional image height in pixels. Default: 1200.
     */
    height?: number;

    /**
     * Optional additional Tailwind classes applied to the <figure> wrapper.
     */
    className?: string;
}

/**
 * Renders an image with a descriptive caption underneath.
 *
 * Commonly used to display media with context or attribution in blog posts
 * or project pages. Supports responsive images and custom layout classes.
 *
 * @param props - Component properties.
 * @param props.src - The image source, either a static import or a string path.
 * @param props.alt - Alternative text describing the image content for accessibility.
 * @param props.title - Optional image title (defaults to the alt text if omitted).
 * @param props.caption - The text displayed below the image.
 * @param props.width - Optional image width in pixels (default: 1200).
 * @param props.height - Optional image height in pixels (default: 1200).
 * @param props.className - Optional additional Tailwind classes for styling or layout.
 * @returns A figure element containing an image and its caption.
 */
export default function FigureWithCaption({
    src,
    alt,
    title,
    caption,
    width = 1200,
    height = 1200,
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
