const {test, expect} = require("@playwright/test");


test("Dropdown Selection in playwright", async ({page}) => {
    test.setTimeout(15 * 60 * 1000);

    //We can select dropdowns in three ways
    
    //Index attribute 

    await page.goto("https://www.facebook.com/");

    await page.locator("a[data-testid^='open-registration']").click();

    const dayDropdown = await page.getByTitle('Day');

    // await dayDropdown.selectOption('15');

    await dayDropdown.selectOption({index : 20});

    const monthDropdown = await page.getByTitle('Month');

    //with Value attribute
    await monthDropdown.selectOption({ value : '12'});

    //With Label/Text attribute
    await page.selectOption("//select[@name='birthday_year']", {label : "1995"});
    
    // await page.pause();
});

test("Radio Button selection in playwright", async ({page}) => {
    //Radio button selection have two method 
    
    //Index attribute 

    await page.goto("https://www.facebook.com/");

    await page.locator("a[data-testid^='open-registration']").click();

    //Radio button male selection

    // await page.getByLabel('Male').check();

    // await page.locator("//label[text()='Male']//input").check();

    await page.locator("//label[text()='Male']//input").click();

    await expect(await page.locator("//label[text()='Male']//input")).toBeChecked();
    
    await page.pause();
});

test("select Checkbox in playwright", async ({page}) => {
    //Radio button selection have two method 

    await page.goto("https://demo.automationtesting.in/Register.html");

    // await page.waitForTimeout(3000);
    await page.locator("//input[@id='checkbox1']").check();

    await page.locator("//input[@id='checkbox2']").check();

    await page.locator("//input[@id='checkbox3']").check();

    await page.locator("//input[@id='checkbox3']").uncheck();

    expect(await page.locator("//input[@id='checkbox2']")).toBeChecked();

    // await expect(await page.locator("//label[text()='Male']//input")).toBeChecked();
    
    await page.pause();
});

test.only("Hover the mouse in playwright", async ({page}) => {

    //hover() which is used to hover mouse

    await page.goto("https://www.costco.com/");

    await page.locator("a[aria-label='Grocery']").hover();

    await page.locator("div[data-testid='Text_Bakery & Desserts']").click();

    await page.pause();
});

