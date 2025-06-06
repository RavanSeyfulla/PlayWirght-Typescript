/* It defines a loginPage class that:
	•	Stores locators for login-related UI elements
	•	Has two reusable functions:
	•	goToLogin() → navigates to the login page
	•	login(email, password) → performs the login action */

import { expect, Locator, Page } from "@playwright/test";

export class loginPage {
  readonly page: Page;
 // Define locators for elements used on the login page
  readonly accountMenu: Locator;
  readonly loginMenu: Locator;
  readonly returningCust: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly submit: Locator;

  // Constructor initializes all locators
  constructor(page: Page) {
    this.page = page;
    this.accountMenu = page.locator(".list-inline .dropdown");
    this.loginMenu = page.getByRole("link", { name: "Login" });
    this.returningCust = page.locator('text="Returning Customer"');
    this.email = page.getByPlaceholder("E-Mail Address");
    this.password = page.getByPlaceholder("Password");
    this.submit = page.locator('input[type="submit"]');
  }

  // Navigates to login page and checks if it's loaded
  async goToLogin() {
    await this.page.waitForLoadState("networkidle");
    await this.accountMenu.click();
    await this.loginMenu.click();
    await expect(this.page).toHaveURL(/login/);
    await expect(this.returningCust).toBeVisible();
  }

  // Enters email/password and submits the form
  async login(email, password) {
    await this.email.type(email);
    await this.password.type(password);
    await this.submit.click();
  }
}
