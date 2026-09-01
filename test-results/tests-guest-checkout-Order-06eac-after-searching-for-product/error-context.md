# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\guest-checkout.spec.ts >> Order Process >> TC-PO2: Happy Path - Guest checkout after searching for product
- Location: tests\guest-checkout.spec.ts:4:7

# Error details

```
Error: locator.selectOption: Error: strict mode violation: getByLabel(/Anrede|Salutation/i) resolved to 2 elements:
    1) <select class="form-select" name="salutationId" id="personalSalutation" aria-describedby="personalSalutation-feedback" autocomplete="section-personal honorific-prefix">…</select> aka getByRole('group', { name: 'Persönliche Informationen' }).getByLabel('Anrede')
    2) <select class="form-select" name="shippingAddress[salutationId]" id="shippingAddresspersonalSalutation" autocomplete="section-personal honorific-prefix" aria-describedby="shippingAddresspersonalSalutation-feedback">…</select> aka locator('#shippingAddresspersonalSalutation')

Call log:
  - waiting for getByLabel(/Anrede|Salutation/i)

```

# Page snapshot

```yaml
- generic [active] [ref=f2e1]:
  - link "Zum Hauptinhalt springen" [ref=f2e3] [cursor=pointer]:
    - /url: "#content-main"
  - banner [ref=f2e4]:
    - generic [ref=f2e6]:
      - link [ref=f2e9] [cursor=pointer]:
        - /url: /
        - img "Zur Startseite gehen" [ref=f2e11]
      - generic [ref=f2e12]:
        - strong [ref=f2e13]: Fragen zu Ihrer Bestellung?
        - strong [ref=f2e14]:
          - link "12345-123456789" [ref=f2e15] [cursor=pointer]:
            - /url: tel:+4912345123456789
        - text: Täglich 7:30 bis 22:00 Uhr
      - link "Zurück zum Shop" [ref=f2e17] [cursor=pointer]:
        - /url: /
  - main [ref=f2e19]:
    - generic [ref=f2e23]:
      - generic [ref=f2e24]:
        - heading "Versandinformationen" [level=1] [ref=f2e25]
        - link [ref=f2e30] [cursor=pointer]:
          - /url: "#loginCollapse"
          - strong [ref=f2e31]: Sie sind bereits Kunde? Klicken Sie hier, um sich einzuloggen.
        - generic [ref=f2e33]:
          - heading "Persönliche Informationen" [level=2] [ref=f2e34]
          - generic [ref=f2e35]:
            - group "Persönliche Informationen" [ref=f2e36]:
              - generic [ref=f2e39]:
                - generic [ref=f2e40]: Anrede
                - combobox "Anrede" [ref=f2e41]:
                  - option "Not specified" [selected]
                  - option "Mrs."
                  - option "Mr."
              - generic [ref=f2e42]:
                - generic [ref=f2e43]:
                  - generic [ref=f2e44]: Vorname *
                  - textbox "Vorname" [ref=f2e45]
                - generic [ref=f2e46]:
                  - generic [ref=f2e47]: Nachname *
                  - textbox "Nachname" [ref=f2e48]
              - generic [ref=f2e49]:
                - checkbox "Kundenkonto anlegen." [ref=f2e50]
                - generic [ref=f2e51]: Kundenkonto anlegen.
              - generic [ref=f2e53]:
                - generic [ref=f2e54]: E-Mail-Adresse *
                - textbox "E-Mail-Adresse" [ref=f2e55]
            - generic [ref=f2e56]:
              - group "Ihre Adresse" [ref=f2e57]:
                - generic [ref=f2e59]:
                  - generic [ref=f2e60]:
                    - generic [ref=f2e61]: Straße und Hausnummer *
                    - textbox "Straße und Hausnummer" [ref=f2e62]
                  - generic [ref=f2e63]:
                    - generic [ref=f2e64]: PLZ *
                    - textbox "PLZ" [ref=f2e65]
                  - generic [ref=f2e66]:
                    - generic [ref=f2e67]: Ort *
                    - textbox "Ort" [ref=f2e68]
                - generic [ref=f2e70]:
                  - generic [ref=f2e71]: Land *
                  - combobox "Land" [ref=f2e72]:
                    - option "Germany" [selected]
              - generic [ref=f2e74]:
                - checkbox "Lieferadresse weicht von Rechnungsadresse ab." [ref=f2e75]
                - generic [ref=f2e76]: Lieferadresse weicht von Rechnungsadresse ab.
            - group [ref=f2e77]:
              - strong [ref=f2e79]: Datenschutz
              - generic [ref=f2e81]:
                - text: Ich habe die
                - button "Datenschutzbestimmungen" [ref=f2e82] [cursor=pointer]
                - text: zur Kenntnis genommen und die
                - button "AGB" [ref=f2e83] [cursor=pointer]
                - text: gelesen und bin mit ihnen einverstanden.
            - paragraph [ref=f2e84]: Die mit einem Stern (*) markierten Felder sind Pflichtfelder.
            - button "Weiter" [ref=f2e86] [cursor=pointer]
      - generic [ref=f2e88]:
        - generic [ref=f2e89]:
          - heading "Zusammenfassung" [level=2] [ref=f2e90]
          - generic [ref=f2e92]:
            - alert [ref=f2e93]: Warenkorb enthält eine Position. Der Gesamtwert beträgt €10.00.
            - generic [ref=f2e94]:
              - term [ref=f2e95]: Zwischensumme
              - definition [ref=f2e96]: €10.00
              - term [ref=f2e97]: Versandkosten
              - definition [ref=f2e98]: €0.00
              - term [ref=f2e99]: Gesamtsumme
              - definition [ref=f2e100]: €10.00
              - term [ref=f2e101]: Gesamtnettosumme
              - definition [ref=f2e102]: €8.40
              - term [ref=f2e103]: zzgl. 19 % MwSt.
              - definition [ref=f2e104]: €1.60
        - generic [ref=f2e105]:
          - heading "Warenkorb" [level=2] [ref=f2e106]
          - list [ref=f2e107]:
            - listitem [ref=f2e108]:
              - generic [ref=f2e109]:
                - generic [ref=f2e111]:
                  - link [ref=f2e114] [cursor=pointer]:
                    - /url: https://www.shopware6-demo.development-s25.com/Westin-Test-12cm/SW10003.5
                    - img "Westin Test 12cm" [ref=f2e115]
                  - generic [ref=f2e117]:
                    - generic [ref=f2e118]: "Produkt-Informationen:"
                    - link "Westin Test 12cm" [ref=f2e119] [cursor=pointer]:
                      - /url: https://www.shopware6-demo.development-s25.com/Westin-Test-12cm/SW10003.5
                    - generic [ref=f2e120]: "Colour: Blue | Size: M"
                    - generic [ref=f2e121]: "Produkt-Nr.: SW10003.5"
                    - generic [ref=f2e122]: "Lieferzeitraum: 02.09.26 - 04.09.26"
                    - button "Zum Merkzettel hinzufügen" [ref=f2e124] [cursor=pointer]
                - generic [ref=f2e130]:
                  - generic [ref=f2e131]: Anzahl
                  - generic [ref=f2e132]: "1"
                - generic [ref=f2e134]:
                  - generic [ref=f2e135]: "Summe:"
                  - generic [ref=f2e136]: €10.00
                - button "Entferne Westin Test 12cm aus dem Warenkorb" [ref=f2e139] [cursor=pointer]
  - contentinfo [ref=f2e143]:
    - generic [ref=f2e144]:
      - list [ref=f2e146]:
        - listitem [ref=f2e147]:
          - link "Clothing" [ref=f2e148] [cursor=pointer]:
            - /url: https://www.shopware6-demo.development-s25.com/Clothing/
        - listitem [ref=f2e149]:
          - link "Free time & electronics" [ref=f2e150] [cursor=pointer]:
            - /url: https://www.shopware6-demo.development-s25.com/Free-time-electronics/
      - paragraph [ref=f2e152]:
        - text: Alle Preise inkl. gesetzl. Mehrwertsteuer zzgl.
        - link "Versandkosten" [ref=f2e153] [cursor=pointer]:
          - /url: /page/cms/019bf75c4d447244a7c6c51eca2cf46b
        - text: und ggf. Nachnahmegebühren, wenn nicht anders angegeben.
      - generic [ref=f2e154]: Realisiert mit Shopware
  - generic:
    - generic:
      - button "Zurück zum Anfang der Seite springen"
  - region "Cookie-Voreinstellungen" [ref=f2e158]:
    - generic [ref=f2e160]:
      - generic [ref=f2e161]:
        - text: Diese Website verwendet Cookies, um eine bestmögliche Erfahrung bieten zu können.
        - link "Mehr Informationen ..." [ref=f2e162] [cursor=pointer]:
          - /url: /page/cms/019bf75c4d4d7096bb2ff4223748560d
      - generic [ref=f2e163]:
        - button "Nur technisch notwendige" [ref=f2e165] [cursor=pointer]
        - button "Konfigurieren" [ref=f2e167] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Order Process', () => {
  4  |   test('TC-PO2: Happy Path - Guest checkout after searching for product', async ({ page }) => {
  5  |     test.setTimeout(120000);
  6  | 
  7  |     await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  8  | 
  9  |     const searchInput = page.getByPlaceholder('Suchbegriff eingeben ...');
  10 |     await searchInput.focus();
  11 |     await searchInput.fill('Westin');
  12 | 
  13 |     const searchResultItem = page
  14 |       .locator('.search-suggest-product-name, .search-suggest-product-link')
  15 |       .filter({ hasText: /Westin/i })
  16 |       .first();
  17 | 
  18 |     await searchResultItem.waitFor({ state: 'visible', timeout: 15000 });
  19 |     await searchResultItem.click();
  20 | 
  21 |     await expect(page).toHaveURL(/\/Westin-/i);
  22 | 
  23 |     await page.getByRole('button', { name: /In den Warenkorb/i }).click();
  24 | 
  25 |     const checkoutBtn = page
  26 |       .locator('.offcanvas a[href*="/checkout"], a.begin-checkout-btn, a[href*="/checkout/register"]')
  27 |       .first();
  28 | 
  29 |     try {
  30 |       await checkoutBtn.waitFor({ state: 'visible', timeout: 7000 });
  31 |       await checkoutBtn.click();
  32 |     } catch {
  33 |       await page.goto('/checkout/register', { waitUntil: 'domcontentloaded' });
  34 |     }
  35 | 
  36 |     await expect(page).toHaveURL(/\/checkout\/register/);
  37 | 
  38 |     const createAccountCheckbox = page.locator('input[name="createCustomerAccount"]');
  39 |     if ((await createAccountCheckbox.count()) > 0 && (await createAccountCheckbox.isChecked())) {
  40 |       await createAccountCheckbox.uncheck();
  41 |     }
  42 | 
> 43 |     await page.getByLabel(/Anrede|Salutation/i).selectOption({ index: 1 });
     |                                                 ^ Error: locator.selectOption: Error: strict mode violation: getByLabel(/Anrede|Salutation/i) resolved to 2 elements:
  44 |     await page.getByLabel(/Vorname|First name/i).fill('Jonilda');
  45 |     await page.getByLabel(/Nachname|Last name/i).fill('Snow');
  46 |     await page.getByLabel(/E-Mail|Email/i).fill(`guest_${Date.now()}@example.com`);
  47 |     await page.getByLabel(/Straße|Street/i).fill('Teststraße 123');
  48 |     await page.getByLabel(/PLZ|Postal|Zip/i).fill('10115');
  49 |     await page.getByLabel(/Ort|City/i).fill('Frankfurt');
  50 |     await page.getByLabel(/Land|Country/i).selectOption({ label: /Deutschland|Germany/i });
  51 | 
  52 |     await page.locator('form[action*="/checkout/register"] button[type="submit"], .register-submit button, button[type="submit"].btn-primary').first().click();
  53 | 
  54 |     await expect(page).toHaveURL(/\/checkout\/confirm/);
  55 | 
  56 |     const cashOnDelivery = page.locator('label', { hasText: /Nachnahme|Cash on delivery/i }).first();
  57 |     if (await cashOnDelivery.isVisible()) {
  58 |       await cashOnDelivery.click();
  59 |     }
  60 | 
  61 |     await page.locator('input[name="tos"], #tos').check({ force: true });
  62 | 
  63 |     await page.locator('#confirmFormSubmit').click();
  64 | 
  65 |     await expect(page).toHaveURL(/\/checkout\/finish/);
  66 | 
  67 |     await expect(page.locator('.finish-header, .checkout-finish-header')).toBeVisible();
  68 |     await expect(page.getByText(/Bestellnummer|Order number/i)).toBeVisible();
  69 | 
  70 |     await expect(page.getByRole('link', { name: /Warenkorb enthält 0|0 Positionen/i })).toBeVisible();
  71 |   });
  72 | });
```