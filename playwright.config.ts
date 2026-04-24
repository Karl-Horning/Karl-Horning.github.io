import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    testDir: "./tests",
    webServer: {
        command: "npm run dev -- --port 3000",
        url: "http://localhost:3000",
        reuseExistingServer: false,
        timeout: 60_000,
    },
    use: {
        baseURL: "http://localhost:3000",
    },
    projects: [
        { name: "desktop", use: { ...devices["Desktop Chrome"] } },
        { name: "mobile", use: { ...devices["Pixel 5"] } },
    ],
});
