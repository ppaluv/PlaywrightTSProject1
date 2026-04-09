import { test } from '@playwright/test';

test('Search for "auto" on DuckDuckGo', async ({ page }) => {
  // 1. Navigate to the website
  await page.goto('https://duckduckgo.com/');

  const searchbox = page.locator('#searchbox_input');
  await searchbox.waitFor(); // Wait for the search box to be available
  const searchButton = page.locator('span[title="Search"]');
  await searchButton.waitFor(); // Wait for the search button to be available


  // 2. Type "auto" into the search bar using the provided ID
  await searchbox.fill('searching for auto');

  // 3. Press the Search button using the provided span title
  // Note: Depending on the viewport or exact DuckDuckGo DOM version, 
  // you might sometimes need to click the parent button. 
  await searchButton.click();

  // 4. Wait for 2 seconds (2000 milliseconds)
  await page.waitForTimeout(2000);
});