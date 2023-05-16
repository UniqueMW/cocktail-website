import { test, expect } from '@playwright/test'

test('Should change drinks if filterCard is clicked.', async ({ page }) => {
  await page.goto('/glasses')
  const cocktailGlassFilterCard = page.getByRole('button', {
    name: /cocktail glass/i
  })
  const highballGlassFilterCard = page.getByRole('button', {
    name: /highball glass/i
  })

  await highballGlassFilterCard.click()

  await expect(highballGlassFilterCard).toHaveClass(/text-action/i)
  await expect(cocktailGlassFilterCard).toHaveClass(/text-paragraph/i)
})
