const {test, expect} = require('@playwright/test');

test('brower Context Plawright Test',  async ({browser}) => {
//cookies/bookemarkets
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
});

test('Page context Plawright Test',  async ({page}) => {
    //cookies/bookemarkets
    //   const context = await browser.newContext();
    //   const page = await context.newPage();
      await page.goto("https://www.google.com/");
      console.log(await page.title());
      await expect(page).toHaveTitle("Google");
});


//CSS and Xpath

//page.locator()

//Identify elements with CSS

//ID - # - Id - #email - # represent as ID 

// [attribute = 'value'] -- [name='email']

//tagName[attribute = 'value'] -- input[placeholder='Password']



