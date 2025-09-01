import { test, expect } from '@playwright/test';

test('Input Form Demo - Validate message', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground');

  await page.getByRole('link', { name: 'Input Form Submit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

  await page.getByRole('textbox', { name: 'Name' }).fill('chetan');
  await page.getByRole('textbox', { name: 'Email*' }).fill('chetan11@gmail.com');
  await page.getByRole('textbox', { name: 'Password*' }).fill('Chetan11');
  await page.getByRole('textbox', { name: 'Company' }).fill('lambdatest');
  await page.getByRole('textbox', { name: 'Website' }).fill('lambdatest');
  await page.getByRole('combobox').selectOption('US');
  await page.getByRole('textbox', { name: 'City', exact: true }).fill('phoenix');
  await page.getByRole('textbox', { name: 'Address 1' }).fill('5641 stonebridge');
  await page.getByRole('textbox', { name: 'Address 2' }).fill('suite 43B');
  await page.getByRole('textbox', { name: 'City* State*' }).fill('Arizona');
  await page.getByRole('textbox', { name: 'Zip Code*' }).fill('85009');

  await page.getByRole('button', { name: 'Submit' }).click();

  await page.getByText('Thanks for contacting us, we').click();

});