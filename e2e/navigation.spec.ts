import { test, expect } from '@playwright/test'

test('Navigating to category page', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('link', { name: /category/i }).click()

  await expect(page).toHaveURL('/category')
  await expect(page).toHaveTitle(/category/i)
})

test('Navigating to ingredients page', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('link', { name: /ingredients/i }).click()

  await expect(page).toHaveURL('/ingredients')
  await expect(page).toHaveTitle(/ingredients/i)
})

test('Navigating to glasses page', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('link', { name: /glasses/i }).click()

  await expect(page).toHaveURL('/glasses')
  await expect(page).toHaveTitle(/glasses/i)
})

test('Navigating to contact page', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('link', { name: /contact me/i }).click()

  await expect(page).toHaveURL('/contact')
  await expect(page).toHaveTitle(/contact/i)
})

test('Navigating to privacy policy page', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('link', { name: /privacy policy/i }).click()

  await expect(page).toHaveURL('/privacy')
  await expect(page).toHaveTitle(/privacy/i)
})

// working progress
test.only('Navigating to bookmark page', async ({ page }) => {
  await page.goto('https://localhost:3000')
  await page.getByTestId('/bookmark').click()

  await expect(page).toHaveTitle(/bookmark/i)
})
