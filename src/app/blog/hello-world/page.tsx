import BlogLayout from "@/components/layouts/BlogLayout";
import { meta } from "./meta";
import { createMetadata } from "@/lib/metadata";
import { internalRoutes } from "@/lib/constants/ui";

const { BlogRoute } = internalRoutes;

export const metadata = createMetadata({
    title: `${meta.title} | Blog`,
    path: `${BlogRoute}/${meta.slug}`,
});

export default function Page() {
    return (
        <BlogLayout {...meta}>
            <p>
                Welcome to my blog! I&apos;m calling this the &quot;first
                post&quot;, but really, it&apos;s a placeholder — something to
                test layouts and that lovely moment when a blank site becomes
                something more than a skeleton.
            </p>

            <p>That said, I thought I&apos;d make it useful.</p>

            <p>
                This site is my digital notebook, portfolio, and playground.
                Expect a mix of topics — from thoughts on learning technology
                and software development, to accessibility, to side projects
                that may or may not get finished (but are fun to build anyway).
            </p>

            <p>
                I&apos;m building the blog with{" "}
                <a href="https://www.11ty.dev/" target="_blank">
                    Eleventy (11ty)
                </a>
                , a lightweight static site generator. It&apos;s fast, flexible,
                and — once you get the hang of it — satisfying to work with.
                I&apos;ve paired it with Tailwind CSS to keep things clean and
                responsive.
            </p>

            <p>
                If you&apos;ve stumbled across this while everything&apos;s
                still under construction, thanks for your patience! And if
                you&apos;re here on purpose: welcome. I hope you find something
                interesting!
            </p>

            <hr />

            <ul>
                <li>
                    🛠 <strong>Built with</strong>: Eleventy, Tailwind CSS,
                    GitHub Pages
                </li>
                <li>
                    🧪 <strong>Currently testing</strong>: Layouts, dark mode,
                    mobile nav
                </li>
                <li>
                    ☕ <strong>Currently drinking</strong>: Water 😥
                </li>
            </ul>

            <hr />

            <p>Stay tuned.</p>

            <p>— Karl</p>
        </BlogLayout>
    );
}
