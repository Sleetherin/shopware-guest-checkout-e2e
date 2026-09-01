import { test, expect } from '@playwright/test';

test.describe('Order Process', () => {
  test('TC-PO2: Happy Path - Guest checkout after searching for product', async ({ page }) => {
    test.setTimeout(120000);

    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 60000 });

    const searchInput = page.getByPlaceholder('Suchbegriff eingeben ...');
    await searchInput.focus();
    await searchInput.fill('Westin');

    const searchResultItem = page
      .locator('.search-suggest-product-name, .search-suggest-product-link')
      .filter({ hasText: /Westin/i })
      .first();

    await searchResultItem.waitFor({ state: 'visible', timeout: 15000 });
    await searchResultItem.click();

    await expect(page).toHaveURL(/\/Westin-/i);

    await page.getByRole('button', { name: /In den Warenkorb/i }).click();

    const checkoutBtn = page
      .locator('.offcanvas a[href*="/checkout"], a.begin-checkout-btn, a[href*="/checkout/register"]')
      .first();

    try {
      await checkoutBtn.waitFor({ state: 'visible', timeout: 7000 });
      await checkoutBtn.click();
    } catch {
      await page.goto('/checkout/register', { waitUntil: 'domcontentloaded' });
    }

    await expect(page).toHaveURL(/\/checkout\/register/);

    const createAccountCheckbox = page.locator('input[name="createCustomerAccount"]');
    if ((await createAccountCheckbox.count()) > 0 && (await createAccountCheckbox.isChecked())) {
      await createAccountCheckbox.uncheck();
    }

    await page.getByLabel(/Anrede|Salutation/i).selectOption({ index: 1 });
    await page.getByLabel(/Vorname|First name/i).fill('Jonilda');
    await page.getByLabel(/Nachname|Last name/i).fill('Snow');
    await page.getByLabel(/E-Mail|Email/i).fill(`guest_${Date.now()}@example.com`);
    await page.getByLabel(/Straße|Street/i).fill('Teststraße 123');
    await page.getByLabel(/PLZ|Postal|Zip/i).fill('10115');
    await page.getByLabel(/Ort|City/i).fill('Frankfurt');
    await page.getByLabel(/Land|Country/i).selectOption({ label: /Deutschland|Germany/i });

    await page.locator('form[action*="/checkout/register"] button[type="submit"], .register-submit button, button[type="submit"].btn-primary').first().click();

    await expect(page).toHaveURL(/\/checkout\/confirm/);

    const cashOnDelivery = page.locator('label', { hasText: /Nachnahme|Cash on delivery/i }).first();
    if (await cashOnDelivery.isVisible()) {
      await cashOnDelivery.click();
    }

    await page.locator('input[name="tos"], #tos').check({ force: true });

    await page.locator('#confirmFormSubmit').click();

    await expect(page).toHaveURL(/\/checkout\/finish/);

    await expect(page.locator('.finish-header, .checkout-finish-header')).toBeVisible();
    await expect(page.getByText(/Bestellnummer|Order number/i)).toBeVisible();

    await expect(page.getByRole('link', { name: /Warenkorb enthält 0|0 Positionen/i })).toBeVisible();
  });
});