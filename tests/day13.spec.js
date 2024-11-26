const {test, expect} = require("@playwright/test");

test.beforeAll(async () => {
    console.log("Before All test ")
});

test.beforeEach( async ({page}) => {
   await page.goto("https://commitquality.com/practice-iframe");
   console.log("this is before each method ");
});

test.describe("tests the Iframe in Playwright", () => {
      test("Iframes in playwright one", async ({page}) => {
 
      //    await page.waitForTimeout(10000);
      
         const iframe = page.locator("iframe").contentFrame();
      
         await iframe.locator("//input[@placeholder='Filter by product name']").fill("Product 2");
      
         await iframe.getByTestId("filter-button").click();
      
         // await page.pause();
      
      });
      test("Iframes in playwright 2", async ({page}) => {
      
      //    await page.waitForTimeout(10000);
      
         const iframe = page.locator("iframe").contentFrame();
      
         await iframe.locator("//input[@placeholder='Filter by product name']").fill("Product 2");
      
         await iframe.getByTestId("filter-button").click();
      
         // await page.pause();
      
      });
});

 test.afterEach(async ({page}) => {
   await page.close();
   console.log("this is after each method ");
 });
test.afterAll(async () => {
    console.log("After All tests");
});
