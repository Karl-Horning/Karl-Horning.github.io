/**
 * Represents a single blog topic or tag link.
 *
 * Used to create navigable topic chips or lists that
 * direct users to filtered blog views by tag.
 */
export type TopicItem = {
    /**
     * The display name or label for the topic (for example, "#React").
     */
    title: string;

    /**
     * The URL path or link target for the topic (usually internal).
     */
    link: string;
};
