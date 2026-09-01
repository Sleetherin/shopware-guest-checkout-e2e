import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://www.shopware6-demo.development-s25.com',
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
  },
  timeout: 60000,
});