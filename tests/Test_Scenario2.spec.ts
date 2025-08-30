import { test, expect } from '@playwright/test';

test('Drag & Drop Slider to 95', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground');
  await page.getByRole('link', { name: 'Drag & Drop Sliders' }).click();
  await page.getByRole('heading', { name: 'Default value 15' }).click();
  await page.locator('#slider3').getByRole('slider').fill('95');
  await page.getByText('95').click();


  /*await page.getByRole('link', { name: 'Drag & Drop Sliders' }).click();
  await page.getByRole('heading', { name: 'Default value 15' }).click();
  await page.locator('#slider3').getByRole('slider').fill('95');
  await page.getByText('95').click();*/

});
