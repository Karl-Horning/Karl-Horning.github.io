/**
 * A list of sections used to structure the CMALT portfolio.
 * Each section may optionally include child sections for more specific evidence or reflections.
 */
export const cmaltSections = [
    { slug: "", label: "Overview" },
    { slug: "contextual-statement", label: "Contextual Statement" },
    {
        slug: "section-1",
        label: "Section 1: Operational Issues",
        children: [
            {
                slug: "1a-an-understanding-of-the-constraints-and-benefits-of-different-technology",
                label: "1a: Constraints and Benefits",
            },
            {
                slug: "1b-technical-knowledge-and-ability-in-the-use-of-learning-technology",
                label: "1b: Technical Knowledge and Ability",
            },
            {
                slug: "1c-supporting-the-deployment-of-learning-technologies",
                label: "1c: Deployment Support",
            },
        ],
    },
    {
        slug: "section-2",
        label: "Section 2: Learning, Teaching and Assessment Processes",
        children: [
            {
                slug: "2a-an-understanding-of-teaching-learning-and-or-assessment-processes",
                label: "2a: Teaching, Learning and/or Assessment",
            },
            {
                slug: "2b-an-understanding-of-your-target-learners",
                label: "2b: Understanding of Target Learners",
            },
        ],
    },
    {
        slug: "section-3",
        label: "Section 3: The Wider Context",
        children: [
            {
                slug: "3a-understanding-and-engaging-with-legislation",
                label: "3a: Engagement with Legislation",
            },
            {
                slug: "3b-understanding-and-engaging-with-policies-and-standards",
                label: "3b: Engagement with Policies and Standards",
            },
        ],
    },
    {
        slug: "section-4",
        label: "Section 4: Communication and Working with Others",
        children: [
            {
                slug: "4a-communication-and-working-with-others",
                label: "4a: Communication and Working with Others",
            },
        ],
    },
    {
        slug: "section-5",
        label: "Section 5: Specialist Area(s)",
        children: [
            {
                slug: "5a-specialist-area-1",
                label: "5a: Specialist Area: JavaScript Development",
            },
        ],
    },
    {
        slug: "section-6",
        label: "Section 6: Advanced Area(s)",
        children: [
            {
                slug: "6a-future-plans",
                label: "6a: Future Plans for Development",
            },
            {
                slug: "6b-confirmation-and-optional-nominated-assessor",
                label: "6b: Declaration and Nominated Assessor (optional)",
            },
        ],
    },
];

/**
 * A collection of evidence assets for the CMALT portfolio.
 * Organised into categories such as certificates, documents, images, presentations, repositories, screenshots, and transcripts.
 */
