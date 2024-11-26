const {test, expect} = require("@playwright/test");

test("Keyboard actions in Playwright", async ({page}) => {

    //navigate or launch website
    await page.goto("https://www.google.com/");

    await page.locator("//textarea[@name='q']").fill("Playwright Automation");

    await page.waitForTimeout(3000);

    // await page.keyboard.press("Control+A");

    // await page.keyboard.press("Backspace");

    await page.keyboard.down("Shift");

    for(let i=0; i< 'Automation'.length; i++){
        await page.keyboard.press("ArrowLeft");
    }

    await page.keyboard.up("Shift");

    await page.keyboard.press("Backspace");

    await page.keyboard.press("Control+A");

    await page.keyboard.press("Control+C");

    console.log(await page.keyboard.press("Control+v"));

    await page.pause();
});