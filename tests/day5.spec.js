const {test, expect} = require("@playwright/test");


test("textContent and allTextcontents in playwright", async ({page}) => {
    //Get the text of the webelement will use textContent() method - returb single text ex - apple
    //in order to get multiple webelements text will use alltextContents() - return array text contents ex: ["apple", "banana", "ornage"]

    await page.goto("https://www.costco.com/");

    await page.getByPlaceholder("Search Costco").fill("biscuits");

    await page.getByTestId("SearchButton").click();

    const elements = await page.locator("//div[@data-source='native']//a[@data-testid='Link']//span");

    //first element text
    const searchResults = await page.getByText('We found 8 results for "biscuits"').textContent();
    console.log(searchResults);

    console.log(await elements.nth(0).textContent());

    console.log(await elements.first().textContent());

    expect(await elements.nth(0).textContent()).toStrictEqual("Nutella Biscuits, 9.7 oz, 4-count");

    //all text contents
    const arrayofText = [
        'Nutella Biscuits, 9.7 oz, 4-count',
        'BelVita Breakfast Biscuits, Blueberry, 1.76 oz, 30-count',
        'Pocky Chocolate Biscuit Stick, 1.41 oz, 10-count',
        'Kirkland Signature Chicken Meal & Rice Formula Dog Biscuits, 15 lbs',
        'Glico Pocky, Strawberry Cream Covered Biscuit Sticks, 1.4 oz, 10-count',
        'Nature Valley Biscuits with Almond Butter, 1.35 oz, 30-count',
        'BelVita Breakfast Biscuit, Cinnamon Brown Sugar, 1.76 oz, 30-count',
        'FurReal Biscuit My Lovin’ Pup'
      ];

    console.log(await elements.allTextContents());
    
    expect(await elements.allTextContents()).toStrictEqual(arrayofText);

});

test.only("Auto Waiting Mechanism in Playwright", async ({page}) => {
    //Get the text of the webelement will use textContent() method - returb single text ex - apple
    //in order to get multiple webelements text will use alltextContents() - return array text contents ex: ["apple", "banana", "ornage"]

    await page.goto("https://www.costco.com/");

    await page.getByPlaceholder("Search Costco").fill("biscuits");

    await page.getByTestId("SearchButton").click();

    const elements = await page.locator("//div[@data-source='native']//a[@data-testid='Link']//span");

   // console.log(await elements.first().textContent());

   //await page.waitForLoadState("networkidle");
   await elements.nth(0).waitFor();
    console.log(await elements.allTextContents()); 


});