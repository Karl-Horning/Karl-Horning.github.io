/**
 * Represents a tag used in the WorkAndProjectsText component.
 * @typedef {object} Tag
 * @property {string} link - The link associated with the tag.
 * @property {string} colour - The color of the tag.
 * @property {JSX.Element} icon - The icon element for the tag.
 * @property {string} name - The name of the tag.
 */
export interface Tag {
    link: string;
    colour: "secondary" | "default" | "primary" | "success" | "warning" | "danger";
    icon: JSX.Element;
    name: string;
}