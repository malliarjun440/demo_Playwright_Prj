const {test, expect, browser} = require("@playwright/test");

//Annotation

//Focus a test - You can focus only test when you provided test.only 

test.only("I'm the only test to focus", async ({page}) => {
    //Logic
});

//Skip Any test 

test.skip("I'm skipping the test", async ({page}) => {
    //Logic
});

//Skip Conditional Tests
test("I'm one test to skip test", async ({page}) => {
    test.skip(browserName === "Firefox", "Still working to fix in firefox");
});

//Group tests
// test.describe("Login Functionaly", async ({page}) => {
//     test("one test ", async ({page}) => {
//         //Logic
//     });
//     test("two test ", async ({page}) => {
//         //Logic
//     });
//     test("three test ", async ({page}) => {
//         //Logic
//     });
// });

test("tagging tests in playwright", {tag : ['@smoke', '@Regression', '@Functional']}, async ({page}) => {
    //   const context = await browser.newContext();
    //  const page = await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    await page.waitForTimeout(3000);

    page.on("dialog", async (popUp) => {
        expect(popUp.type()).toContain("prompt");

        expect(popUp.message()).toStrictEqual("I am a JS prompt");

        await popUp.accept("Arjun");
    })
});

//Fixme 
test.fixme("I'm fixme the test", async ({page}) => {
    //Logic
});

//fail 
test.fail("I'm failing the test", async ({page}) => {
    //Logic
});

// //info 
// test.info("I'm  the test", async ({page}) => {
//     //Logic
// });