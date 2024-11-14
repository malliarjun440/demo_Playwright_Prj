const test = require('@playwright/test');

test("Different ways of writing xpaths", async () => {

    //1. tagname[@attibute = 'value'] - //input[@name='firstname']

    //2. Text 
    //div[text()='Create a new account']

    //3. Contains Text -- //div[contains(text(), 'quick ')]

    //4. parent - //input[@type='password']//parent::div

    //5. Ancestor -- //input[@type='password']//ancestor::div//input[@name='firstname']

    //6. Child - //div[@id='reg_form_box']//child::div//input[@name='firstname']

    //7. preceding - this locates all the nodes that come before the current node. //input[@type='password']//preceding::div

    //8. preceding - sibling - like elder brother - //input[@type='password']//preceding-sibling::div

    //9. Following - //div[text()='New password']//following::div

    //10. Following - sibling - //div[text()='New password']//following-sibling::input




})