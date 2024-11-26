const {test, expect} = require("@playwright/test");


test("Go Forward and Goback methods in playwright", async ({page}) => {

    //navigate or launch website
    await page.goto("https://www.costco.com/");

     await page.locator("//input[@placeholder='Search Costco']").fill("biscuits");
    await page.getByTestId("SearchButton").click();

    const searchResults = await page.getByText('We found 7 results for "biscuits"').textContent();
    console.log(searchResults);

    await page.goBack();

    await page.waitForTimeout(3000);
    await page.goForward();
});

test("handling multiple tabs in playwright", async ({page}) => {

    //navigate or launch website
    await page.goto("https://hokkung.netlify.app/");
    console.log(await page.title());
    await page.getByTitle("Medium Link").click();

    const pagePromise = page.waitForEvent("popup");
    const newTab =await pagePromise;
    await newTab.bringToFront();
    console.log(await newTab.title());

    await newTab.getByPlaceholder("Search").fill("Test");

    await page.bringToFront();
    await page.pause();
    
});


test("test order of themain menu playwright", async ({page}) => {

    //navigate or launch website
    await page.goto("https://www.costco.com/");
 
    await expect(page.locator("//nav[@aria-label='Savings and locations']//ul//li")).toContainText(["What's New", "Online-Only", "Costco Next", "What's New"]);
    await page.pause();
    
});