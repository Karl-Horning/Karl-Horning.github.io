/**
 * Converts a string into a URL-friendly slug.
 *
 * Normalises accented characters, trims whitespace,
 * lowercases all letters, and replaces spaces and
 * special characters with hyphens.
 *
 * Useful for generating blog post slugs, tag URLs,
 * or SEO-friendly identifiers from titles.
 *
 * @param {string} text - The input string to convert into a slug.
 * @returns {string} A normalised, lowercase, hyphen-separated slug.
 *
 * @example
 * ```ts
 * slugify("Hello World!") // "hello-world"
 * slugify("Café con Leche") // "cafe-con-leche"
 * slugify("  React & TypeScript  ") // "react-typescript"
 * ```
 */
export const slugify = (text: string) =>
    text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
        .replace(/-+/g, "-")
        .replace(/^-+|-+$/g, "");
