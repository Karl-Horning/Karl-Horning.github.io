import { seo } from "@/lib/constants/site-metadata/seo";
import { externalLinks, internalRoutes } from "../ui";

const { CmaltRoute } = internalRoutes;
const { CodePenLink, GitHubLink, LinkedInLink } = externalLinks;
const { defaultEmail, defaultImage, defaultJobTitle, siteName, siteUrl } = seo;

/**
 * JSON-LD structured data for the **CMALT portfolio page**.
 *
 * Marks the page as a ProfilePage whose main entity is the site owner (you),
 * and associates an EducationalOccupationalCredential (CMALT) awarded by ALT.
 * Place in the `<head>` of the CMALT portfolio landing page.
 */
export const jsonLdCMALT = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: `${siteUrl}${CmaltRoute}`,
    name: `${siteName} CMALT Portfolio`,
    description:
        "CMALT (Certified Member of the Association for Learning Technology) portfolio evidencing practice, reflection, and professional development.",
    inLanguage: "en-GB",
    mainEntity: {
        "@type": "Person",
        name: siteName,
        url: siteUrl,
        jobTitle: defaultJobTitle,
        email: defaultEmail,
        sameAs: [CodePenLink, GitHubLink, LinkedInLink],
        hasCredential: {
            "@type": "EducationalOccupationalCredential",
            name: "CMALT (Certified Member of ALT)",
            credentialCategory: "Professional certification",
            url: "https://www.alt.ac.uk/certified-membership",
            awardingBody: {
                "@type": "Organization",
                name: "Association for Learning Technology (ALT)",
                url: "https://www.alt.ac.uk/",
            },
            // TODO: when awarded, add: validFor, dateCreated/issued, recognisedBy, etc.
        },
        knowsAbout: [
            "Learning technology",
            "Instructional design",
            "VLE/LMS",
            "Accessibility (a11y)",
            "Assessment and feedback",
            "Educational evaluation",
        ],
    },
    publisher: {
        "@type": "Person",
        name: siteName,
        url: siteUrl,
        sameAs: [CodePenLink, GitHubLink, LinkedInLink],
        jobTitle: defaultJobTitle,
        image: defaultImage,
    },
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${siteUrl}${CmaltRoute}`,
    },
};
