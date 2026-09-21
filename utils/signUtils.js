class SignUtils {
  
  constructor(page) {
    this.page = page;
    this.signInButton =page.locator("xpath=//button[normalize-space()='SIGN IN']").first(); 
    this.widgetSignInButton = page.locator("button[class='ec_login_widget_button ec-widget-login']").first();
  }

  async clickSignIn() {
    await this.page.waitForLoadState('networkidle');
    await this.signInButton.click({ force: true });
  }

  getWidgetSignInLocator() {
    return this.widgetSignInButton;
  }
  async getButtonCSSProperty(propertyName) {
    return await this.signInButton.evaluate((el, prop) => window.getComputedStyle(el)[prop], propertyName);
  }
  async verifyOverlapAndScreenshot(footerSelector, screenshotPath) {
    const btnBox = await this.signInButton.boundingBox();
    const footerBox = await this.page.locator(footerSelector).boundingBox();

    if (btnBox && footerBox) {
      console.log(`[VISUAL DETECTOR] Button Bottom: ${btnBox.y + btnBox.height} | Footer Top: ${footerBox.y}`);
      

const isOverlapping = (btnBox.y + btnBox.height) > footerBox.y;
      
      if (isOverlapping) {
        await this.page.screenshot({ path: screenshotPath, fullPage: true });
      }
      return isOverlapping;
    
  }
    return false;
}
};

module.exports = SignUtils;