// --- /tests/e2e-purchase.spec.js ---
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const users = require('../test-data/users.json');

test('should allow a user to purchase a product successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const productName = 'Sauce Labs Backpack';

  // 1. Login
  await loginPage.goto();
  await loginPage.login(users.standard_user.username, users.standard_user.password);
  await expect(inventoryPage.pageTitle).toHaveText('Products');

  // 2. Add product to cart
  await inventoryPage.addProductToCart(productName);

  // 3. Go to cart and verify product
  await inventoryPage.goToCart();
  const cartItem = await cartPage.getCartItem(productName);
  await expect(cartItem).toBeVisible();

  // 4. Proceed to checkout
  await cartPage.goToCheckout();
  await expect(page).toHaveURL(/checkout-step-one\.html/);

  // 5. Fill checkout information
  await checkoutPage.fillCheckoutInfo('Test', 'User', '12345');
  await checkoutPage.continueCheckout();
  await expect(page).toHaveURL(/checkout-step-two\.html/);

  // 6. Finish purchase
  await checkoutPage.finishCheckout();
  await expect(page).toHaveURL(/checkout-complete\.html/);

  // 7. Verify confirmation message
  await expect(checkoutPage.confirmationHeader).toHaveText('Thank you for your order!');
});