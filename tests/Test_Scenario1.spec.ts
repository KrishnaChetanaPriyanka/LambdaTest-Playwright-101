import { test, expect } from '@playwright/test';

test('Simple Form Demo - Validate message', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground');

  /* await page.getByRole('link', { name: 'Simple Form Demo' }).click();
  await page.getByRole('textbox', { name: 'Please enter your Message' }).fill('welcome to LambdaTest');
  await page.getByRole('button', { name: 'Get Checked Value' }).click();
  await page.getByText('welcome to LambdaTest').click(); */

  await page.click('text=Simple Form Demo');
  await expect(page).toHaveURL(/.*simple-form-demo/);
  const message = "Welcome to LambdaTest";
  await page.fill('input#user-message', message);
  await page.click('#showInput');
  const output = await page.locator('#message').innerText();
  expect(output).toBe(message);
});