export const cmaltEvidence = {
    /** PDF certificates used to support the portfolio */
    certificates: {
        appleTeacherCertificate:
            "/cmalt/certificates/apple-teacher-swift-playgrounds-2025.pdf",
        celtaCertificate: "/cmalt/certificates/celta-2013.pdf",
        dyslexiaAwarenessCertificate:
            "/cmalt/certificates/dyslexia-awareness-in-partnership-with-made-by-dyslexia-2020.pdf",
        electronCertificate:
            "/cmalt/certificates/master-electron-desktop-apps-with-html-javascript-css-2024.pdf",
        gdprBeginnerCertificate: "/cmalt/certificates/2021-gdpr-beginner.pdf",
        gdprCertificate: "/cmalt/certificates/2023-gdpr.pdf",
        gdprElementaryCertificate:
            "/cmalt/certificates/2021-gdpr-elementary.pdf",
        gdprIntroductionCertificate:
            "/cmalt/certificates/2024-an-introduction-to-the-gdpr.pdf",
        graphQlCertificate:
            "/cmalt/certificates/modern-graphql-with-node-complete-developers-guide-2023.pdf",
        nextJsCertificate:
            "/cmalt/certificates/next-js-the-complete-developers-guide-2024.pdf",
        ptllsCertificate: "/cmalt/certificates/ptlls-2012.pdf",
        webDeveloperCertificate:
            "/cmalt/certificates/the-web-developer-bootcamp-2019.pdf",
    },

    /** Supporting documents such as teaching materials or resources */
    documents: {
        designingAnEnglishCourse:
            "/cmalt/documents/designing-a-bespoke-english-course-for-professionals.pdf",
        firstSessionQuestions: "/cmalt/documents/first-session-questions.pdf",
        microsoftTeamsFaq:
            "/cmalt/documents/microsoft-teams-faq-company-info-removed.pdf",
        subtitlesExample:
            "/cmalt/documents/joining-a-microsoft-teams-meeting-from-the-session-details-page.srt",
        usingPostmanWithApolloServer:
            "/cmalt/documents/using-postman-with-apollo-server.pdf",
        webAccessibilityResourcesAndTools:
            "/cmalt/documents/web-accessibility-resources-and-tools.pdf",
    },

    /** Images supporting the portfolio (for example, infographics or diagrams) */
    imgs: {
        ebbinghausForgettingCurve:
            "/cmalt/imgs/ebbinghaus-forgetting-curve.webp",
        feedbackSlideOriginal: "/cmalt/imgs/feedback-slide-original.webp",
        feedbackSlideUpdated: "/cmalt/imgs/feedback-slide-updated.webp",
        kolbLearningCycle: "/cmalt/imgs/learning-cycle-kolb.webp",
    },

    /** Blog posts used to share knowledge */
    links: {
        blackboardSwaggerPostmanCollectionLink:
            "https://www.karlhorning.dev/dev-blog/posts/using-blackboards-swagger-file-to-create-a-postman-collection-and-make-an-api-call/",
        deppProjectLink:
            "https://www.imperial.ac.uk/about/education/our-projects/learning-management-system/",
    },

    /** Presentation slides used in teaching or training sessions */
    presentations: {
        deppIctPresentation: "/cmalt/presentations/depp-ict-presentation.pdf",
    },

    /** GitHub repositories showcasing relevant development or automation work */
    repos: {
        blackboardPostmanCollection:
            "https://github.com/Karl-Horning/blackboard-learn-apis-postman-collection",
        oxfordLearnersDictionariesApi:
            "https://github.com/Karl-Horning/oxford-learners-dictionaries-api",
    },

    /** Screenshots used to demonstrate functionality or achievements */
    screenshots: {
        dpaScreenshot: "/cmalt/screenshots/dpa-screenshot.png",
        editingSubtitlesScreenshot:
            "/cmalt/screenshots/editing-subtitles-screenshot.png",
        embeddedSubtitlesScreenshot:
            "/cmalt/screenshots/embedded-subtitles-screenshot.png",
        ictAnalystTestScriptScreenshot:
            "/cmalt/screenshots/ict-analyst-test-script-screenshot.png",
        ictSeniorAnalystTestScriptScreenshot:
            "/cmalt/screenshots/ict-senior-analyst-test-script-screenshot.png",
        ictUserStoriesScreenshot:
            "/cmalt/screenshots/ict-user-stories-screenshot.png",
        jiraFundamentalsScreenshot:
            "/cmalt/screenshots/jira-fundamentals-badge-screenshot.png",
        joiningTeamsMeetingScreenshot:
            "/cmalt/screenshots/joining-a-microsoft-teams-meeting-from-the-session-details-page-screenshot.webp",
        microsoftTeamsFaqScreenshot:
            "/cmalt/screenshots/microsoft-teams-faq-screenshot.png",
        sessionRatingsScreenshot: "/cmalt/screenshots/session-ratings.webp",
        sessionReportRatingsScreenshot:
            "/cmalt/screenshots/session-report-ratings.webp",
        traineeListScreenshot: "/cmalt/screenshots/trainee-list-screenshot.png",
    },

    /** Transcripts of training or recorded learning content */
    transcripts: {
        dyslexiaAwarenessTranscript:
            "/cmalt/transcripts/microsoft-learn-training-modules.pdf",
    },
    /** Videos used in teaching or training sessions */
    videos: {
        microsoftTeamsGuide: "/cmalt/videos/microsoft-teams-guide-excerpt.mp4",
    },
};
