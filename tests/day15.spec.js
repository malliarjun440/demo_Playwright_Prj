const {test, expect} = require("@playwright/test");


// test.describe.configure({mode : "parallel"})

test.describe.parallel.only("Login Functionaly test Scenario", () => {
    test("test with Valid Credentials", async ({page}) => {
       await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
       await page.getByPlaceholder('Username').fill("Admin");
       await page.getByPlaceholder('Password').fill("admin123");

       await page.locator("//button[@type='submit']").click();

       expect(await page.locator("//h6[text()='Dashboard']").textContent()).toStrictEqual("Dashboard");
    });

    test("Valid userName and Invalid Password", async ({page}) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await page.getByPlaceholder('Username').fill("Admin");
        await page.getByPlaceholder('Password').fill("Admin");
 
        await page.locator("//button[@type='submit']").click();
 
        expect(await page.locator("//p[text()='Invalid credentials']").textContent()).toStrictEqual("Invalid credentials");
    });

    test("In Valid userName and valid Password", async ({page}) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await page.getByPlaceholder('Username').fill("Arjun");
        await page.getByPlaceholder('Password').fill("admin123");
 
        await page.locator("//button[@type='submit']").click();
 
        expect(await page.locator("//p[text()='Invalid credentials']").textContent()).toStrictEqual("Invalid credentials");
    });

    test("In Valid userName and invalid Password", async ({page}) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await page.getByPlaceholder('Username').fill("Arjun");
        await page.getByPlaceholder('Password').fill("test123");
 
        await page.locator("//button[@type='submit']").click();
 
        expect(await page.locator("//p[text()='Invalid credentials']").textContent()).toStrictEqual("Invalid credentials");
    });
});


test.describe.serial("Login with seriolisation test Scenario", {tag : "@orangeHrmTest"}, () => {
    test("Login Valid Credentials", async ({page}) => {
       await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
       await page.getByPlaceholder('Username').fill("Admin");
       await page.getByPlaceholder('Password').fill("admin123");

       await page.locator("//button[@type='submit']").click();

       expect(await page.locator("//h6[text()='Dashboard']").textContent()).toStrictEqual("Dashboard");
    });

    test("Navigate to Admin Page", async ({page}) => {
    
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await page.getByPlaceholder('Username').fill("Admin");
        await page.getByPlaceholder('Password').fill("admin123");
 
        await page.locator("//button[@type='submit']").click();
 
        expect(await page.locator("//h6[text()='Dashboard']").textContent()).toStrictEqual("Dashboard");
        await page.locator("//a//span[text()='Admin']").click();
 
        await page.locator("//button[text()=' Add ']").click();

    });

    test("Navigate to PIM Page", async ({page}) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await page.getByPlaceholder('Username').fill("Admin");
        await page.getByPlaceholder('Password').fill("admin123");
 
        await page.locator("//button[@type='submit']").click();
 
        expect(await page.locator("//h6[text()='Dashboard']").textContent()).toStrictEqual("Dashboard");
        await page.locator("//a//span[text()='PIM']").click();
 
        await page.locator("//button[text()=' Add ']").click();

    });

    test("Navigate to Leave Page", async ({page}) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await page.getByPlaceholder('Username').fill("Admin");
        await page.getByPlaceholder('Password').fill("admin123");
 
        await page.locator("//button[@type='submit']").click();
 
        expect(await page.locator("//h6[text()='Dashboard']").textContent()).toStrictEqual("Dashboard");
        await page.locator("//a//span[text()='Leave']").click();
 
        // await page.locator("//button[text()=' Add ']").click();

    });

   
});