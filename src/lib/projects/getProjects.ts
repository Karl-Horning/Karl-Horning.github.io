import { promises as fs } from "fs";
import path from "path";
import { ProjectItem } from "@/types/ProjectItem";

/**
 * Asynchronously retrieves a list of project items from the local JSON data file.
 *
 * Reads and parses the `projects.json` file stored in `/public/data/`, returning
 * an array of `ProjectItem` objects. The number of results can be limited using
 * the optional `limit` parameter.
 *
 * @async
 * @param {number} [limit=10] - The maximum number of project items to return.
 * @returns {Promise<ProjectItem[]>} A promise that resolves to an array of project data objects.
 *
 * @throws Will log and rethrow an error if the JSON file cannot be read or parsed.
 *
 * @example
 * ```ts
 * const projects = await getProjectItems(5);
 * console.log(projects[0].title); // "Developer Portfolio"
 * ```
 */
export async function getProjectItems(
    limit: number = 10
): Promise<ProjectItem[]> {
    try {
        // Construct absolute path to the JSON file in public folder
        const jsonFilePath = path.join(
            process.cwd(),
            "public",
            "data",
            "projects.json"
        );

        // Read file contents
        const jsonData = await fs.readFile(jsonFilePath, "utf-8");

        // Parse and return JSON data
        const data: ProjectItem[] = JSON.parse(jsonData);

        return data.slice(0, limit);
    } catch (error) {
        console.error("Error reading projects JSON file:", error);
        throw error;
    }
}
