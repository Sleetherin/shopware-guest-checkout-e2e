import { test, expect } from '@playwright/test';

test.describe('Order Process', () => {
  test('TC-PO2: Happy Path - Guest checkout after searching for product', async ({ page }) => {
    // Navigate and handle optional cookie banner
    await page.goto('/checkout/register');
    const cookieBtn = page.getByRole('button', { name: 'Nur technisch notwendige' });
    if (await cookieBtn.isVisible()) {
      await cookieBtn.click();
    }

    // 1. Ensure Guest Checkout mode (Uncheck "Kundenkonto anlegen.")
    const createAccountCheckbox = page.getByRole('checkbox', { name: 'Kundenkonto anlegen.' });
    if (await createAccountCheckbox.isChecked()) {
      await createAccountCheckbox.uncheck();
    }

    // 2. Fill Personal Information using Accessible Role Locators
    await page.getByRole('combobox', { name: 'Anrede' }).selectOption({ label: 'Mrs.' });
    await page.getByRole('textbox', { name: 'Vorname *' }).fill('Jane');
    await page.getByRole('textbox', { name: 'Nachname *' }).fill('Doe');
    await page.getByRole('textbox', { name: 'E-Mail-Adresse *' }).fill('jane.doe@example.com');

    // 3. Fill Address Information
    await page.getByRole('textbox', { name: 'Straße und Hausnummer *' }).fill('Musterstraße 1');
    await page.getByRole('textbox', { name: 'PLZ *' }).fill('10115');
    await page.getByRole('textbox', { name: 'Ort *' }).fill('Berlin');
    await page.getByRole('combobox', { name: 'Land *' }).selectOption({ label: 'Germany' });

    // 4. Submit Checkout Form
    await page.getByRole('button', { name: 'Weiter' }).click();

    // 5. Verify transition to payment/confirm page
    await expect(page).toHaveURL(/\/checkout\/confirm/);
  });
});