const testData = require('../test-data/testData.json');
const {test, expect} = require('../fixtures/fixtures');
test.describe('academy bugs functional bug suites',()=>{
    
test('crash bug#22 click 10',async({pomManager,page})=>{
    const findbugspage =pomManager.getFindbugspage();
await findbugspage.navigate();
    
  await findbugspage.clickView10();
  const crashAlert = findbugspage.getCrashAlert(testData.crashBugs.crashMessage);
     await expect(crashAlert).toBeVisible({ timeout: 10000 }); 

     console.log('Expected Result: Product listing should filter to show exactly 10 items.');
        console.log(`Actual Result: Page hangs/freezes and displays pop-up -> "${testData.crashBugs.crashMessage}"`);
    });
  

test('crasbug#21pagefreez when changing currency',async({pomManager,page})=>{
    const findbugspage =pomManager.getFindbugspage();
await findbugspage.navigate();
    
    await findbugspage.selectProduct(testData.crashBugs.productSelector_4481370);
    await page.waitForLoadState('networkidle');
    await findbugspage.changeCurrency(testData.crashBugs.currencyValue);
const crashAlert = findbugspage.getCrashAlert(testData.crashBugs.crashMessage);
        await expect(crashAlert).toBeVisible({ timeout: 10000 });

        console.log('Expected Result: Comment should be successfully posted onto the thread.');
        console.log(`Actual Result: System became unresponsive -> "${testData.crashBugs.crashMessage}" displayed.`);
    });   
  
test('crashbug#23 unresponsive when clicking post comment',async({pomManager,page})=>{
    const findbugspage =pomManager.getFindbugspage();
await findbugspage.navigate();
    
   await findbugspage.selectProduct(testData.crashBugs.productSelector_4481370);
   await findbugspage.submitComment(testData.crashBugs.commentData);
        await page.waitForLoadState('networkidle');
const crashAlert = findbugspage.getCrashAlert(testData.crashBugs.crashMessage);
        await expect(crashAlert).toBeVisible({ timeout: 10000 });

        console.log('Expected Result: Comment should be successfully posted onto the thread.');
        console.log(`Actual Result: System became unresponsive -> "${testData.crashBugs.crashMessage}" displayed.`);
    });   
   
test('crashbug#25 page freezes when increasing product quantity',async({pomManager,page})=>{
    const findbugspage =pomManager.getFindbugspage();
await findbugspage.navigate();
    
await findbugspage.selectProduct(testData.crashBugs.productSelector_4381370);
 await findbugspage.selectPinkAndIncreaseQuantity();
const crashAlert = findbugspage.getCrashAlert(testData.crashBugs.crashMessage);
        await expect(crashAlert).toBeVisible({ timeout: 10000 });

        console.log('Expected Result: Comment should be successfully posted onto the thread.');
        console.log(`Actual Result: System became unresponsive -> "${testData.crashBugs.crashMessage}" displayed.`);
    });   
    
});

