const { expect } = require('@playwright/test');
class Findbugspage{

    constructor(page){
        this.page=page;
       this.pageHeading= page.getByRole('heading',{name: 'Find Bugs'})
    //functionalbug   
  this.addToCartButton= page.getByRole('button',{name:'ADD TO CART'})
this.subtotalLocator =  page.locator("#ec_cart_subtotal");
    this.shippingLocator = page.locator("#ec_cart_shipping");
    this. grandTotalLocator = page.locator("#ec_cart_total");
    this.plusButton = page.locator('.ec_plus');
    this.updateButton = page.locator(".ec_cartitem_update_button");
    this.quantityInput=page.locator('.ec_quantity');
    this.twitterIcon = page.getByRole('img',{name:'X'});
//contentbug
this.descriptionLocator = page.locator('.ec_details_description.academy-bug');
this.cartDelete = page.locator('.ec_cartitem_delete');


//crashbug
this.view10Link = page.getByRole('link',{name:'10'}).first();
this.currencySelect = page.locator("#ec_currency_conversion")
this.commentInput =  page.locator("#comment");
this.authorInput= page.locator("#author");
this.emailInput = page.locator("#email");
this.urlInput = page.locator("#url");
this.postCommentButton = page.getByRole('button',{name:'Post Comment'});
this.pinkBoxButton =page.locator('[title="Pink"]');

this.crashMessageLocator = (message) => this.page.getByText(message);
    }
async navigate(){
    await this.page.goto('/find-bugs/');
}
async selectProduct(productSelector){
await this.page.locator(productSelector).click();
}
async addProductToCart(){
   await this.addToCartButton .click();
}
async getCartDetails(){
    const subtotal = await this.subtotalLocator.textContent();
    const shipping = await this.shippingLocator.textContent();
    const grandTotal = await this.grandTotalLocator.textContent();
    return { subtotal, shipping, grandTotal };
}
async increaseQuantity(times) {
    for (let i = 0; i < times; i++) {
      await this.plusButton.click();
      await this.page.waitForTimeout(200);
    }
    await this.updateButton.click();
}
async clickTwitterShare() {
    await this.twitterIcon.click();
  }
  async getProductDescription() {
    return await this.descriptionLocator.textContent();
  }

  async deleteItemFromCart() {
    await this.cartDelete.click();
  }
  getReturnToStoreLocator(expectedText) {
    return this.page.getByText(expectedText, { exact: true });
  }
  getRussianTextLocator(regexPattern) {
    return this.page.getByText(new RegExp(regexPattern));
  }
  getCrashAlert(message) {
    return this.crashMessageLocator(message);
  }
async clickView10() {
    await this.view10Link.click({ delay: 5000 });
  }

  async changeCurrency(currency) {
    await this.currencySelect.selectOption({ value: currency });
  }
  async submitComment(commentObj) {
    await this.commentInput.fill(commentObj.comment);
    await this.authorInput.fill(commentObj.author);
    await this.emailInput.fill(commentObj.email);
    await this.urlInput.fill(commentObj.url);
    await this.postCommentButton.click();
  }

  async selectPinkAndIncreaseQuantity() {
    await this.pinkBoxButton.click();
    await expect(this.quantityInput).toHaveValue('1');
    await this.plusButton.click();
  }
}
module.exports=Findbugspage;