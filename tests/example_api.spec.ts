import { test, expect } from '@playwright/test';

test('has title', async ({page}) => {
    await page.goto('https://playwright.dev/');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
});

test('Simple Get Request', async ({request}) => {
    
    const response = await request.get('https://conduit-api.bondaracademy.com/api/tags');
    const responseObject = await response.json();

    // Assert the response status code is 200
    expect(response.status()).toBe(200);
    console.log(responseObject); 
    expect(responseObject.tags[0]).toEqual('Test');
    expect(responseObject.tags).toHaveLength(10);
});

test('Simple POST Request', async ({request}) => {
    
    const response = await request.post('https://conduit-api.bondaracademy.com/api/articles', {
        headers: {
            "Accept": "application/json"
        },
        data: {
            title: "Test Article",
            description: "This is a test article",
            body: "This is the body of the test article"
        }
    });
    const responseObject = await response.json();

    // Assert the response status code is 201
    expect(response.status()).toBe(201);
    console.log(responseObject); 
});