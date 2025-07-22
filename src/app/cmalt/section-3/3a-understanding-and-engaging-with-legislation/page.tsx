import CMALTLayout from "@/components/Layouts/CMALTLayout";
import { internalRoutes } from "@/constants/links";
import { createMetadata } from "@/lib/metadata";

const { CmaltRoute } = internalRoutes;

export const metadata = createMetadata({
    title: "3a: Understanding and Engaging With Legislation | CMALT",
    path: CmaltRoute,
});

export default function page() {
    return (
        <CMALTLayout
            title="3a: Understanding and Engaging With Legislation"
            lastUpdated="2025-07-22"
        >
            <h2>CMALT Guidance</h2>

            <p>
                Statements here should show how relevant legislation, has
                influenced your work. You are not expected to have expert
                knowledge of all of these areas, but are expected to be aware of
                how they relate to and impact upon your current practice.
            </p>

            <p>
                In the UK you would be expected to demonstrate how you work
                within the context of a relevant piece of legislation such as
                (but not limited to):
            </p>

            <ul>
                <li>
                    Equality, including accessibility, special educational
                    needs, etc.
                </li>
                <li>Intellectual property (IPR)</li>
                <li>Freedom of Information (if you work for a public body)</li>
                <li>General Data Protection Regulation (GDPR)</li>
                <li>Child protection</li>
                <li>Anti-discrimination law</li>
                <li>Points Based Immigration System (PBIS)</li>
            </ul>

            <p>
                If you are based outside of the UK, there may be different
                requirements, and you should indicate this in your portfolio.
            </p>

            <p>
                You should consider how your example impacts on teaching and
                learning in your context, and on the nature and evolution of
                your practice. You may find it helpful to refer to the guidance
                on reflective writing, above.
            </p>

            <p>
                Evidence might include minutes of meetings with legal advisers,
                documentation showing how legal issues have influenced work
                (such as reports or data protection forms), relevant training
                undertaken or qualifications gained, evidence of work you have
                produced/authored, or of your contribution to relevant planning
                work, and so on.
            </p>

            <h2>Description</h2>

            <h3>International Context</h3>

            <p>
                Between 2014 and 2024, I worked as a freelance English teacher
                while living in Portugal. During this period, I offered private
                lessons to adult learners, primarily across Portugal, Spain,
                Italy, France, and Germany. Because I was based outside the UK
                and most of my students were located within the EU, I focused
                more closely on European legislation and guidelines.
            </p>

            <p>
                This experience significantly shaped my awareness of data
                protection requirements under the{" "}
                <a
                    href="https://gdpr.eu/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    General Data Protection Regulation (GDPR)
                </a>
                , which applies across the EU and was directly relevant to the
                handling of learner data. It also made me more attuned to
                digital accessibility requirements at the European level,
                especially EN 301 549. I ensured that materials provided to
                learners complied with accessibility expectations across
                borders, particularly regarding video captions, document design,
                and platform usability.
            </p>

            <p>
                These early experiences informed my later work in the UK
                context, where I now combine an understanding of European
                standards with UK-specific guidance such as the{" "}
                <a
                    href="https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Public Sector Bodies (Websites and Mobile Applications)
                    Accessibility Regulations 2018
                </a>
                . My international teaching practice laid the foundation for my
                ongoing commitment to accessibility and inclusion.
            </p>

            <p>
                Accessibility and inclusivity are central to my practice as a
                learning technologist. I work in line with EN 301 549:{" "}
                <em>
                    Accessibility requirements for ICT products and services
                </em>
                , which incorporates the{" "}
                <a
                    href="https://www.w3.org/TR/WCAG21/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Web Content Accessibility Guidelines (WCAG) 2.1
                </a>{" "}
                in Clause 9 and covers non-web documents in Clause 10.
            </p>

            <p>
                In support of these requirements, I have created a document
                titled{" "}
                <em>
                    Web Accessibility Resources and Tools: Guidelines,
                    Checklists, and Testing Solutions
                </em>
                , which compiles resources for evaluating and creating
                accessible web content. I also regularly use the Accessibility
                Assistant when authoring Microsoft Word documents, ensuring
                appropriate heading structures, alternative text, and contrast
                levels.
            </p>

            <p>
                To improve my understanding of learner needs, I completed{" "}
                <em>
                    Dyslexia Awareness: In partnership with Made By Dyslexia
                </em>{" "}
                when it launched in 2020 and again in its extended 7-hour format
                in 2025.
            </p>

            <h3>Subtitles and Video Accessibility</h3>

            <p>
                When producing video content, I comply with WCAG 2.1{" "}
                <a
                    href="https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Success Criterion 1.2.2 Captions (Prerecorded)
                </a>
                . I create{" "}
                <a
                    href="https://www.bbc.co.uk/academy-guides/how-do-i-create-subtitles#srt"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    SRT
                </a>{" "}
                subtitle files, which are compatible with platforms such as{" "}
                <a
                    href="https://support.google.com/youtube/answer/2734698#zippy=%2Cbasic-file-formats%2Csubrip-srt-example"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    YouTube
                </a>{" "}
                and{" "}
                <a
                    href="https://help.vimeo.com/hc/en-us/articles/21956884955537-How-do-I-add-captions-or-subtitles-to-my-video"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Vimeo
                </a>
                . I time these manually using the{" "}
                <a
                    href="https://marketplace.visualstudio.com/items?itemName=pepri.subtitles-editor"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Subtitles Editor extension
                </a>{" "}
                in Visual Studio Code, basing them on the script and audio.
            </p>
            <p>
                I follow the{" "}
                <a
                    href="https://www.bbc.co.uk/accessibility/forproducts/guides/subtitles/#Subtitles-should-contain-single-sentences"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    BBC&apos;s accessibility guidelines
                </a>
                , ensuring that each subtitle contains a single, complete
                sentence. For offline use, I embed subtitle tracks into MP4
                files using{" "}
                <a
                    href="https://subler.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Subler
                </a>
                .
            </p>

            <h3>Accessible Document Design</h3>
            <p>
                I also apply accessibility standards to document creation. In
                preparing learner-facing materials such as the{" "}
                <em>Microsoft Teams FAQ</em> (2020), I:
            </p>
            <ul>
                <li>Use a clear heading hierarchy</li>
                <li>Apply sans serif fonts for readability</li>
                <li>
                    Create tables of contents in longer documents for easier
                    navigation
                </li>
                <li>Ensure compatibility with screen readers</li>
            </ul>
            <p>
                These practices align with WCAG criteria such as{" "}
                <a
                    href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Info and Relationships
                </a>
                ,{" "}
                <a
                    href="https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Meaningful Sequence
                </a>
                , and{" "}
                <a
                    href="https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Use of Colour
                </a>
                .
            </p>

            <h2>Reflection</h2>

            <p>
                Manually creating accurate subtitle files was a rewarding yet
                time-consuming process. I learnt that subtitle timing must align
                closely with the speaker&apos;s voice and on-screen events to
                avoid distraction. Early attempts involved considerable trial
                and error, but the final products met WCAG 2.1 standards and
                offered an inclusive experience for all users.
            </p>

            <p>
                The impact on learners, particularly non-native English
                speakers, was notable. For example, in the absence of visible
                speakers (no lip-reading cues), subtitles enabled learners to
                better follow digital learning platform demonstrations.
            </p>

            <p>
                Over time, I came to understand that providing both subtitles
                and a full transcript offers a more inclusive experience,
                catering to diverse learner preferences and needs. Transcripts
                enable learners to skim or search content quickly and are
                particularly helpful for those who prefer or require a
                text-based alternative.
            </p>

            <p>
                In terms of document accessibility, I saw improvements in
                learner engagement and fewer questions about where to find key
                information. Structuring documents properly made them more
                navigable, especially for screen reader users. My evolving
                understanding of EN 301 549 and WCAG 2.1 helped me go beyond
                compliance and take a proactive role in inclusive content
                design.
            </p>

            <h2>Summary</h2>

            <ul>
                <li>
                    Aligned my practice with EN 301 549 and WCAG 2.1 to improve
                    accessibility in digital learning content
                </li>
                <li>
                    Created and manually timed subtitle files in SRT format
                    using Visual Studio Code and followed BBC subtitle standards
                </li>
                <li>
                    Embedded subtitles into MP4 files for offline use and
                    ensured they followed single-sentence guidance
                </li>
                <li>
                    Designed Word and PDF documents with screen reader
                    compatibility, clear heading structures, and navigational
                    aids
                </li>
                <li>
                    Completed dyslexia awareness training to inform more
                    inclusive practices
                </li>
                <li>
                    Reflected on the value of transcripts and implemented
                    continuous improvements based on learner needs
                </li>
            </ul>

            <h2>Evidence</h2>

            <ul>
                <li>
                    <a href="/cmalt/documents/web-accessibility-resources-and-tools.pdf">
                        Web Accessibility Resources and Tools: Guidelines,
                        Checklists, and Testing Solutions (PDF)
                    </a>{" "}
                    <em>
                        A curated guide to evaluating and implementing
                        accessible web content, aligned with WCAG 2.1 and EN 301
                        549.
                    </em>
                </li>
                <li>
                    <a href="/cmalt/documents/joining-a-microsoft-teams-meeting-from-the-session-details-page.srt">
                        SRT subtitle file (Joining a Microsoft Teams meeting
                        from the Session Details Page, 2020) (Subtitle File)
                    </a>{" "}
                    <em>
                        Manually created subtitle file demonstrating alignment
                        with WCAG 2.1 Success Criterion 1.2.2.
                    </em>
                </li>
                <li>
                    <a href="/cmalt/screenshots/editing-subtitles-screenshot.webp">
                        SRT subtitle file in Visual Studio Code (Screenshot)
                    </a>{" "}
                    <em>
                        Screenshot of timing captions precisely within Visual
                        Studio Code.
                    </em>
                </li>
                <li>
                    <a href="/cmalt/screenshots/embedded-subtitles-screenshot.webp">
                        Embedded subtitles using Subler (Screenshot)
                    </a>{" "}
                    Evidence of embedding subtitles into MP4 files for
                    accessibility, following BBC subtitle guidance.
                </li>
                <li>
                    <a href="/cmalt/screenshots/microsoft-teams-faq-screenshot.webp">
                        Document with accessible layout and navigation
                        (Microsoft Teams FAQ, 2020) (Screenshot)
                    </a>{" "}
                    Example of a learner-facing document structured with
                    accessibility in mind (clear headings, logical sequence, and
                    screen reader compatibility).
                </li>
                <li>
                    <a href="/cmalt/certificates/dyslexia-awareness-in-partnership-with-made-by-dyslexia-2020.pdf">
                        Dyslexia Awareness: In partnership with Made By Dyslexia
                        (2020) (Certificate)
                    </a>{" "}
                    <em>
                        Certification of training completed via Microsoft Learn,
                        in partnership with Made By Dyslexia.
                    </em>
                </li>
                <li>
                    <a href="/cmalt/transcripts/microsoft-learn-training-modules.pdf">
                        Dyslexia Awareness: In partnership with Made By Dyslexia
                        proof of completed modules (2025) (PDF)
                    </a>{" "}
                    <em>
                        Proof of completion for the extended 7-hour version of
                        the Dyslexia Awareness training, covering inclusive
                        strategies and learner support.
                    </em>
                </li>
            </ul>

            <h2>Further Reading</h2>

            <ul>
                <li>
                    BBC. <em>Subtitle Guidelines</em> (Version 1.2.3, June
                    2024). Available at:{" "}
                    <a
                        href="https://www.bbc.co.uk/accessibility/forproducts/guides/subtitles/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://www.bbc.co.uk/accessibility/forproducts/guides/subtitles/
                    </a>
                </li>
                <li>
                    BBC Academy. <em>How do I create subtitles?</em> Available
                    at:{" "}
                    <a
                        href="https://www.bbc.co.uk/academy-guides/how-do-i-create-subtitles"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://www.bbc.co.uk/academy-guides/how-do-i-create-subtitles
                    </a>
                </li>
                <li>
                    European Union.{" "}
                    <em>
                        EN 301 549: Accessibility requirements for ICT products
                        and services
                    </em>{" "}
                    (29 June 2021). Available at:{" "}
                    <a
                        href="https://accessible-eu-centre.ec.europa.eu/content-corner/digital-library/en-3015492021-accessibility-requirements-ict-products-and-services_en"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://accessible-eu-centre.ec.europa.eu/content-corner/digital-library/en-3015492021-accessibility-requirements-ict-products-and-services_en
                    </a>
                </li>
                <li>
                    Vimeo.{" "}
                    <em>How do I add captions or subtitles to my video?</em>{" "}
                    Available at:{" "}
                    <a
                        href="https://help.vimeo.com/hc/en-us/articles/21956884955537-How-do-I-add-captions-or-subtitles-to-my-video"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://help.vimeo.com/hc/en-us/articles/21956884955537-How-do-I-add-captions-or-subtitles-to-my-video
                    </a>
                </li>
                <li>
                    W3C. <em>Captions (Prerecorded)</em> – WCAG 2.1
                    Understanding Success Criterion 1.2.2. Available at:{" "}
                    <a
                        href="https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html
                    </a>
                </li>
                <li>
                    W3C. <em>Info and Relationships</em> – WCAG 2.1. Available
                    at:{" "}
                    <a
                        href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html
                    </a>
                </li>
                <li>
                    W3C. <em>Meaningful Sequence</em> – WCAG 2.1. Available at:{" "}
                    <a
                        href="https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html
                    </a>
                </li>
                <li>
                    W3C. <em>Non-text Content</em> – WCAG 2.1. Available at:{" "}
                    <a
                        href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html
                    </a>
                </li>
                <li>
                    W3C. <em>Success Criterion 1.2.2 Captions (Prerecorded)</em>{" "}
                    – WCAG 2.1 Reference. Available at:{" "}
                    <a
                        href="https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded
                    </a>
                </li>
                <li>
                    W3C. <em>Use of Colour</em> – WCAG 2.1. Available at:{" "}
                    <a
                        href="https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html
                    </a>
                </li>
                <li>
                    W3C.{" "}
                    <em>Web Content Accessibility Guidelines (WCAG) 2.1.</em>{" "}
                    Available at:{" "}
                    <a
                        href="https://www.w3.org/TR/WCAG21/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://www.w3.org/TR/WCAG21/
                    </a>
                </li>
                <li>
                    YouTube.{" "}
                    <em>Supported subtitle and closed caption files</em>.
                    Available at:{" "}
                    <a
                        href="https://support.google.com/youtube/answer/2734698#zippy=%2Cbasic-file-formats%2Csubrip-srt-example"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://support.google.com/youtube/answer/2734698#zippy=%2Cbasic-file-formats%2Csubrip-srt-example
                    </a>
                </li>
            </ul>
        </CMALTLayout>
    );
}
