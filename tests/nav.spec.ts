/**
 * @fileoverview Navigation tests: skip link and mobile menu toggle.
 */

import { expect, test } from "@playwright/test";

test("skip link is the first focusable element and targets #main", async ({
    page,
}) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    const skipLink = page.locator(".skip-link");
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toHaveAttribute("href", "#main");
});

test("mobile nav toggle changes aria-expanded", async ({ page, isMobile }) => {
    test.skip(!isMobile, "hamburger only visible on mobile");
    await page.goto("/");
    const hamburger = page.locator('[aria-controls="mobile-nav"]');
    await expect(hamburger).toHaveAttribute("aria-expanded", "false");
    await hamburger.click();
    await expect(hamburger).toHaveAttribute("aria-expanded", "true");
    await hamburger.click();
    await expect(hamburger).toHaveAttribute("aria-expanded", "false");
});
