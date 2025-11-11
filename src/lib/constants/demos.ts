/**
 * Canonical project catalogue.
 *
 * File: src/lib/constants/demos.ts
 * Purpose: single source of truth for demo/repo cards.
 * Used by: project grid, filters, and tests.
 *
 * Rules:
 * - Titles: concise, sentence case, no trailing punctuation.
 * - Descriptions: 1-2 sentences, UK spelling, plain English.
 * - Links: always `repoLink`; add `demoLink` only if a live demo exists.
 * - `type`: "demo" | "repo" (nothing else).
 * - `importance`: "high" | "medium" | "low" | "lowest".
 *   Sorting/grouping depends on these exact strings.
 * - Order: keep stable; add new items at the end unless prominence is needed.
 *
 * @example
 * import { demoItems } from "@/lib/constants/demos";
 * const featured = demoItems.filter(i => i.importance === "high");
 *
 * @see DemoItem in "@/types"
 */
import { DemoItem } from "@/types";

/** Exported list consumed by UI and tests. Keep order stable. */
export const demoItems: DemoItem[] = [
    {
        title: "CodePen Pens",
        description:
            "A collection of small HTML, CSS, and JavaScript projects originally created on CodePen. This repo groups them into a single place for easier maintenance, version control, and local editing.",
        type: "demo",
        demoLink: "https://www.karlhorning.dev/codepen-pens/",
        repoLink: "https://github.com/Karl-Horning/codepen-pens/",
        importance: "high",
    },
    {
        title: "Transform Text",
        description:
            "A lightweight string transformation tool built with React and Tailwind. Escape newlines, switch between case formats, and copy results with a click — perfect for developers and writers.",
        type: "demo",
        demoLink: "https://www.karlhorning.dev/transform-text/",
        repoLink: "https://github.com/Karl-Horning/transform-text",
        importance: "high",
    },
    {
        title: "Color Contrast Checker",
        description:
            "An accessible Progressive Web App (PWA) to check colour (color) contrast ratios for text and backgrounds, ensuring compliance with WCAG.",
        type: "demo",
        demoLink: "https://www.karlhorning.dev/color-contrast-checker-pwa/",
        repoLink: "https://github.com/Karl-Horning/color-contrast-checker-pwa",
        importance: "high",
    },
    {
        title: "Number Cards",
        description:
            "A tiny, offline-first number-guessing game built with React, TypeScript, and Tailwind CSS.",
        type: "demo",
        demoLink: "https://www.karlhorning.dev/number-cards-pwa/",
        repoLink: "https://github.com/Karl-Horning/number-cards-pwa/",
        importance: "low",
    },
    {
        title: "Web Programming with Python and JavaScript Project 0",
        description:
            "LDN is a project created as part of CS50 Web Programming with Python and JavaScript. It provides recommendations for the top places to visit in London.",
        type: "demo",
        demoLink:
            "https://www.karlhorning.dev/web-programming-with-python-and-javaScript-project0/",
        repoLink:
            "https://github.com/Karl-Horning/web-programming-with-python-and-javaScript-project0/",
        importance: "lowest",
    },
    {
        title: "Style Guides",
        description:
            "Concise, practical rules for readable, consistent, and accessible documentation and commits. This repository collects style guides and templates designed to make text-based resources easier to read, navigate, and maintain.",
        type: "repo",
        repoLink: "https://github.com/Karl-Horning/karl-style-guides",
        importance: "medium",
    },
    {
        title: "macOS gitignore",
        description:
            "A simple .gitignore template for macOS users working with Word, Excel, Affinity, and Markdown.",
        type: "repo",
        repoLink: "https://github.com/Karl-Horning/macos-gitignore",
        importance: "medium",
    },
    {
        title: "Blackboard Learn APIs Postman Collection",
        description:
            "Postman collection and setup guide for working with the Blackboard Learn REST APIs, including authentication and example requests.",
        type: "repo",
        repoLink:
            "https://github.com/Karl-Horning/blackboard-learn-apis-postman-collection",
        importance: "low",
    },
    {
        title: "Oxford Learner's Dictionaries API",
        description:
            "This project fetches dictionary entries from the Oxford Learner's Dictionaries API and converts them into styled, semantic HTML for reuse in educational tools or static sites.",
        type: "repo",
        repoLink:
            "https://github.com/Karl-Horning/oxford-learners-dictionaries-api",
        importance: "low",
    },
    {
        title: "Bash Notebook",
        description:
            "A personal collection of Bash scripts and notes for learning, automation, and quick reference. Includes file utilities, folder flatteners, and a growing cheatsheet for common shell tasks.",
        type: "repo",
        repoLink: "https://github.com/Karl-Horning/bash-notebook",
        importance: "low",
    },
    {
        title: "GraphQL Rate Limit Demo",
        description:
            "Prototype repo used to test GraphQL rate limiting before production rollout. Demonstrates use of the @ratelimit directive in Apollo Server with a modular ES module setup, custom key generation, and structured schema.",
        type: "repo",
        repoLink: "https://github.com/Karl-Horning/graphql-rate-limit-demo",
        importance: "medium",
    },
];
