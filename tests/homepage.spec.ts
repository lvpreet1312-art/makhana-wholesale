import { test, expect } from '@playwright/test';

test('homepage has correct title and product details', async ({ page }) => {
  await page.goto('/');

  // Verify Hero Section
  await expect(page.getByRole('heading', { name: 'Premium Plain Makhana' })).toBeVisible();
  await expect(page.getByText('Pure & Natural')).toBeVisible();


  // Verify Sections
  await expect(page.getByText('Why Choose ISKI')).toBeVisible();
  await expect(page.getByText('Health & Nutrition')).toBeVisible();
  await expect(page.getByText('Loved by Our Customers')).toBeVisible();

  // Verify Order Button
  const orderButton = page.getByRole('link', { name: 'Order Now' });
  await expect(orderButton).toBeVisible();
  await expect(orderButton).toHaveAttribute('href', '/contact');
});
