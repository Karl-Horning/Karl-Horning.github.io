import { promises as fs } from "fs";
import path from "path";
import { BlogPost } from "@/types/blog";

/**
 * Reads blog posts from a static JSON file served in the `/public/data` directory.
 *
 * This function reads the JSON file directly from the filesystem during build
 * so that fetch is not needed and no network errors occur.
 *
 * @async
 * @function
 * @returns {Promise<BlogPost[]>} Resolves to an array of blog posts.
 * @throws Will throw an error if reading or parsing the file fails.
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
    try {
        // Construct absolute path to the JSON file in public folder
        const jsonFilePath = path.join(
            process.cwd(),
            "public",
            "data",
            "blogPosts.json"
        );

        // Read file contents
        const jsonData = await fs.readFile(jsonFilePath, "utf-8");

        // Parse and return JSON data
        const data: BlogPost[] = JSON.parse(jsonData);

        return data;
    } catch (error) {
        console.error("Error reading blog posts JSON file:", error);
        throw error;
    }
}
