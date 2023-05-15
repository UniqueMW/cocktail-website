import { test, expect } from '@playwright/test'

test('Drink detail from hero.', async ({ page }) => {
  await page.goto('/')

  const detailButton = page.getByRole('button', { name: /details/i })
  await detailButton.click()

  const instructionHeading = page.getByRole('heading', {
    name: /instructions/i
  })

  const ingredientsHeading = page.getByRole('heading', { name: /ingredients/i })

  await expect(instructionHeading).toBeInViewport()
  await expect(ingredientsHeading).toBeInViewport()
})

test('Should add hero drink to bookmark.', async ({ page }) => {
  await page.goto('/')
  const bookmarkButton = page.getByRole('button', { name: /bookmark/i })

  await bookmarkButton.click()
  const bookmarkSvg = bookmarkButton.locator('css=svg')

  await expect(bookmarkSvg).toHaveClass('text-heading')
})
