import { icons } from "@/lib/constants/ui";
import { decorateIcon } from "@/lib/helpers";
import Image from "next/image";

const { CheckIcon } = icons;

interface CertificationsCardProps {
    /**
     * The name of the certification or badge.
     */
    title: string;

    /**
     * A short description or context about the certification.
     */
    body: string;

    /**
     * The date the certification was earned (for example, "2024-06-01").
     */
    date: string;

    /**
     * Path or URL to the image representing the certification badge.
     */
    image: string;

    /**
     * A URL to verify the certification, if available.
     */
    verification?: string;
}

/**
 * Displays a single certification or badge entry as a styled list item.
 *
 * Shows the badge image, certification title, issuing organisation,
 * and an optional verification link. Designed for use within the
 * Certifications section, where multiple `CertificationsCard`
 * components are rendered together.
 *
 * @param props - Component properties.
 * @param props.title - The name of the certification or badge.
 * @param props.body - A short description or the issuing organisation.
 * @param props.date - The date the certification was earned.
 * @param props.image - Path or URL to the badge image.
 * @param props.verification - Optional link to verify the certification.
 * @returns A styled list item containing certification details.
 */
export default function CertificationsCard({
    title,
    body,
    date,
    image,
    verification,
}: CertificationsCardProps) {
    return (
        <li className="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4">
            <Image
                src={image}
                alt={`${title} awarded by ${body} on ${date}`}
                height={80}
                width={80}
                className="h-12 w-12 rounded-lg object-contain"
            />
            <div>
                <p className="text-sm font-semibold md:text-base">{title}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                    {body}
                </p>
            </div>
            {verification && (
                <a
                    href={verification}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold dark:border-slate-700"
                >
                    {decorateIcon(<CheckIcon />)} Verify
                </a>
            )}
        </li>
    );
}
