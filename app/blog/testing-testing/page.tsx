import type { Metadata } from "next";
import { meta } from "./meta";
import BlogLayout from "@/components/BlogLayout";

export const metadata: Metadata = {
    title: meta.title,
    description: meta.description,
};

/**
 * Testing, Testing blog post page (draft).
 *
 * @return The blog post page element.
 */
export default function Page() {
    return (
        <BlogLayout meta={meta}>
            <p>
                This is my second blog post, and yes, it&apos;s mostly here to
                help me test things. But testing is part of the process. Without
                it, you never know what&apos;s working until something{" "}
                <em>isn&apos;t</em>.
            </p>

            <p>
                I&apos;m currently checking how the layout handles things like:
            </p>

            <ul>
                <li>Thumbnails</li>
                <li>Headings and paragraph spacing</li>
                <li>Responsive images</li>
                <li>Reading time calculations</li>
                <li>Sidebar listings and link styles</li>
            </ul>

            <h2>It Doesn&apos;t Have to Be Perfect</h2>

            <p>
                This isn&apos;t meant to be profound or polished, just a small
                step to see how things display and whether updates I&apos;ve
                made to the blog design are working across devices. I&apos;ll
                probably come back and tidy this post later (or not, if
                you&apos;re reading this in the future!).
            </p>

            <p>
                If you&apos;ve stumbled across this post, hello! You&apos;ve
                caught the blog mid-flight. Thanks for your patience while I
                bolt on bits of functionality and give things a coat of paint.
            </p>

            <p>That&apos;s all for now. Back to testing.</p>

            <p>— Karl</p>
        </BlogLayout>
    );
}
