/**
 * Defines the data structure for a portfolio item (demo or repo).
 *
 * Used by:
 * - `src/lib/constants/demos.ts` — source list of all items.
 * - UI components that render project cards or apply filters.
 *
 * Notes:
 * - Use British English in text fields.
 * - Keep descriptions short (≤2 sentences).
 * - Always include `repoLink`; `demoLink` is optional.
 * - `importance` drives ordering and filtering logic.
 */
export type DemoItem = {
    /** Short, descriptive name of the project (no trailing punctuation). */
    title: string;

    /** One-to-two-sentence summary explaining purpose and key tech. */
    description: string;

    /** Distinguishes between a live demo and a code repository. */
    type: "demo" | "repo";

    /** Optional link to a live demo or deployed version. */
    demoLink?: string;

    /** Mandatory link to the project’s GitHub (or equivalent) repository. */
    repoLink: string;

    /**
     * Indicates display priority or relevance.
     *
     * Accepted values (descending):
     * - "highest" — flagship or most recent demo
     * - "high" — key demos or repos
     * - "medium" — secondary items
     * - "low" — minor or legacy work
     * - "lowest" — archived or minimal importance
     */
    importance: "highest" | "high" | "medium" | "low" | "lowest";
};
