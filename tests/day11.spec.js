const {test, expect} = require("@playwright/test");
const exp = require("constants");


test.skip("Handling Alerts in Playwright", async ({page}) => {

    //navigate or launch website
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");


    page.on("dialog", async (popUp) => {
        expect(popUp.type()).toContain("alert");

        expect(popUp.message()).toStrictEqual("I am a JS Alert");

        await popUp.accept();
    });
    
    await page.locator("//button[text() = 'Click for JS Alert']").click();

    await page.pause();
});

test.skip("Handling confirm in Playwright", async ({page}) => {

    //navigate or launch website
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    await page.waitForTimeout(3000);

    page.on("dialog", async (popUp) => {
        expect(popUp.type()).toContain("confirm");

        expect(popUp.message()).toStrictEqual("I am a JS Confirm");

        // await popUp.accept();

        await popUp.dismiss();
    });
    
    await page.locator("//button[text() = 'Click for JS Confirm']").click();
});

test.skip("Handling Prompt alert in Playwright", async ({page}) => {

    //navigate or launch website
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    await page.waitForTimeout(3000);

    page.on("dialog", async (popUp) => {
        expect(popUp.type()).toContain("prompt");

        expect(popUp.message()).toStrictEqual("I am a JS prompt");

        await popUp.accept("Arjun");
        
       // await popUp.dismiss();
    });
    
    await page.locator("//button[text() = 'Click for JS Prompt']").click();

    await page.pause();
});

test.skip("handling Auto Suggestions in Playwright", async ({page}) => {

    //navigate or launch website
    await page.goto("https://www.google.com/");

    await page.locator("//textarea[@name='q']").fill("playwright");

    await page.waitForTimeout(3000);
    await page.keyboard.press("ArrowDown");

    await page.keyboard.press("ArrowDown");

    await page.keyboard.press("ArrowDown");

    await page.keyboard.press("Enter");

    await page.pause();
});

test("Auto Suggestions in Playwright", async ({page}) => {

    //navigate or launch website
    await page.goto("https://www.google.com/");

    await page.locator("//textarea[@name='q']").fill("playwright");

    await page.waitForTimeout(3000);

    const elements = await page.locator("//li[@data-attrid='AutocompletePrediction']//div[@class='wM6W7d']//span");

    const elementsCount = await elements.count();

    console.log(elementsCount);

    for(let i=0; i<elementsCount; i++){

        const text = await elements.nth(i).textContent();
        console.log(text);

        if(text === "playwright automation"){
            await elements.nth(i).click();
            break;
        }
    }

    await page.pause();
});