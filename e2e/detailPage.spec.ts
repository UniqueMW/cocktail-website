import { test, expect } from '@playwright/test'

test('bookmark button.', async ({ page }) => {
  await page.goto('/13940')

  const bookmarkButtonSvg = page
    .getByRole('button', { name: /bookmark/i })
    .locator('svg')

  await bookmarkButtonSvg.click()

  await expect(bookmarkButtonSvg).toHaveClass(/text-heading/i)
  await expect(page).toHaveURL('/13940')
})
