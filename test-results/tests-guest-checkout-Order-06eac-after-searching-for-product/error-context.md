# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\guest-checkout.spec.ts >> Order Process >> TC-PO2: Happy Path - Guest checkout after searching for product
- Location: tests\guest-checkout.spec.ts:4:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.isChecked: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('checkbox', { name: 'Kundenkonto anlegen.' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Zum Hauptinhalt springen" [ref=e3] [cursor=pointer]:
    - /url: "#content-main"
  - banner [ref=e4]:
    - generic [ref=e5]:
      - navigation "Shop-Einstellungen" [ref=e7]:
        - button "Währung ändern (Euro ist die aktuelle Währung)" [ref=e11] [cursor=pointer]: € Euro
      - generic [ref=e12]:
        - link [ref=e15] [cursor=pointer]:
          - /url: /
          - img "Zur Startseite gehen" [ref=e17]
        - generic [ref=e24]:
          - combobox "Suchbegriff eingeben ..." [ref=e25]
          - button "Suchen" [ref=e26] [cursor=pointer]
        - generic [ref=e32]:
          - link [ref=e35] [cursor=pointer]:
            - /url: /wishlist
            - paragraph [ref=e41]: Du hast 0 Produkte auf dem Merkzettel
          - button "Ihr Konto" [ref=e45] [cursor=pointer]
          - link "Warenkorb enthält 0 Positionen. Der Gesamtwert beträgt €0.00." [ref=e51] [cursor=pointer]:
            - /url: /checkout/cart
            - generic [ref=e56]: €0.00
  - navigation "Hauptnavigation" [ref=e60]:
    - list [ref=e62]:
      - listitem [ref=e63]:
        - link "Home" [ref=e64] [cursor=pointer]:
          - /url: /
      - listitem [ref=e65]:
        - link "Clothing" [ref=e66] [cursor=pointer]:
          - /url: https://www.shopware6-demo.development-s25.com/Clothing/
      - listitem [ref=e67]:
        - link "Free time & electronics" [ref=e68] [cursor=pointer]:
          - /url: https://www.shopware6-demo.development-s25.com/Free-time-electronics/
  - main [ref=e69]:
    - generic [ref=e72]:
      - alert [ref=e73]:
        - generic [ref=e77]: Ihr Warenkorb ist leer.
      - generic [ref=e80]:
        - generic [ref=e81]: Produktnummer
        - generic [ref=e82]:
          - textbox "Produktnummer" [ref=e83]:
            - /placeholder: Produktnummer eingeben ...
          - button [ref=e84] [cursor=pointer]
  - contentinfo [ref=e88]:
    - list [ref=e90]:
      - generic [ref=e91]:
        - listitem [ref=e92]: Service-Hotline
        - listitem "Service-Hotline" [ref=e93]:
          - paragraph [ref=e95]:
            - text: "Unterstützung und Beratung unter:"
            - link "0180 - 000000" [ref=e96] [cursor=pointer]:
              - /url: tel:+49180000000
            - text: Mo-Fr, 09:00 - 17:00 Uhr
          - generic [ref=e97]:
            - text: Oder über unser
            - link "Kontaktformular" [ref=e98] [cursor=pointer]:
              - /url: /page/cms/019bf75c4a4970c290f99176ea235657
            - text: .
      - generic [ref=e99]:
        - listitem [ref=e100]:
          - link "Clothing" [ref=e101] [cursor=pointer]:
            - /url: https://www.shopware6-demo.development-s25.com/Clothing/
        - listitem "Clothing" [ref=e102]:
          - list [ref=e104]:
            - listitem [ref=e105]:
              - link "Women" [ref=e106] [cursor=pointer]:
                - /url: https://www.shopware6-demo.development-s25.com/Clothing/Women/
            - listitem [ref=e107]:
              - link "Bekleidung Sub 1" [ref=e108] [cursor=pointer]:
                - /url: https://www.shopware6-demo.development-s25.com/Clothing/Bekleidung-Sub-1/
            - listitem [ref=e109]:
              - link "Men" [ref=e110] [cursor=pointer]:
                - /url: https://www.shopware6-demo.development-s25.com/Clothing/Men/
            - listitem [ref=e111]:
              - generic [ref=e112]: Fusti
      - generic [ref=e113]:
        - listitem [ref=e114]:
          - link "Free time & electronics" [ref=e115] [cursor=pointer]:
            - /url: https://www.shopware6-demo.development-s25.com/Free-time-electronics/
        - listitem "Free time & electronics" [ref=e116]:
          - generic [ref=e117]:
            - list
    - generic [ref=e119]:
      - list [ref=e121]:
        - listitem [ref=e122]:
          - link "Clothing" [ref=e123] [cursor=pointer]:
            - /url: https://www.shopware6-demo.development-s25.com/Clothing/
        - listitem [ref=e124]:
          - link "Free time & electronics" [ref=e125] [cursor=pointer]:
            - /url: https://www.shopware6-demo.development-s25.com/Free-time-electronics/
      - paragraph [ref=e127]:
        - text: Alle Preise inkl. gesetzl. Mehrwertsteuer zzgl.
        - link "Versandkosten" [ref=e128] [cursor=pointer]:
          - /url: /page/cms/019bf75c4d447244a7c6c51eca2cf46b
        - text: und ggf. Nachnahmegebühren, wenn nicht anders angegeben.
      - generic [ref=e129]: Realisiert mit Shopware
  - generic:
    - generic:
      - button "Zurück zum Anfang der Seite springen"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Order Process', () => {
  4  |   test('TC-PO2: Happy Path - Guest checkout after searching for product', async ({ page }) => {
  5  |     // Navigate and handle optional cookie banner
  6  |     await page.goto('/checkout/register');
  7  |     const cookieBtn = page.getByRole('button', { name: 'Nur technisch notwendige' });
  8  |     if (await cookieBtn.isVisible()) {
  9  |       await cookieBtn.click();
  10 |     }
  11 | 
  12 |     // 1. Ensure Guest Checkout mode (Uncheck "Kundenkonto anlegen.")
  13 |     const createAccountCheckbox = page.getByRole('checkbox', { name: 'Kundenkonto anlegen.' });
> 14 |     if (await createAccountCheckbox.isChecked()) {
     |                                     ^ Error: locator.isChecked: Test timeout of 60000ms exceeded.
  15 |       await createAccountCheckbox.uncheck();
  16 |     }
  17 | 
  18 |     // 2. Fill Personal Information using Accessible Role Locators
  19 |     await page.getByRole('combobox', { name: 'Anrede' }).selectOption({ label: 'Mrs.' });
  20 |     await page.getByRole('textbox', { name: 'Vorname *' }).fill('Jane');
  21 |     await page.getByRole('textbox', { name: 'Nachname *' }).fill('Doe');
  22 |     await page.getByRole('textbox', { name: 'E-Mail-Adresse *' }).fill('jane.doe@example.com');
  23 | 
  24 |     // 3. Fill Address Information
  25 |     await page.getByRole('textbox', { name: 'Straße und Hausnummer *' }).fill('Musterstraße 1');
  26 |     await page.getByRole('textbox', { name: 'PLZ *' }).fill('10115');
  27 |     await page.getByRole('textbox', { name: 'Ort *' }).fill('Berlin');
  28 |     await page.getByRole('combobox', { name: 'Land *' }).selectOption({ label: 'Germany' });
  29 | 
  30 |     // 4. Submit Checkout Form
  31 |     await page.getByRole('button', { name: 'Weiter' }).click();
  32 | 
  33 |     // 5. Verify transition to payment/confirm page
  34 |     await expect(page).toHaveURL(/\/checkout\/confirm/);
  35 |   });
  36 | });
```