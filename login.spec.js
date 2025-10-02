/*import { test,expect } from '@playwright/test';
/*
test.use({
  viewport: { width: 1600, height: 1200 },
});
*/
/*
test('Locators', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.fill('input[name="username"]', 'student');
   await page.fill('input[name="password"]', 'Password123');
    await page.getByRole('button', { name: 'submit' }).click();
    await expect(page).toHaveURL(/.*\/logged-in-successfully/);
});
*/

// --- /tests/login.spec.js ---
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const users = require('../test-data/users.json');

test.describe('Login Functionality', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('should allow a standard user to log in successfully', async ({ page }) => {
    await loginPage.login(users.standard_user.username, users.standard_user.password);
    await expect(page).toHaveURL('/inventory.html');
  });

  test('should show an error message for a locked out user', async () => {
    await loginPage.login(users.locked_out_user.username, users.locked_out_user.password);
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out.');
  });
});