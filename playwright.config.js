// @ts-check
const { defineConfig, devices } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',
  
  //global timeout all test cases 
  globalTimeout : 30 * 60 * 1000,

  //individual test case time out 
  timeout : 10 * 60 * 1000,

  //assertion timeout
  expect: {
    timeout : 1 * 60 * 1000
  },

  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
  //action time timeout -- entering text/click/ navigating between the pages
  actionTimeout :  15 * 1000,
  navigationTimeout : 15 * 1000,
  
  headless : false,
   browserName : "chromium"
  },
  
});

