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
Error: locator.fill: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('form[action*="/checkout/register"], .register-form, #registerForm').first().locator('#personalFirstName, input[name="firstName"]').first()

```

# Page snapshot

```yaml
- generic [active] [ref=f3e1]:
  - link "Zum Hauptinhalt springen" [ref=f3e3] [cursor=pointer]:
    - /url: "#content-main"
  - banner [ref=f3e4]:
    - generic [ref=f3e6]:
      - link [ref=f3e9] [cursor=pointer]:
        - /url: /
        - img "Zur Startseite gehen" [ref=f3e11]
      - generic [ref=f3e12]:
        - strong [ref=f3e13]: Fragen zu Ihrer Bestellung?
        - strong [ref=f3e14]:
          - link "12345-123456789" [ref=f3e15] [cursor=pointer]:
            - /url: tel:+4912345123456789
        - text: Täglich 7:30 bis 22:00 Uhr
      - link "Zurück zum Shop" [ref=f3e17] [cursor=pointer]:
        - /url: /
  - main [ref=f3e19]:
    - generic [ref=f3e23]:
      - generic [ref=f3e24]:
        - heading "Versandinformationen" [level=1] [ref=f3e25]
        - link [ref=f3e30] [cursor=pointer]:
          - /url: "#loginCollapse"
          - strong [ref=f3e31]: Sie sind bereits Kunde? Klicken Sie hier, um sich einzuloggen.
        - generic [ref=f3e33]:
          - heading "Persönliche Informationen" [level=2] [ref=f3e34]
          - generic [ref=f3e35]:
            - group "Persönliche Informationen" [ref=f3e36]:
              - generic [ref=f3e39]:
                - generic [ref=f3e40]: Anrede
                - combobox "Anrede" [ref=f3e41]:
                  - option "Not specified"
                  - option "Mrs." [selected]
                  - option "Mr."
              - generic [ref=f3e42]:
                - generic [ref=f3e43]:
                  - generic [ref=f3e44]: Vorname *
                  - textbox "Vorname" [ref=f3e45]
                - generic [ref=f3e46]:
                  - generic [ref=f3e47]: Nachname *
                  - textbox "Nachname" [ref=f3e48]
              - generic [ref=f3e49]:
                - checkbox "Kundenkonto anlegen." [ref=f3e50]
                - generic [ref=f3e51]: Kundenkonto anlegen.
              - generic [ref=f3e53]:
                - generic [ref=f3e54]: E-Mail-Adresse *
                - textbox "E-Mail-Adresse" [ref=f3e55]
            - generic [ref=f3e56]:
              - group "Ihre Adresse" [ref=f3e57]:
                - generic [ref=f3e59]:
                  - generic [ref=f3e60]:
                    - generic [ref=f3e61]: Straße und Hausnummer *
                    - textbox "Straße und Hausnummer" [ref=f3e62]
                  - generic [ref=f3e63]:
                    - generic [ref=f3e64]: PLZ *
                    - textbox "PLZ" [ref=f3e65]
                  - generic [ref=f3e66]:
                    - generic [ref=f3e67]: Ort *
                    - textbox "Ort" [ref=f3e68]
                - generic [ref=f3e69]:
                  - generic [ref=f3e70]:
                    - generic [ref=f3e71]: Land *
                    - combobox "Land" [ref=f3e72]:
                      - option "Germany" [selected]
                  - generic [ref=f3e73]:
                    - generic [ref=f3e74]: Bundesland
                    - combobox "Bundesland" [ref=f3e75]:
                      - option "Bundesland auswählen ..." [selected]
                      - option "Baden-Württemberg"
                      - option "Bavaria"
                      - option "Berlin"
                      - option "Brandenburg"
                      - option "Bremen"
                      - option "Hamburg"
                      - option "Hesse"
                      - option "Lower Saxony"
                      - option "Mecklenburg-Western Pomerania"
                      - option "North Rhine-Westphalia"
                      - option "Rhineland-Palatinate"
                      - option "Saarland"
                      - option "Saxony"
                      - option "Saxony-Anhalt"
                      - option "Schleswig-Holstein"
                      - option "Thuringia"
              - generic [ref=f3e77]:
                - checkbox "Lieferadresse weicht von Rechnungsadresse ab." [ref=f3e78]
                - generic [ref=f3e79]: Lieferadresse weicht von Rechnungsadresse ab.
            - group [ref=f3e80]:
              - strong [ref=f3e82]: Datenschutz
              - generic [ref=f3e84]:
                - text: Ich habe die
                - button "Datenschutzbestimmungen" [ref=f3e85] [cursor=pointer]
                - text: zur Kenntnis genommen und die
                - button "AGB" [ref=f3e86] [cursor=pointer]
                - text: gelesen und bin mit ihnen einverstanden.
            - paragraph [ref=f3e87]: Die mit einem Stern (*) markierten Felder sind Pflichtfelder.
            - button "Weiter" [ref=f3e89] [cursor=pointer]
      - generic [ref=f3e91]:
        - generic [ref=f3e92]:
          - heading "Zusammenfassung" [level=2] [ref=f3e93]
          - generic [ref=f3e95]:
            - alert [ref=f3e96]: Warenkorb enthält eine Position. Der Gesamtwert beträgt €10.00.
            - generic [ref=f3e97]:
              - term [ref=f3e98]: Zwischensumme
              - definition [ref=f3e99]: €10.00
              - term [ref=f3e100]: Versandkosten
              - definition [ref=f3e101]: €0.00
              - term [ref=f3e102]: Gesamtsumme
              - definition [ref=f3e103]: €10.00
              - term [ref=f3e104]: Gesamtnettosumme
              - definition [ref=f3e105]: €8.40
              - term [ref=f3e106]: zzgl. 19 % MwSt.
              - definition [ref=f3e107]: €1.60
        - generic [ref=f3e108]:
          - heading "Warenkorb" [level=2] [ref=f3e109]
          - list [ref=f3e110]:
            - listitem [ref=f3e111]:
              - generic [ref=f3e112]:
                - generic [ref=f3e114]:
                  - link [ref=f3e117] [cursor=pointer]:
                    - /url: https://www.shopware6-demo.development-s25.com/Westin-Test-12cm/SW10003.5
                    - img "Westin Test 12cm" [ref=f3e118]
                  - generic [ref=f3e120]:
                    - generic [ref=f3e121]: "Produkt-Informationen:"
                    - link "Westin Test 12cm" [ref=f3e122] [cursor=pointer]:
                      - /url: https://www.shopware6-demo.development-s25.com/Westin-Test-12cm/SW10003.5
                    - generic [ref=f3e123]: "Colour: Blue | Size: M"
                    - generic [ref=f3e124]: "Produkt-Nr.: SW10003.5"
                    - generic [ref=f3e125]: "Lieferzeitraum: 02.09.26 - 04.09.26"
                    - button "Zum Merkzettel hinzufügen" [ref=f3e127] [cursor=pointer]
                - generic [ref=f3e133]:
                  - generic [ref=f3e134]: Anzahl
                  - generic [ref=f3e135]: "1"
                - generic [ref=f3e137]:
                  - generic [ref=f3e138]: "Summe:"
                  - generic [ref=f3e139]: €10.00
                - button "Entferne Westin Test 12cm aus dem Warenkorb" [ref=f3e142] [cursor=pointer]
  - contentinfo [ref=f3e146]:
    - generic [ref=f3e147]:
      - list [ref=f3e149]:
        - listitem [ref=f3e150]:
          - link "Clothing" [ref=f3e151] [cursor=pointer]:
            - /url: https://www.shopware6-demo.development-s25.com/Clothing/
        - listitem [ref=f3e152]:
          - link "Free time & electronics" [ref=f3e153] [cursor=pointer]:
            - /url: https://www.shopware6-demo.development-s25.com/Free-time-electronics/
      - paragraph [ref=f3e155]:
        - text: Alle Preise inkl. gesetzl. Mehrwertsteuer zzgl.
        - link "Versandkosten" [ref=f3e156] [cursor=pointer]:
          - /url: /page/cms/019bf75c4d447244a7c6c51eca2cf46b
        - text: und ggf. Nachnahmegebühren, wenn nicht anders angegeben.
      - generic [ref=f3e157]: Realisiert mit Shopware
  - generic:
    - generic:
      - button "Zurück zum Anfang der Seite springen"
  - region "Cookie-Voreinstellungen" [ref=f3e161]:
    - generic [ref=f3e163]:
      - generic [ref=f3e164]:
        - text: Diese Website verwendet Cookies, um eine bestmögliche Erfahrung bieten zu können.
        - link "Mehr Informationen ..." [ref=f3e165] [cursor=pointer]:
          - /url: /page/cms/019bf75c4d4d7096bb2ff4223748560d
      - generic [ref=f3e166]:
        - button "Nur technisch notwendige" [ref=f3e168] [cursor=pointer]
        - button "Konfigurieren" [ref=f3e170] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Order Process', () => {
  4  |   test('TC-PO2: Happy Path - Guest checkout after searching for product', async ({ page }) => {
  5  |     await page.goto('/');
  6  | 
  7  |     const searchInput = page.getByPlaceholder('Suchbegriff eingeben ...');
  8  |     await searchInput.focus();
  9  |     await searchInput.fill('Westin');
  10 | 
  11 |     const searchResultItem = page.locator('.search-suggest-product-name, .search-suggest-product-link')
  12 |       .filter({ hasText: /Westin/i })
  13 |       .first();
  14 | 
  15 |     await searchResultItem.waitFor({ state: 'visible', timeout: 15000 });
  16 |     await searchResultItem.click();
  17 | 
  18 |     await expect(page).toHaveURL(/\/Westin-/i);
  19 | 
  20 |     const addToCartBtn = page.locator('button.btn-buy, button:has-text("In den Warenkorb")').first();
  21 |     await addToCartBtn.click();
  22 | 
  23 |     const checkoutBtn = page.locator('.offcanvas a[href*="/checkout"], a.begin-checkout-btn, a[href*="/checkout/register"]').first();
  24 | 
  25 |     try {
  26 |       await checkoutBtn.waitFor({ state: 'visible', timeout: 7000 });
  27 |       await checkoutBtn.click();
  28 |     } catch {
  29 |       await page.goto('/checkout/register');
  30 |     }
  31 | 
  32 |     await expect(page).toHaveURL(/\/checkout\/register/);
  33 | 
  34 |     // Target the registration container specifically to avoid collision with returning customer login inputs
  35 |     const registerForm = page.locator('form[action*="/checkout/register"], .register-form, #registerForm').first();
  36 | 
  37 |     // Ensure guest registration radio/checkbox is active if present
  38 |     const createAccountCheckbox = registerForm.locator('input[name="createCustomerAccount"]');
  39 |     if (await createAccountCheckbox.count() > 0 && await createAccountCheckbox.isChecked()) {
  40 |       await createAccountCheckbox.uncheck();
  41 |     }
  42 | 
  43 |     // Fill registration form fields explicitly inside the register form
  44 |     await registerForm.locator('select[name="salutationId"]').first().selectOption({ index: 1 });
> 45 |     await registerForm.locator('#personalFirstName, input[name="firstName"]').first().fill('Jonilda');
     |                                                                                       ^ Error: locator.fill: Test timeout of 60000ms exceeded.
  46 |     await registerForm.locator('#personalLastName, input[name="lastName"]').first().fill('Snow');
  47 |     await registerForm.locator('#personalMail, input[name="email"]').first().fill(`guest_${Date.now()}@example.com`);
  48 | 
  49 |     await registerForm.locator('#billingAddressAddressStreet, input[name="billingAddress[street]"]').first().fill('Teststraße 123');
  50 |     await registerForm.locator('#billingAddressAddressZipcode, input[name="billingAddress[zipcode]"]').first().fill('10115');
  51 |     await registerForm.locator('#billingAddressAddressCity, input[name="billingAddress[city]"]').first().fill('Frankfurt');
  52 |     await registerForm.locator('select[name="billingAddress[countryId]"]').first().selectOption({ label: 'Deutschland' });
  53 | 
  54 |     const submitRegisterBtn = registerForm.locator('button[type="submit"].btn-primary').first();
  55 |     await submitRegisterBtn.click();
  56 | 
  57 |     await expect(page).toHaveURL(/\/checkout\/confirm/);
  58 | 
  59 |     const cashOnDelivery = page.locator('label', { hasText: /Nachnahme|Cash on delivery/i }).first();
  60 |     if (await cashOnDelivery.isVisible()) {
  61 |       await cashOnDelivery.click();
  62 |     }
  63 | 
  64 |     const tosCheckbox = page.locator('input[name="tos"], #tos');
  65 |     await tosCheckbox.check({ force: true });
  66 | 
  67 |     const submitOrderBtn = page.locator('#confirmFormSubmit');
  68 |     await submitOrderBtn.click();
  69 | 
  70 |     await expect(page).toHaveURL(/\/checkout\/finish/);
  71 | 
  72 |     const finishHeader = page.locator('.finish-header, .checkout-finish-header');
  73 |     await expect(finishHeader).toBeVisible();
  74 | 
  75 |     const orderNumberText = page.locator('.finish-ordernumber, .checkout-aside-summary-value');
  76 |     await expect(orderNumberText).toContainText(/Bestellnummer|Order number/i);
  77 | 
  78 |     const cartBadge = page.locator('.header-cart-total');
  79 |     await expect(cartBadge).toHaveText(/0/);
  80 |   });
  81 | });
```