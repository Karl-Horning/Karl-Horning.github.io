/**
 * Represents a single project entry used in the "Projects" section or case studies.
 *
 * Each project includes a title, description, repository link, and
 * associated metadata for display within cards or detailed pages.
 */
export interface ProjectItem {
    /**
     * The title of the project (for example, "Visual Vault").
     */
    title: string;

    /**
     * A short description summarising the project's purpose or functionality.
     */
    description: string;

    /**
     * The unique slug used to generate the project's URL path.
     * For example, a slug of `"visual-vault"` would create `/projects/visual-vault`.
     */
    slug: string;

    /**
     * The GitHub repository name or path associated with the project.
     */
    repo: string;

    /**
     * The image path or URL for the project screenshot or preview.
     */
    screenshot: string;

    /**
     * A list of related topics, technologies, or tags (for example, `["React", "Next.js"]`).
     */
    topics: string[];
}
