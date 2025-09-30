/**
 * Represents a single tag associated with a blog post.
 *
 * @property {string} title - The display title of the tag.
 * @property {string} href - The URL path or link related to the tag.
 */
export type Tag = {
    title: string;
    href: string;
};

/**
 * Represents a blog post summary used in lists or previews.
 *
 * @interface BlogPost
 * @property {string} title - The title of the blog post.
 * @property {string} date - The publication date of the blog post (formatted as a string).
 * @property {string} snippet - A short excerpt or summary of the blog post content.
 * @property {Tag[]} tags - An array of tags associated with the blog post.
 */
export interface BlogPost {
    title: string;
    href: string;
    imgUrl: string;
    imgAlt: string;
    date: string;
    snippet: string;
    tags: Tag[];
}
