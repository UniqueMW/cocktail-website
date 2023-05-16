import { test, expect } from '@playwright/test'

test('Should change drinks if filterCard is clicked.', async ({ page }) => {
  await page.goto('/ingredients')
  const ginFilterCard = page.getByRole('button', { name: /gin/i }).nth(1)
  const scotchFilterCard = page.getByRole('button', { name: /scotch/i })

  await scotchFilterCard.click()

  await expect(scotchFilterCard).toHaveClass(/text-action/i)
  await expect(ginFilterCard).toHaveClass(/text-paragraph/i)
})
