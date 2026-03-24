import { test, expect } from '@playwright/test';

test('Simple POST Request', async ({request}) => {
    
    const response = await request.post("https://jsonplaceholder.typicode.com/users", {
        headers: {
            "Accept": "application/json"
        },
        data: {
            name: "Tom Sawyer",
            username: "tom_sawyer",
            email: "tom.sawyer@example.com"
        }
    });
    const responseObject = await response.json();

    // Assert the response status code is 201 OK
    expect(response.status()).toBe(201);
    console.log(responseObject); 
});

test('Check POST request with GET request', async ({request}) => {
    // First, make the POST request to create a new user
    const postResponse = await request.get("https://jsonplaceholder.typicode.com/users");
    const postResponseObject = await postResponse.json();

    // Assert the response status code is 200 OK
    expect(postResponse.status()).toBe(200);
    //console.log("Newly created user is: " + postResponseObject[postResponseObject.length - 1].name); // Log the user that was just created (assuming the API returns users in order)
    console.log(postResponseObject[postResponseObject.length ]); // Log the user that was just created (assuming the API returns users in order) 
});