// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://playwright.dev/');
  await page.waitForTimeout(2000)

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Plywright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://plawright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
