const testData = require('../test-data/testData.json');

 const {test, expect} = require('../fixtures/fixtures');
test.describe('academy bugs functional bug suites',()=>{
    let findbugspage;
    let signUtils;
    test.beforeEach(async({pomManager})=>{
findbugspage =pomManager.getFindbugspage();
signUtils= pomManager.getSignUtils();
await findbugspage.navigate();
    });

test('visual bug#7 the caption of the Sign In button is misaligned vertically',async({page})=>{

await findbugspage.selectProduct(testData.visualBugs.productSelector);

     await page.waitForLoadState('networkidle');
const currentDisplay = await signUtils.getButtonCSSProperty('display');
        const paddingTop = await signUtils.getButtonCSSProperty('paddingTop');
        const paddingBottom = await signUtils.getButtonCSSProperty('paddingBottom');

console.log(`Expected Result: Button should use 'flex' center layout and have equal padding alignment.`);
        console.log(`Actual Result: Display Style: ${currentDisplay} | Padding Top: ${paddingTop} vs Bottom: ${paddingBottom}`);
console.log(`Expected Result: Button should use 'flex' center layout and have equal padding alignment.`);
        console.log(`Actual Result: Display Style: ${currentDisplay} | Padding Top: ${paddingTop} vs Bottom: ${paddingBottom}`);
expect(currentDisplay, 'BUG CONFIRMED: Misaligned button display properties found!').not.toBe('flex');
    });
  
test('visual bug#9 the Sign In button overlaps footer',async({page})=>{

  await findbugspage.selectProduct(testData.visualBugs.productSelector);
await page.waitForLoadState('networkidle');

const isOverlapping = await signUtils.verifyOverlapAndScreenshot(
            testData.visualBugs.footerSelector,
            testData.visualBugs.screenshotPath
        );

console.log('Expected Result: Elements should respect absolute margins and never overlap.');
console.log(`Actual Result: Elements overlapped? -> ${isOverlapping}. Screenshosaved at: ${testData.visualBugs.screenshotPath}`);

expect(isOverlapping, 'Bug Found: Sign In button is overlapping the footer!').toBe(true);
      });


    });


