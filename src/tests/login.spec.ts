import { test, expect } from '../fixtures/fixture';
import { VALID_USERS } from '../data/credentials';

test.describe('Login funcitonality', () => {

  for (const user of VALID_USERS) {
    test(`Success login as: ${user.id}`, async ({ loginPage, page }) => {

      // --- GIVEN ---
      await test.step('GIVEN: user navigates to loginpage', async () => {
        await loginPage.goto();
      });

      // --- WHEN ---
      await test.step('WHEN: user types username and password', async () => {
        // Aquí idealmente usaríamos un POM (Page Object Model), lo haremos en el sig paso
        await loginPage.login('standard_user', 'secret_sauce');

      });

      // --- THEN ---
      await test.step('THEN: user should be redirected to inventory page', async () => {
        loginPage.assertDasboardVisible();
        await expect(page).toHaveTitle('Swag Labs');
      });
    });
  }



});