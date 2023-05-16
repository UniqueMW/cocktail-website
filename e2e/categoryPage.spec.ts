import { test, expect } from '@playwright/test'

test('Should change drinks if filterCard is clicked.', async ({ page }) => {
  await page.goto('/category')
  const shotFilterCard = page.getByRole('button', { name: /shot/i })
  const shakeFilterCard = page.getByRole('button', { name: /shake/i })

  await shakeFilterCard.click()

  await expect(shakeFilterCard).toHaveClass(/text-action/i)
  await expect(shotFilterCard).toHaveClass(/text-paragraph/i)
})
