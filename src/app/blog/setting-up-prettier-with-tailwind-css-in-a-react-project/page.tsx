import BlogLayout from "@/components/layouts/BlogLayout";
import { meta } from "./meta";
import {
    htmlExample,
    nextOptions,
    prettierConfig,
    viteConfig,
} from "./examples";
import { createMetadata } from "@/lib/helpers";
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
                This post is mainly for me — the kind of thing I&apos;ll want to
                come back to next time I spin up a new React project and think,{" "}
                <em>
                    &quot;How did I set up Prettier and Tailwind last
                    time?&quot;
                </em>{" "}
                That said, I&apos;ve tried to write it clearly in case it helps
                someone else too.
            </p>
            <p>
                In the future, I might wrap all this into a proper template
                repo, but for now, here&apos;s the manual checklist I follow.
            </p>
            <blockquote>
                <p>
                    📝 I usually create the GitHub repo first and clone it
                    locally, so I initialise Next.js or Vite in an existing
                    folder. If you&apos;re doing the same, remember to use the{" "}
                    <code>.</code> at the end of your command to scaffold into
                    the current directory.
                </p>
            </blockquote>
            <hr />
            <h2>🧱 Starting a New Next.js Project</h2>
            <p>From your Visual Studio Code terminal, run:</p>
            <pre>
                <code className="language-bash">
                    npx create-next-app@latest .
                </code>
            </pre>
            <p>
                (The full stop at the end tells it to install into the current
                folder.)
            </p>
            <p>Here are the options I usually pick:</p>
            <pre className="overflow-x-auto">
                <code className="language-bash whitespace-pre-wrap">
                    {nextOptions}
                </code>
            </pre>
            <p>
                Once that&apos;s done, install Prettier and the Tailwind plugin:
            </p>
            <pre>
                <code className="language-bash">
                    npm install -D prettier prettier-plugin-tailwindcss
                </code>
            </pre>
            <p>
                Then, at the bottom of your <code>package.json</code>, add the
                following config:
            </p>
            <pre>
                <code className="language-json">{prettierConfig}</code>
            </pre>
            <p>
                That&apos;s it — Prettier will now sort your Tailwind classes
                automatically when you format. (<code>Option + Shift + F</code>{" "}
                is the shortcut on macOS.)
            </p>
            <hr />
            <h2>⚡ Bonus: Using Prettier + Tailwind CSS in a Vite Project</h2>
            <p>
                The setup is nearly identical when working with Vite, but
                here&apos;s a quick run-through for completeness.
            </p>
            <h3>Step 1: Install Tailwind CSS and its Vite plugin</h3>
            <pre>
                <code className="language-bash">
                    npm install tailwindcss @tailwindcss/vite
                </code>
            </pre>
            <h3>Step 2: Update your Vite config</h3>
            <p>
                In your <code>vite.config.ts</code> (or <code>.js</code>),
                import the plugin and apply it:
            </p>
            <pre>
                <code className="language-ts">{viteConfig}</code>
            </pre>
            <h3>Step 3: Import Tailwind in your CSS</h3>
            <p>
                In your main stylesheet (for example, <code>src/style.css</code>
                ):
            </p>
            <pre>
                <code className="language-css">
                    @import &quot;tailwindcss&quot;;
                </code>
            </pre>
            <h3>Step 4: Use Tailwind classes in your HTML</h3>
            <p>
                Make sure your compiled CSS is loaded in your HTML or app entry.
                For example:
            </p>
            <pre>
                <code className="language-html">{htmlExample}</code>
            </pre>
            <hr />
            <h2>🔁 Final Notes</h2>
            <p>
                This approach works equally well across both Next.js and Vite
                projects. If you&apos;re using VS Code, make sure you have the
                Prettier extension installed and your format-on-save settings
                enabled — it&apos;ll take care of sorting the utility classes
                automatically.
            </p>
            <p>
                If I find myself doing this more than a couple more times,
                I&apos;ll probably turn it into a template repo. But for now,
                this guide does the job.
            </p>
            <p>— Karl</p>
        </BlogLayout>
    );
}
