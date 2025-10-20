/**
 * Centralised collection of evidence assets for the CMALT portfolio.
 *
 * Assets are organised into categories such as certificates, documents,
 * images, presentations, repositories, screenshots, transcripts, and videos.
 * Each category groups related files and resources that support the evidence
 * presented throughout the portfolio.
 */
export const cmaltEvidence = {
    /** Certificates supporting the portfolio, stored as PDFs */
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
        understandingManualTestingCertificate:
            "https://www.linkedin.com/learning/certificates/f782913a2c36840d82ebfa0ae237428710a86e940d24b950fb384e4871e67d7b?u=2720425",
        webDeveloperCertificate:
            "/cmalt/certificates/the-web-developer-bootcamp-2019.pdf",
    },

    /** Supporting documents such as teaching materials or resources */
    documents: {
        designingAnEnglishCourse:
            "/cmalt/documents/designing-a-bespoke-english-course-for-professionals.pdf",
        exampleFeedbackCompleteFull:
            "/cmalt/documents/example-feedback-complete-full.md",
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

    /** External links to blog posts or institutional pages */
    links: {
        blackboardSwaggerPostmanCollectionLink:
            "https://www.karlhorning.dev/blog/using-blackboards-swagger-file-to-create-a-postman-collection-and-make-an-api-call",
        deppProjectLink:
            "https://www.imperial.ac.uk/about/education/our-projects/learning-management-system/",
        dyslexiaAwareness:
            "https://learn.microsoft.com/en-us/users/karlhorning-7806/achievements/uyj64lz3",
    },

    /** Presentation slides used in teaching or training sessions */
    presentations: {
        deppIctPresentation: "/cmalt/presentations/depp-ict-presentation.pdf",
    },

    /** GitHub repositories showcasing relevant development or automation work */
    repos: {
        blackboardPostmanCollection:
            "https://github.com/Karl-Horning/blackboard-learn-apis-postman-collection",
        graphQlRateLimitDemo:
            "https://github.com/Karl-Horning/graphql-rate-limit-demo",
        oxfordLearnersDictionariesApi:
            "https://github.com/Karl-Horning/oxford-learners-dictionaries-api",
    },

    /** Screenshots used to demonstrate functionality or achievements */
    screenshots: {
        colourAccessibilityUserStories:
            "/cmalt/screenshots/colour-accessibility-user-stories-screenshot.png",
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
        traineeListScreenshot:
            "/cmalt/screenshots/trainee-list-screenshot.webp",
    },

    /** Transcripts of training or recorded learning content */
    transcripts: {
        dyslexiaAwarenessTranscript:
            "/cmalt/transcripts/microsoft-learn-training-modules.pdf",
    },

    /** Videos used in teaching or training sessions */
    videos: {
        microsoftTeamsGuide: "/cmalt/videos/microsoft-teams-guide-excerpt.mp4",
        microsoftTeamsGuideSubtitles:
            "/cmalt/videos/microsoft-teams-guide-excerpt.vtt",
        microsoftTeamsGuidePreview:
            "/cmalt/videos/microsoft-teams-guide-excerpt.png",
    },
};
