import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  
  fullyParallel: true,
  
  retries: 1,
  
  reporter: 'html',

  use: {

    trace: 'on-first-retry',
    
    screenshot: 'only-on-failure',
    
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});