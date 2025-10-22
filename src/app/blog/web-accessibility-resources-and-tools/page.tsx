import BlogLayout from "@/components/layouts/BlogLayout";
import { meta } from "./meta";
import { createMetadata } from "@/lib/helpers";
import { internalRoutes } from "@/lib/constants/ui";
import FigureWithCaption from "@/components/ui/FigureWithCaption";

const { BlogRoute } = internalRoutes;

export const metadata = createMetadata({
    title: `${meta.title} | Blog`,
    path: `${BlogRoute}/${meta.slug}`,
});

export default function Page() {
    return (
        <BlogLayout {...meta}>
            <p>
                Creating websites that everyone can use isn&apos;t just a legal
                or ethical responsibility — it&apos;s good design. Accessibility
                ensures that everyone, regardless of ability, can interact with
                digital content effectively. Whether you&apos;re auditing an
                existing site or building something new, the following resources
                will help you understand best practices, run accessibility
                tests, and stay aligned with current standards such as WCAG 2.2.
            </p>

            <p>
                ⭐️ <strong>Pro tip:</strong> Look out for the items marked with
                a star — they&apos;re great starting points if you&apos;re new
                to accessibility or just want to focus on the essentials.
            </p>

            <h2>How to Use This Guide</h2>
            <p>
                I&apos;ve organised these resources into categories so you can
                find what&apos;s relevant quickly. From community-led sites and
                official guidelines to testing tools and contrast checkers, this
                guide is both a learning resource and a practical reference for
                developers, designers, and content creators aiming to build more
                inclusive digital experiences.
            </p>

            <h2>Accessibility Checklist</h2>
            <p>
                Start by familiarising yourself with accessibility standards and
                checklists. These will help you evaluate your content and
                identify common issues early before they become bigger problems.
            </p>

            <FigureWithCaption
                src={"/img/blog/accessibility-resources/wcag-screenshot.avif"}
                alt=""
                caption="The WCAG checklist helps ensure your web content meets accessibility standards."
            />
            <ul>
                <li>
                    ⭐️{" "}
                    <a
                        href="https://www.a11yproject.com/checklist/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        The Web Content Accessibility Guidelines (WCAG)
                    </a>
                    : A detailed checklist based on WCAG, providing guidelines
                    for creating accessible web content.
                </li>
            </ul>

            <h2>Accessibility Guidance</h2>

            <h3>Community and Official Resources</h3>

            <h4>Community-Driven Resources</h4>

            <FigureWithCaption
                src={"/img/blog/accessibility-resources/a11y-screenshot.avif"}
                alt=""
                caption="The A11Y Project is a community hub for practical accessibility resources."
            />

            <ul>
                <li>
                    ⭐️{" "}
                    <a
                        href="https://www.a11yproject.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        The A11Y Project
                    </a>
                    : A community-driven resource that makes accessibility
                    easier to understand and apply.
                </li>
                <li>
                    <a
                        href="https://a11y.coffee/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        A11y Coffee
                    </a>
                    : Practical tips and advice for web accessibility.
                </li>
            </ul>

            <h4>Official Documentation</h4>

            <FigureWithCaption
                src={"/img/blog/accessibility-resources/mdn-screenshot.avif"}
                alt=""
                caption="Mozilla's resource hub for developers tackling accessibility."
            />

            <ul>
                <li>
                    ⭐️{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/Accessibility"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MD Accessibility
                    </a>
                    : Mozilla Developer&apos;s guide to web accessibility.
                </li>
                <li>
                    <a
                        href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/Overview.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Understanding WCAG 2.0
                    </a>
                    : The official documentation explaining the Web Content
                    Accessibility Guidelines.
                </li>
                <li>
                    <a
                        href="https://www.w3.org/WAI/tutorials/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Web Accessibility Tutorials
                    </a>
                    : Step-by-step tutorials from the Web Accessibility
                    Initiative (WAI).
                </li>
            </ul>

            <h3>Articles and Tutorials</h3>
            <p>
                These give background, techniques, and practical tips to bring
                accessibility into your workflow.
            </p>

            <h4>Introduction to Accessibility</h4>
            <ul>
                <li>
                    <a
                        href="https://www.w3.org/standards/webdesign/accessibility"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Accessibility
                    </a>{" "}
                    (W3C): An overview of the standards that shape accessible
                    web design.
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Handling common accessibility problems
                    </a>
                    : Mozilla&apos;s guidance on solving common accessibility
                    issues.
                </li>
            </ul>

            <h4>Keyboard Accessibility</h4>

            <FigureWithCaption
                src={"/img/blog/accessibility-resources/webaim-screenshot.avif"}
                alt=""
                caption="WebAIM's guide explaining how to make sites navigable by keyboard."
            />

            <ul>
                <li>
                    ⭐️{" "}
                    <a
                        href="https://webaim.org/techniques/keyboard/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Keyboard Accessibility
                    </a>
                    : A detailed walkthrough for making sites keyboard-friendly.
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Keyboard"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Keyboard (MDN)
                    </a>
                    : Mozilla&apos;s advice on keyboard accessibility standards.
                </li>
            </ul>

            <h4>ARIA and Screen Reader Guidance</h4>
            <ul>
                <li>
                    <a
                        href="https://support.mozilla.org/en-US/kb/accessibility-features-firefox-make-firefox-and-we"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Accessibility features in Firefox
                    </a>
                    : How Firefox supports accessibility features
                </li>
                <li>
                    <a
                        href="https://www.w3.org/TR/html-aria/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ARIA in HTML
                    </a>
                    : The official W3 guide to using ARIA roles and labels
                    effectively
                </li>
            </ul>

            <h4>Testing Standards & Case Studies</h4>

            <FigureWithCaption
                src={"/img/blog/accessibility-resources/ssa508-screenshot.avif"}
                alt=""
                caption="SSA's Section 508 Test Method is an official framework for evaluating accessibility."
            />

            <ul>
                <li>
                    ⭐️{" "}
                    <a
                        href="https://www.ssa.gov/accessibility/testmethod.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        SSA 508 Test Method
                    </a>
                    : The Social Security Administration&apos;s accessibility
                    testing approach.
                </li>
            </ul>

            <h4>Insights and Case Studies</h4>
            <ul>
                <li>
                    <a
                        href="https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        What we found when we tested tools on the world&apos;s
                        least-accessible webpage
                    </a>
                    : GOV.UK&apos;s insights from testing accessibility tools.
                </li>
                <li>
                    <a
                        href="https://www.imperial.ac.uk/stories/dhm-accessibility-guide/#article"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        This guide is unreadable
                    </a>
                    : A cautionary tale about poor accessibility practices.
                </li>
            </ul>

            <h2>Free Tools</h2>
            <p>
                Automated and manual testing tools can save time and highlight
                accessibility barriers. While no tool can replace human testing,
                these are some of the most reliable free options available.
            </p>

            <h3>Browser Tools</h3>

            <h4>Testing and Evaluation Tools</h4>

            <FigureWithCaption
                src={
                    "/img/blog/accessibility-resources/lighthouse-screenshot.avif"
                }
                alt=""
                caption="Google Lighthouse offers audits for accessibility and site performance."
            />

            <ul>
                <li>
                    ⭐️{" "}
                    <a
                        href="https://developers.google.com/web/tools/lighthouse/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Lighthouse
                    </a>
                    : A free, open-source audit tool from Google.
                </li>
                <li>
                    <a
                        href="https://www.deque.com/axe/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Axe
                    </a>
                    : One of the most popular accessibility testing libraries.
                </li>
            </ul>

            <h4>Browser Extensions</h4>

            <FigureWithCaption
                src={
                    "/img/blog/accessibility-resources/accessibility-insights-screenshot.avif"
                }
                alt=""
                caption="Microsoft's Accessibility Insights tool for detecting and fixing accessibility issues."
            />

            <ul>
                <li>
                    ⭐️{" "}
                    <a
                        href="https://accessibilityinsights.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Accessibility Insights
                    </a>
                    : Microsoft&apos;s extension for finding and fixing
                    accessibility problems.
                </li>
                <li>
                    ARIA DevTools{" "}
                    <a
                        href="https://addons.mozilla.org/en-US/firefox/addon/aria-devtools/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        (Firefox)
                    </a>{" "}
                    /{" "}
                    <a
                        href="https://chromewebstore.google.com/detail/aria-devtools/dneemiigcbbgbdjlcdjjnianlikimpck"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        (Chrome)
                    </a>
                    : View missing ARIA labels, misused roles, and keyboard
                    issues.
                </li>
                <li>
                    WAVE Evaluation Tool{" "}
                    <a
                        href="https://addons.mozilla.org/en-US/firefox/addon/wave-accessibility-tool/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        (Firefox)
                    </a>{" "}
                    /{" "}
                    <a
                        href="https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        (Chrome)
                    </a>
                    : WebAIM&apos;s easy-to-use browser extension for visual
                    accessibility checks.
                </li>
            </ul>

            <h3>Standalone & Web-Based Tools</h3>
            <ul>
                <li>
                    <a
                        href="https://pa11y.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Pa11y
                    </a>
                    : Command-line tool for automated accessibility testing.
                </li>
                <li>
                    <a
                        href="https://asqatasun.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Asqatasun
                    </a>
                    : Open-source tool for automated accessibility testing.
                </li>
            </ul>

            <h3>Contrast and Visual Tests</h3>

            <FigureWithCaption
                src={
                    "/img/blog/accessibility-resources/contrast-checker-screenshot.avif"
                }
                alt=""
                caption="WebAIM's Contrast Checker makes colour contrast testing quick and simple."
            />

            <ul>
                <li>
                    ⭐️{" "}
                    <a
                        href="https://webaim.org/resources/contrastchecker/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Contrast Checker
                    </a>
                    : Quickly see if text and background colours meet
                    accessibility standards.
                </li>
                <li>
                    <a
                        href="https://color.a11y.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Colour Contrast Accessibility Validator
                    </a>
                    : An alternative for contrast checks.
                </li>
            </ul>

            <h3>Visual Accessibility Testing</h3>

            <FigureWithCaption
                src={"/img/blog/accessibility-resources/wave-screenshot.avif"}
                alt=""
                caption="WebAIM's WAVE tool highlights accessibility issues visually on the page."
            />

            <ul>
                <li>
                    ⭐️{" "}
                    <a
                        href="https://wave.webaim.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WAVE
                    </a>
                    : One of the most widely used visual accessibility
                    evaluation tools.
                </li>
                <li>
                    <a
                        href="https://squizlabs.github.io/HTML_CodeSniffer/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        HTML_CodeSniffer
                    </a>
                    : Detects code-level issues.
                </li>
                <li>
                    <a
                        href="https://jdan.github.io/tota11y/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        tota11y
                    </a>
                    : A JavaScript library that visualises accessibility errors
                    directly on your webpage.
                </li>
            </ul>

            <h2>Final Thoughts</h2>

            <p>
                Getting started with accessibility can feel overwhelming at
                first, but even small, consistent steps make a difference. The
                key is to keep learning, testing, and listening to the people
                who will actually use your digital content. Accessibility
                isn&apos;t about ticking boxes — it&apos;s about creating better
                experiences for everyone, regardless of ability.
            </p>

            <p>
                Don&apos;t be discouraged by the technical challenges; it&apos;s
                a journey of ongoing improvement. Use the tools and resources
                above as your allies, and don&apos;t hesitate to seek feedback
                from users or fellow developers. The more inclusive your
                approach, the more your work can truly make a positive impact.
            </p>

            <p>
                In the end, accessibility benefits us all. When we design with
                everyone in mind, we create websites, apps, and digital spaces
                that are more usable, welcoming, and effective. Keep at it —
                every bit of effort counts.
            </p>

            <p>— Karl</p>

            <h2>Further Reading</h2>
            <ul>
                <li>
                    <a
                        href="https://www.w3.org/WAI/standards-guidelines/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        W3C Accessibility Standards Overview
                    </a>
                </li>
                <li>
                    <a
                        href="https://inclusivedesignprinciples.info/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Inclusive Design Principles
                    </a>
                </li>
                <li>
                    <a
                        href="https://accessibility.blog.gov.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        The Accessibility Blog (GOV.UK)
                    </a>
                </li>
            </ul>
        </BlogLayout>
    );
}
