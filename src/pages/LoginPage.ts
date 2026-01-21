import { LoginLocators } from "./locators/loginLocators"
import { type Page, expect } from '@playwright/test';

export class LoginPage {
    private locators: LoginLocators;
    private page: Page;

    constructor(page:Page){
        this.page = page;
        this.locators = new LoginLocators(page);
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username: string, password: string){
        await this.locators.usernameInput.fill(username);
        await this.locators.passwordInput.fill(password);
        await this.locators.loginButton.click();
    }

    async assertDasboardVisible(){
        await expect(this.locators.productsTitle).toHaveText('Products');
        await expect(this.page).toHaveURL(/.*inventory.html/);
    }
}