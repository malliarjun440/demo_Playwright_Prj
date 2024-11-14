const {test, expect} = require("@playwright/test");


test("Playwright locators and it's support", async ({page}) => {

    //navigate or launch website
    await page.goto("https://www.costco.com/");

    //Locators in Playwright

    // await page.locator("");


    //Playwright Locators supports auto waiting - 

    // these locators verify the element is visible, stable retry 1, retry 2 retry 3.retry...... 
    //Global timeout - 30 seconds 

    // 1. getByRole() - await page.getByRole('button', {aria-label : 'Search'})
    //2. getByText()  - await page.getByText("Costco Next")
    //3. getByLabel() - await page.getBylabel("Enter your email ");
    //4. getByPlaceholder() - await page.getByPlaceholder("Search Costco");
    //5. getByAltText() - await page.getByAltText("Costco US homepage");
    //6. getByTitle() - await page.getByTitle("Sign up for Facebook");
    //7. getByTestId() - in your DOM there is a data-testid which identified getByTestId() - await page.getByTestId("Text_shop-menu-button");

    // await page.getByPlaceholder("Search Costco").fill("biscuits");

    await page.getByRole('link', { name: 'Costco US homepage' }).click();

    await page.getByTestId("Text_signin").locator('visible=true').click();

    // await page.locator("//input[@placeholder='Search Costco']").fill("biscuits");
    // await page.getByTestId("SearchButton").click();

    // await page.waitForTimeout(5000);
    // expect(await page.getByText('We found 8 results for "biscuits"')).toHaveText('We found 8 results for "biscuits"');


    await page.pause();

});