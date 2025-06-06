import { test, expect } from "@playwright/test";
import { fixture } from "../utils/testbase";
import { loginPage } from "../pageObjects/loginPage";
import { accountPage } from "../pageObjects/accountPage";

//runs before each test — setting up the initial page and verifying the home page is loaded
test.beforeEach(async ({ page }) => {
  //go to opencart
  await page.goto("");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Your Store/);

  // Expects the URL to contain opencart
  await expect(page).toHaveURL(/opencart/);
});

// Using a custom fixture with test data injected (from testbase)
fixture("login through UI", async ({ page, data }) => {
  const login = new loginPage(page);
  const account = new accountPage(page);

  //go to Login Page
  await login.goToLogin();

  //enter credentials and assert that account page is visible after login
  await login.login(process.env.EMAIL, process.env.PASSWORD);
  await expect(account.accountPage).toBeVisible();
});
