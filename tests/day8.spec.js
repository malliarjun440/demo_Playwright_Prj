const {test, expect} = require("@playwright/test");


test("Iframes in playwright", async ({page}) => {
   await page.goto("https://commitquality.com/practice-iframe");

//    await page.waitForTimeout(10000);

   const iframe = page.locator("iframe").contentFrame();

   await iframe.locator("//input[@placeholder='Filter by product name']").fill("Product 2");

   await iframe.getByTestId("filter-button").click();

   // await page.pause();

});

test.only("How to work with calendes in playwright", async ({page}) => {
    await page.goto("https://www.makemytrip.com/");
 
    //span[@data-cy='closeModal']
    await page.locator("//span[@data-cy='closeModal']").click();

    await page.locator("//p[@data-cy='departureDate']").click();

    const day = "25";
    const monthYear = "July 2025";
    // const year = "2025";

    while(true){
        let monthCounte = await page.locator("//div[@class='DayPicker-Caption']//div").count();

        let founMonth = false;
        
        for(let i=0; i < monthCounte ; i++){
        const calenderMonth = await page.locator("//div[@class='DayPicker-Caption']//div").nth(i).textContent();
        if(calenderMonth === monthYear){
            console.log("inside this calender month");
            let dateLocator = `//div[@class='DayPicker-Month']//div[text()='${monthYear}']//following::div[@class='DayPicker-Week']//div[@class='dateInnerCell']//p[not(@class=' todayPrice')]`;
            console.log(dateLocator);
            let dayCount = await page.locator(dateLocator).count();
            console.log("date Count "+ dayCount);

            for(let j=0; j< dayCount; j++){
             let dayText = await page.locator(dateLocator).nth(j).textContent();
             console.log("day text " + dayText);
             if(day === dayText){
                await page.locator(dateLocator).nth(j).click();
                break;
             }
            }
            founMonth = true;
            break;
        }
     }
     if(founMonth){
        break;
     }else{
        await page.locator("//span[@aria-label='Next Month']").click();
    }
    }
 
    await page.pause();
 
 });