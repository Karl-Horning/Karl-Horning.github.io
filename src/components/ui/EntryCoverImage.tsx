import Image from "next/image";

interface EntryCoverImageProps {
    /**
     * The source URL or static import path of the image.
     */
    src: string;

    /**
     * Alternative text for the image, used for accessibility and SEO.
     * Defaults to an empty string for purely decorative images.
     */
    alt?: string;
}

/**
 * Displays a main cover image for an entry such as a blog post,
 * project, or CMALT section.
 *
 * Styled with rounded corners, borders, and shadows to match
 * the site's aesthetic. Accepts an optional `alt` text for accessibility.
 *
 * @param props - Component properties.
 * @param props.src - The source URL or import path for the image.
 * @param props.alt - Optional alternative text for accessibility.
 * @returns A responsive, styled `<Image>` element representing the entry's cover image.
 */
export default function EntryCoverImage({
    src,
    alt = "",
}: EntryCoverImageProps) {
    return (
        <Image
            src={src}
            alt={alt}
            className="mb-6 w-full rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800"
            height={1080}
            width={1080}
        />
    );
}
