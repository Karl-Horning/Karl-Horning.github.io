import {
    CHROME_STORE_URL,
    EDGE_STORE_URL,
    FIREFOX_STORE_URL,
    TRANSFORM_TEXT_REPO_URL,
    TRANSFORM_TEXT_URL,
} from "@/lib/constants/links";

export const meta = {
    title: "Transform Text Extension",
    description:
        "Built and published a TypeScript Chrome extension that adds Safari's text transformation feature to Chromium browsers and Firefox — 13 transformations, TDD with Vitest, approved first time across all three browser stores.",
    keywords: [
        "TypeScript",
        "Chrome Extension",
        "Manifest V3",
        "esbuild",
        "Vitest",
        "TDD",
        "Firefox",
        "webextension-polyfill",
        "ESLint",
        "Prettier",
    ],
    role: "Developer",
    dateFrom: "10-2023",
    dateTo: "03-2026",
    readingTime: 5,
    number: 3,
    slug: "transform-text",
    draft: false,
    stats: [
        { value: "13", label: "Text transformations" },
        { value: "3", label: "Browsers supported" },
        { value: "3/3", label: "Store approvals, first attempt" },
        { value: "18", label: "Unit tests" },
    ],
    linksTitle: "Store listings and source code",
    links: [
        { label: "Chrome Web Store", href: CHROME_STORE_URL },
        { label: "Microsoft Edge Add-ons", href: EDGE_STORE_URL },
        { label: "Firefox Add-ons", href: FIREFOX_STORE_URL },
        { label: "GitHub Repository", href: TRANSFORM_TEXT_REPO_URL },
        { label: "Companion Web App", href: TRANSFORM_TEXT_URL },
    ],
};
