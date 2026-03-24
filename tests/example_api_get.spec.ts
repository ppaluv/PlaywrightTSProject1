import { test, expect } from '@playwright/test';

test('Simple GET Request', async ({request}) => {
    
    const response = await request.get('https://conduit-api.bondaracademy.com/api/tags');
    const responseObject = await response.json();

    // Assert the response status code is 200
    expect(response.status()).toBe(200);
    console.log(responseObject); 
    expect(responseObject.tags[0]).toEqual('Test');
    expect(responseObject.tags).toHaveLength(10);
});

test('Another GET Request', async ({request}) => {
    
    const response = await request.get('https://jsonplaceholder.typicode.com/users',
        {headers: {"Accept": "application/json"}}
    );
    const responseObject = await response.json();

    // Assert the response status code is 200
    expect(response.status()).toBe(200);
    console.log(responseObject); 
    expect(responseObject[0]["id"]).toEqual(1);
    expect(responseObject[0]["name"]).toEqual('Leanne Graham');
    //expect(responseObject.tags).toHaveLength(10);
});