import {test, expect} from '@playwright/test';

test('My first Test', async ({page}) => {
    await page.goto('https://www.google.com/ncr');

    // Handle the cookie consent pop-up if it appears
    const acceptButton = page.locator('button:has-text("Accept all")');
    if (await acceptButton.isVisible()) {
        await acceptButton.click();
        console.log('Cookie consent accepted.');
    }

    await expect(page).toHaveTitle(/Google/);
    await page.locator('textarea[name="q"]').fill('Playwright');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    const results = await page.locator('h3').allTextContents();
    expect(results.length).toBeGreaterThan(0);

});