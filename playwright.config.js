// @ts-check
const { defineConfig, devices } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',
  
  workers : 2,
  //global timeout all test cases 
  globalTimeout : 30 * 60 * 1000,

  //individual test case time out 
  timeout : 10 * 60 * 1000,

  //assertion timeout
  expect: {
    timeout : 15 * 1000
  },

  // reporter: [['html', { open: 'on-failure' }]],
  // reporter:'dot',

  // reporter: 'line',

  // reporter: 'html',
  reporter: [["line"], ["allure-playwright"]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
  //action time timeout -- entering text/click/ navigating between the pages
  actionTimeout :  15 * 1000,
  navigationTimeout : 15 * 1000,
  screenshot : "on",
  video : "retain-on-failure",
  trace : "on",
  headless : false,
   browserName : "chromium"
  },
  
});

