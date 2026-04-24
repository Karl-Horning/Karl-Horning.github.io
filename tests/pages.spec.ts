/**
 * @fileoverview Smoke tests: every page loads successfully and has an h1.
 */

import { expect, test } from "@playwright/test";
import { ROUTES } from "../lib/routes";

for (const route of ROUTES) {
    test(`${route} — loads with a 200 and renders an h1`, async ({ page }) => {
        const response = await page.goto(route);
        expect(response?.status()).toBe(200);
        await expect(page.locator("h1").first()).toBeVisible();
    });

    test(`${route} — has a non-empty page title`, async ({ page }) => {
        await page.goto(route);
        const title = await page.title();
        expect(title.trim()).not.toBe("");
    });
}
