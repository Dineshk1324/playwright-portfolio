// --- /pages/CartPage.js ---
exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async getCartItem(productName) {
    return this.page.locator('.cart_item', { hasText: productName });
  }

  async goToCheckout() {
    await this.checkoutButton.click();
  }
};