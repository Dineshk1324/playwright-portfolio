// --- /pages/InventoryPage.js ---
exports.InventoryPage = class InventoryPage {
  constructor(page) {
    this.page = page;
    this.shoppingCartLink = page.locator('.shopping_cart_link');
    this.pageTitle = page.locator('.title');
  }

  async addProductToCart(productName) {
    const addButtonSelector = `[data-test="add-to-cart-${productName.toLowerCase().replace(/ /g, '-')}"]`;
    await this.page.locator(addButtonSelector).click();
  }

  async goToCart() {
    await this.shoppingCartLink.click();
  }
};