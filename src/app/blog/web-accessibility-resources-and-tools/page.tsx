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
                Creating accessible websites isn&apos;t just a legal or ethical
                responsibility — it&apos;s good design. Accessibility ensures
                that everyone, regardless of ability, can interact with digital
                content effectively. Whether you&apos;re auditing an existing
                site or building something new, the following resources will
                help you understand best practices, run accessibility tests, and
                stay aligned with current standards such as WCAG 2.2.
            </p>

            <p>
                ⭐️ <em>Starred items</em> are recommended starting points if
                you&apos;re new to accessibility or just need the essentials.
            </p>

            <h2>How to Use This Guide</h2>
            <p>
                This post is organised by category so you can quickly find what
                you need — from community-led resources and official
                documentation to testing tools and contrast checkers. It&apos;s
                designed as both a learning guide and a practical reference for
                developers, designers, and content creators who want to build
                more inclusive digital experiences.
            </p>

            <h2>Checklist</h2>
            <p>
                Start by familiarising yourself with accessibility standards and
                checklists. These will help you evaluate your content and
                identify common issues early in development.
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
                    : A comprehensive checklist based on WCAG, providing
                    guidelines for creating accessible web content.
                </li>
            </ul>

            <h2>Accessibility Guidance</h2>

            <h3>Community and Official Resources</h3>

            <h4>Community-Driven Resources</h4>

            <FigureWithCaption
                src={"/img/blog/accessibility-resources/a11y-screenshot.avif"}
                alt=""
                caption="The A11Y Project — a community hub for practical accessibility resources."
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
                    easier to understand and implement.
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
                caption="Mozilla's accessibility documentation — a go-to resource for developers."
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
                    : Tutorials provided by the Web Accessibility Initiative
                    (WAI).
                </li>
            </ul>

            <h3>Articles and Tutorials</h3>
            <p>
                These tutorials and articles provide background, techniques, and
                practical advice for implementing accessible design.
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
                    (W3C): Overview of accessibility standards.
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Handling common accessibility problems
                    </a>
                    : Guidance on solving common accessibility issues from
                    Mozilla.
                </li>
            </ul>

            <h4>Keyboard Accessibility</h4>

            <FigureWithCaption
                src={"/img/blog/accessibility-resources/webaim-screenshot.avif"}
                alt=""
                caption="WebAIM's guide explaining how to make web interfaces navigable by keyboard."
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
                    : In-depth guide from WebAIM.
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Keyboard"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Keyboard (MDN)
                    </a>
                    : Keyboard accessibility information from Mozilla.
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
                    : Overview of accessibility options in Firefox.
                </li>
                <li>
                    <a
                        href="https://www.w3.org/TR/html-aria/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ARIA in HTML
                    </a>
                    : Specification for Accessible Rich Internet Applications.
                </li>
            </ul>

            <h4>Testing Standards</h4>

            <FigureWithCaption
                src={"/img/blog/accessibility-resources/ssa508-screenshot.avif"}
                alt=""
                caption="SSA's Section 508 Test Method — an official framework for evaluating accessibility."
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
                    : The Social Security Administration&apos;s Accessibility
                    Test Method.
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
                    : A cautionary tale about bad accessibility practices.
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
                caption="Google Lighthouse — a free tool for auditing accessibility and performance."
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
                    : Google&apos;s tool for web performance and accessibility.
                </li>
                <li>
                    <a
                        href="https://www.deque.com/axe/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Axe
                    </a>
                    : A popular accessibility testing toolkit.
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
                    : Microsoft&apos;s tool for identifying accessibility
                    issues.
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
                    : A web accessibility evaluation tool by{" "}
                    <a
                        href="https://webaim.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WebAIM
                    </a>
                    .
                </li>
            </ul>

            <h3>Standalone Software</h3>
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

            <h3>Web-Based Tools</h3>

            <h4>Contrast Checkers</h4>

            <FigureWithCaption
                src={
                    "/img/blog/accessibility-resources/contrast-checker-screenshot.avif"
                }
                alt=""
                caption="WebAIM's Contrast Checker — quickly test colour contrast ratios for text and UI elements."
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
                    : WebAIM&apos;s contrast checker.
                </li>
                <li>
                    <a
                        href="https://color.a11y.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Colour Contrast Accessibility Validator
                    </a>
                    : Tool for checking colour contrast.
                </li>
            </ul>

            <h4>Accessibility Testing Tools</h4>

            <FigureWithCaption
                src={"/img/blog/accessibility-resources/wave-screenshot.avif"}
                alt=""
                caption="The WAVE tool from WebAIM — a visual way to identify accessibility errors on a page."
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
                    : WebAIM&apos;s tool for evaluating web accessibility.
                </li>
                <li>
                    <a
                        href="https://squizlabs.github.io/HTML_CodeSniffer/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        HTML_CodeSniffer
                    </a>
                    : Code-level accessibility testing extension.
                </li>
                <li>
                    <a
                        href="https://jdan.github.io/tota11y/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        tota11y
                    </a>
                    : JavaScript library for visualising accessibility issues.
                </li>
            </ul>

            <h2>Notes</h2>
            <ul>
                <li>
                    <strong>Starred Tools (⭐)</strong>: These are recommended
                    starting points for those needing high-priority tools.
                </li>
            </ul>

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

            <h2>Final Thoughts</h2>

            <p>
                Accessibility is an ongoing process, not a one-time checklist.
                Regular testing, user feedback, and staying up to date with
                evolving standards will help ensure your content remains
                inclusive. Small improvements — like adding alt text, checking
                colour contrast, and improving keyboard navigation — can make a
                big difference to your users.
            </p>

            <p>— Karl</p>
        </BlogLayout>
    );
}
