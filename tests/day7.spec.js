const {test, expect} = require("@playwright/test");


test("Drag and functions in playwright", async ({page}) => {
   await page.goto("https://commitquality.com/practice-drag-and-drop");

//    await page.waitForTimeout(10000);

   const source = await page.locator("//div[@id='small-box']");
   const target = await page.locator("//div[@data-testid='large-box']");
   
   await source.dragTo(target);

    const dropText = await page.locator("//div[@data-testid='large-box']").textContent();

    console.log(dropText);

   await expect(dropText).toStrictEqual("Success!");
});

test("Manual Drag and Drop functions in playwright", async ({page}) => {
    await page.goto("https://commitquality.com/practice-drag-and-drop");
 
 //    await page.waitForTimeout(10000);
 
    await page.locator("//div[@id='small-box']").hover();

    await page.mouse.down();
    await page.locator("//div[@data-testid='large-box']").hover();

    await page.mouse.up();
 
     const dropText = await page.locator("//div[@data-testid='large-box']").textContent();
 
     console.log(dropText);
 
    await expect(dropText).toStrictEqual("Success!");

    await page.pause();
 });