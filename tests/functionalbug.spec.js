
 const testData = require('../test-data/testData.json');

 const {test, expect} = require('../fixtures/fixtures');
test.describe('academy bugs functional bug suites',()=>{

test('functional bug#2 grandtotal$morethan 100',async ({pomManager,page})=> {
const findbugspage =pomManager.getFindbugspage();
await findbugspage.navigate();
await findbugspage.selectProduct(testData.functionalBugs.productSelector);
await findbugspage.addProductToCart();
 const cart = await findbugspage.getCartDetails();
 console.log('Subtotal:',cart.subtotal,'shipping:',cart.shipping,'Grandtotal:',cart.grandTotal);
 await expect(cart.grandTotal).toContain(testData.functionalBugs.expectedGrandTotal);
console.log('Bug confirmed');
});

test('functional bug#1 product quantity cannote update more than 2',async ({pomManager,page})=> {
    const findbugspage =pomManager.getFindbugspage();
    await findbugspage.navigate();
await findbugspage.selectProduct(testData.functionalBugs.productSelector);
await findbugspage.addProductToCart();
await findbugspage.increaseQuantity(3);
await expect(findbugspage.quantityInput,'bug conformed quantity reset to 2').toHaveValue(testData.functionalBugs.targetQuantity);
console.log('BUG CONFIRMED');
});
    

test('functional bug #5 the twitter share button in the product details page is broken',async ({pomManager,page})=> {
const findbugspage =pomManager.getFindbugspage();
await findbugspage.navigate();
    await findbugspage.selectProduct(testData.functionalBugs.productSelector);
await findbugspage.clickTwitterShare();
const currentURL = page.url();
 expect(currentURL).not.toContain('twitter.com');
console.log('BUG confirmed:twittershare  is broken and did not redirect');
});
});