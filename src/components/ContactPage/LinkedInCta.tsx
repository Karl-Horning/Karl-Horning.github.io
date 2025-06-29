import { externalLinks } from "@/constants/links";

/**
 * Renders a call-to-action paragraph inviting users
 * to connect via LinkedIn as an alternative contact method.
 *
 * @component
 * @returns A paragraph with a LinkedIn external link.
 */
export default function LinkedInCta() {
    return (
        <p className="mt-6 text-center text-sm text-muted">
            Prefer LinkedIn?&nbsp;
            <a
                href={externalLinks.linkedIn}
                aria-label="Connect with Karl Horning on LinkedIn"
                className="font-semibold text-primary hover:underline focus:underline focus:outline-none"
                target="_blank"
                rel="noopener noreferrer"
            >
                Connect with me on LinkedIn
            </a>
        </p>
    );
}
