import { CCC_DEMO_URL, CCC_REPO_URL } from "@/lib/constants/links";

export const meta = {
    title: "Color Contrast Checker",
    description:
        "A progressive web app for checking WCAG color contrast ratios. Built because accessible design starts with color — and the tools for checking it should be fast and frictionless.",
    keywords: ["PWA", "Accessibility", "WCAG", "JavaScript", "CSS"],
    role: "Developer",
    dateFrom: "09-2025",
    dateTo: "04-2026",
    readingTime: 3,
    number: 5,
    slug: "color-contrast-checker",
    draft: false,
    stats: [
        { value: "100", label: "Performance" },
        { value: "100", label: "Accessibility" },
        { value: "100", label: "Best Practices" },
        { value: "100", label: "SEO" },
    ],
    linksTitle: "Repo on GitHub and Live Demo",
    links: [
        { label: "Color Contrast Checker repo", href: CCC_REPO_URL },
        { label: "Color Contrast Checker demo", href: CCC_DEMO_URL },
    ],
};
