
    const testData = require('../test-data/testData.json');

 const {test, expect} = require('../fixtures/fixtures');
test.describe('academy bugs functional bug suites',()=>{
    
 test('content bug#13 the short description and description of the product are not in English',async({ pomManager,page})=>{
const findbugspage =pomManager.getFindbugspage();
await findbugspage.navigate();
    
    await findbugspage.selectProduct(testData.contentBugs.productSelector);
const descriptionText = await findbugspage.getProductDescription();

console.log('Prduct Description Text extracted:',descriptionText);
await expect(descriptionText,'BUGCONFIRMED!latin text instead of English').not.toContain(testData.contentBugs.latinText);
console.log('Bug conformed latin text instead  of english');
});
test('content bug#15 here is big space before the last letter in "Return to Store',async({pomManager,page})=>{
 const findbugspage =pomManager.getFindbugspage();
 await findbugspage.navigate();
    
    await findbugspage.selectProduct(testData.contentBugs.productSelector);
await findbugspage.addProductToCart();
    await findbugspage.deleteItemFromCart();
const returnButton = findbugspage.getReturnToStoreLocator(testData.contentBugs.returnToStoreText);
await expect(returnButton,'BUG CONFIRMED').toBeVisible();
});

});