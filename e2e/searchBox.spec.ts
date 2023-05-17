import { test, expect } from '@playwright/test'

test('Should be able to open searchBox.', async ({ page }) => {
  await page.goto('/')

  const navigation = page
    .getByRole('navigation')
    .filter({ has: page.getByRole('button') })

  const searchBar = navigation.getByRole('button')

  await searchBar.click()

  const searchBox = page
    .locator('section')
    .filter({ has: page.getByRole('form') })

  await expect(searchBox).toBeVisible()
})

test('should open searchBox using the forward slash.', async ({ page }) => {
  await page.goto('/')

  const searchBox = page
    .locator('section')
    .filter({ has: page.getByRole('form') })

  await page.keyboard.press('/')

  await expect(searchBox).toBeVisible()
})

test('Should close the searchBox by clicking empty space.', async ({
  page
}) => {
  await page.goto('/')
  await page.keyboard.press('/')
  const searchBox = page
    .locator('section')
    .filter({ has: page.getByRole('form') })

  const searchBoxDiv = page
    .locator('div')
    .filter({ has: page.getByRole('form') })
    .nth(2)

  await searchBoxDiv.click()

  await expect(searchBox).not.toBeVisible()
  await expect(searchBoxDiv).not.toBeVisible()
})

test('Should close searchBox by clicking ESC key.', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('/')

  const searchBox = page
    .locator('section')
    .filter({ has: page.getByRole('form') })

  await page.keyboard.press('Escape')

  await expect(searchBox).not.toBeVisible()
})

test('Should close searchBox by clicking ESC button.', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('/')

  const searchBox = page
    .locator('section')
    .filter({ has: page.getByRole('form') })

  const escButton = searchBox.getByRole('button', { name: /esc/i })

  await escButton.click()

  await expect(searchBox).not.toBeVisible()
})

test('Should close searchBox by clicking suggestionCard.', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('/')

  const searchBox = page
    .locator('section')
    .filter({ has: page.getByRole('form') })

  const firstSuggestionCard = searchBox.getByRole('link').nth(1)

  await firstSuggestionCard.click()
  const instructionHeading = page.getByRole('heading', {
    name: /instructions/i
  })

  await expect(searchBox).not.toBeVisible()
  await expect(instructionHeading).toBeVisible()
})
