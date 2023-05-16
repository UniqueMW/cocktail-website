import { expect, test } from '@playwright/test'

test('Should go to details page if cocktail card is clicked.', async ({
  page
}) => {
  await page.goto('/')

  const cocktailCard = page
    .getByRole('link')
    .filter({ has: page.getByRole('img') })
    .filter({ has: page.getByRole('heading') })
    .nth(1)

  await cocktailCard.click()

  const instructionHeading = page.getByRole('heading', {
    name: /instructions/i
  })

  const ingredientsHeading = page.getByRole('heading', { name: /ingredients/i })

  await expect(instructionHeading).toBeInViewport()
  await expect(ingredientsHeading).toBeInViewport()
})
