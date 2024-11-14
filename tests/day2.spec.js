const {test, expect} = require('@playwright/test');

test('Working with Locators',  async ({page}) => {
//cookies/bookemarkets
//   const context = await browser.newContext();
//   const page = await context.newPage();

//CSS and Xpath

//page.locator()

//Identify elements with CSS

//ID - # - Id - #email - # represent as ID 

// [attribute = 'value'] -- [name='email']

//tagName[attribute = 'value'] -- input[placeholder='Password']

  await page.goto("https://www.facebook.com/");

  //Fill is the method to use enter data in text field
  await page.locator("#email").fill("8639455697");

  // [attribute = 'value'] -- [name='email']

  await page.locator("[name='pass']").fill("test@123");

  //tagName[attribute = 'value'] -- input[placeholder='Password']

//   await page.locator("button[name='login']").click();

  // ^ sybmol represents in CSS starting of the attribute value

  await page.locator("a[data-testid^='open-registration']").click();

  // $ symbol is used in CSS of ending of the attribute

  await page.locator("input[aria-label$='or email address']").fill("test@123.com");

  // * symbol is used in CSS  represent the containing of value

  await page.locator("input[id*='step_input']").fill("test@123");

  //nth type of index 
  await page.locator("select[name='birthday_day']").click();
//   await page.locator("select[name='birthday_day']>option:nth-of-type(15)").click();

  //parent to child
  // div > input[name='firstname']
  await page.locator("div > input[name='firstname']").fill("Arjun");

  await page.pause();

});