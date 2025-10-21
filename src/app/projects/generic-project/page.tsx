import ProjectLayout from "@/components/layouts/ProjectLayout";
import Image from "next/image";
import { meta } from "./meta";
import { createMetadata } from "@/lib/helpers";
import { internalRoutes } from "@/lib/constants/ui";

const { ProjectsRoute } = internalRoutes;

export const metadata = createMetadata({
    title: `${meta.title} | Projects`,
    path: `${ProjectsRoute}/${meta.slug}`,
});

export default function Page() {
    return (
        <ProjectLayout {...meta}>
            <aside className="not-prose rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <p className="font-semibold">
                    <i className="fa-solid fa-pen-to-square mr-2"></i>How to
                    write each section
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 dark:text-slate-300">
                    <li>
                        <strong>Keep it brief:</strong> 3-6 sentences per
                        section is plenty.
                    </li>
                    <li>
                        <strong>Be specific:</strong> Name tech, constraints,
                        and decisions.
                    </li>
                    <li>
                        <strong>Show impact:</strong> Add 2-4 numeric outcomes
                        if possible.
                    </li>
                    <li>
                        <strong>Reflect:</strong> Say what you&apos;d change
                        next time.
                    </li>
                </ul>
            </aside>

            <h2 id="overview">Overview</h2>
            <p>
                <em>What it is and who it&apos;s for.</em> In 3-4 sentences,
                describe the project, the audience, and the primary objective.
                Mention the key technologies and any constraints (time, team
                size, legacy systems).
            </p>
            <ul>
                <li>
                    <strong>Role:</strong> Developer / Designer / PM
                </li>
                <li>
                    <strong>Stack:</strong> React, Next.js, Node, Express,
                    PostgreSQL
                </li>
                <li>
                    <strong>Timeframe:</strong> 6 weeks (part-time)
                </li>
            </ul>

            <h2 id="problem">Problem</h2>
            <p>
                <em>What pain or opportunity did you address?</em> Explain the
                context succinctly. Include 1-2 quotes or observations from
                users/stakeholders if relevant, paraphrased.
            </p>

            <h2 id="goals">Goals & success criteria</h2>
            <ul>
                <li>Reduce manual steps from 6 → 2.</li>
                <li>
                    Hit <abbr title="Core Web Vitals">CWV</abbr> thresholds on
                    the most used flow.
                </li>
                <li>Meet WCAG 2.2 AA for the core UI.</li>
            </ul>

            <h2 id="approach">Approach</h2>
            <p>
                <em>Process and key decisions.</em> Outline discovery,
                architecture, and implementation. Call out trade-offs and why
                you chose them. Name the libraries/services you leaned on.
            </p>

            <h2 id="accessibility">Accessibility considerations</h2>
            <ul>
                <li>
                    Keyboard access and visible focus states across all
                    interactive elements.
                </li>
                <li>
                    Form labels, descriptions and error states announced via
                    ARIA.
                </li>
                <li>
                    Colour contrast ≥ 4.5:1; prefers-reduced-motion respected.
                </li>
            </ul>

            <h2 id="results">Results</h2>
            <p>
                Summarise outcomes with a mix of quantitative and qualitative
                evidence. Where you can, add small, simple metrics cards below.
            </p>

            <div className="not-prose mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                    <p className="text-slate-500 dark:text-slate-300">
                        Cycle time
                    </p>
                    <p className="text-lg font-semibold">-38%</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                    <p className="text-slate-500 dark:text-slate-300">CLS</p>
                    <p className="text-lg font-semibold">0.03</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                    <p className="text-slate-500 dark:text-slate-300">
                        Support tickets
                    </p>
                    <p className="text-lg font-semibold">-46%</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                    <p className="text-slate-500 dark:text-slate-300">Uptime</p>
                    <p className="text-lg font-semibold">99.96%</p>
                </div>
            </div>

            <h2 id="screenshots">Screenshots</h2>
            <p>
                Use 1-3 images that tell the story (before → after, or key
                flows). Add concise alt text explaining the purpose.
            </p>
            <Image
                src="/img/screenshots/example.jpg"
                alt="Screenshot of the improved dashboard layout showing clearer status tags and a simplified action bar."
                height={1068}
                width={1600}
            />

            <h2 id="reflection">Reflection & next steps</h2>
            <p>
                Share what went well, what was hard, and what you&apos;d change.
                End with concrete next steps (e.g., usability testing round 2,
                schema refactor, performance budget in CI).
            </p>

            <h2 id="links">Links</h2>
            <ul>
                <li>
                    <a href="#">Live site</a>
                </li>
                <li>
                    <a href="#">Repository</a>
                </li>
                <li>
                    <a href="#">Docs / ADRs</a>
                </li>
            </ul>
        </ProjectLayout>
    );
}
