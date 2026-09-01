import { test, expect } from '@playwright/test';

test.describe('Order Process', () => {
  test('TC-PO2: Happy Path - Guest checkout after searching for product', async ({ page }) => {
    await page.goto('/');

    const searchInput = page.getByPlaceholder('Suchbegriff eingeben ...');
    await searchInput.focus();
    await searchInput.fill('Westin');

    const searchResultItem = page.locator('.search-suggest-product-name, .search-suggest-product-link')
      .filter({ hasText: /Westin/i })
      .first();

    await searchResultItem.waitFor({ state: 'visible', timeout: 15000 });
    await searchResultItem.click();

    await expect(page).toHaveURL(/\/Westin-/i);

    const addToCartBtn = page.locator('button.btn-buy, button:has-text("In den Warenkorb")').first();
    await addToCartBtn.click();

    const checkoutBtn = page.locator('.offcanvas a[href*="/checkout"], a.begin-checkout-btn, a[href*="/checkout/register"]').first();

    try {
      await checkoutBtn.waitFor({ state: 'visible', timeout: 7000 });
      await checkoutBtn.click();
    } catch {
      await page.goto('/checkout/register');
    }

    await expect(page).toHaveURL(/\/checkout\/register/);

    // Target the registration container specifically to avoid collision with returning customer login inputs
    const registerForm = page.locator('form[action*="/checkout/register"], .register-form, #registerForm').first();

    // Ensure guest registration radio/checkbox is active if present
    const createAccountCheckbox = registerForm.locator('input[name="createCustomerAccount"]');
    if (await createAccountCheckbox.count() > 0 && await createAccountCheckbox.isChecked()) {
      await createAccountCheckbox.uncheck();
    }

    // Fill registration form fields explicitly inside the register form
    await registerForm.locator('select[name="salutationId"]').first().selectOption({ index: 1 });
    await registerForm.locator('#personalFirstName, input[name="firstName"]').first().fill('Jonilda');
    await registerForm.locator('#personalLastName, input[name="lastName"]').first().fill('Snow');
    await registerForm.locator('#personalMail, input[name="email"]').first().fill(`guest_${Date.now()}@example.com`);

    await registerForm.locator('#billingAddressAddressStreet, input[name="billingAddress[street]"]').first().fill('Teststraße 123');
    await registerForm.locator('#billingAddressAddressZipcode, input[name="billingAddress[zipcode]"]').first().fill('10115');
    await registerForm.locator('#billingAddressAddressCity, input[name="billingAddress[city]"]').first().fill('Frankfurt');
    await registerForm.locator('select[name="billingAddress[countryId]"]').first().selectOption({ label: 'Deutschland' });

    const submitRegisterBtn = registerForm.locator('button[type="submit"].btn-primary').first();
    await submitRegisterBtn.click();

    await expect(page).toHaveURL(/\/checkout\/confirm/);

    const cashOnDelivery = page.locator('label', { hasText: /Nachnahme|Cash on delivery/i }).first();
    if (await cashOnDelivery.isVisible()) {
      await cashOnDelivery.click();
    }

    const tosCheckbox = page.locator('input[name="tos"], #tos');
    await tosCheckbox.check({ force: true });

    const submitOrderBtn = page.locator('#confirmFormSubmit');
    await submitOrderBtn.click();

    await expect(page).toHaveURL(/\/checkout\/finish/);

    const finishHeader = page.locator('.finish-header, .checkout-finish-header');
    await expect(finishHeader).toBeVisible();

    const orderNumberText = page.locator('.finish-ordernumber, .checkout-aside-summary-value');
    await expect(orderNumberText).toContainText(/Bestellnummer|Order number/i);

    const cartBadge = page.locator('.header-cart-total');
    await expect(cartBadge).toHaveText(/0/);
  });
});