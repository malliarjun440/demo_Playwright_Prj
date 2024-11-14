const {test, expect} = require("@playwright/test");


test("File Dowload in playwright", async ({page}) => {
   await page.goto("https://commitquality.com/practice-file-download");

   await page.waitForTimeout(3000);
   const downloadPromise = page.waitForEvent("download");
   await page.getByText("Download File").click();

   const download = await downloadPromise;
   await download.saveAs('./' + download.suggestedFilename());
});

test.only("File Upload in playwright", async ({page}) => {
    await page.goto("https://commitquality.com/practice-file-upload");
    
    await page.getByTestId("file-input").setInputFiles("DownloadFolder/dummy_file.txt");
    await page.pause();
    
    await page.getByText("Submit").click();

    await page.pause();
 });