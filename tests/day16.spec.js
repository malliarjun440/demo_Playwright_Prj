const {test, expect} = require("@playwright/test");
const { styleText } = require("util");

test("Screenshots in Playwright", async ({page}) => {
    await page.goto("https://www.costco.com/");

    //current focus page
    await page.screenshot({path: 'DownloadFolder/screenshot.png'});

    //full page screenshot
    await page.screenshot({path: 'DownloadFolder/screenshot1.png', fullPage : true});

    //Element Screenshot 
    await page.locator("//nav[@aria-label='Main']").screenshot({path : 'DownloadFolder/elementScreenshot.png'});

});

test.only("Visual Comparision in Playwright", async ({page}) => {
    await page.goto("https://www.costco.com/");

    await expect(page).toHaveScreenshot();

    await expect(await page.locator("//nav[@aria-label='Main']")).toHaveScreenshot('DownloadFolder/elementScreenshot.png');

    // await expect(page)).toMatchSnapshot({styleText: 'screenshot.css'});

    // expect(await page.locator("").textContent()).toMatchSnapshot("hero.txt");

});