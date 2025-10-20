import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { internalRoutes } from "@/lib/constants/ui";

// Remove XML docs
const routes = Object.values(internalRoutes).filter(
    (route) => !route.endsWith(".xml")
);

for (const route of routes) {
    test(`A11y: ${route}`, async ({ page }) => {
        await page.goto(route);
        // Wait for main content
        await page.waitForSelector("main", { state: "attached" });

        const accessibilityScanResults = await new AxeBuilder({ page })
            // Can disable noisy rules selectively, example:
            // .disableRules(['color-contrast'])
            .analyze();

        // Fail on any violation
        expect(
            accessibilityScanResults.violations,
            JSON.stringify(accessibilityScanResults.violations, null, 2)
        ).toEqual([]);
    });
}
