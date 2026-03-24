import {test, expect, Locator} from '@playwright/test';

test('login test', async ({page}) => {

    await page.goto('https://www.saucedemo.com/');

    // await page.randommethod(); // -- to see the error in action

    const username: Locator = page.locator('#user-name');
    const password: Locator = page.locator('#password');
    const loginButton: Locator = page.locator('#login-button');
    
    // username.goto(''); // -- to see the error in action
    //  username = "text"; // -- to see the error in action
    // page.locator(123); // -- to see the error in action
    // await username.fill(123); // -- to see the error in action

    await username.fill('standard_user');
    await password.fill('secret_sauce');
    await loginButton.click();
    // await loginButton.pressKey(); // -- to see the error in action
   
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // await expect(page).toBeVisible(); // -- to see the error in action  

    const title: Locator = page.locator('.title');
    await expect(title).toHaveText('Products');

});