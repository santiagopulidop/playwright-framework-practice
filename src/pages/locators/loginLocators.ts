import { Locator, Page, expect } from "@playwright/test";

export class LoginLocators {

    constructor(private page: Page) {
    }

    get usernameInput(): Locator {
        return this.page.locator('[data-test="username"]');
    }

    get passwordInput(): Locator {
        return this.page.locator('[data-test="password"]');
    }

    get loginButton(): Locator {
        return this.page.locator('[data-test="login-button"]');
    }

    get productsTitle(): Locator {
        return this.page.locator('.title');
    }

}