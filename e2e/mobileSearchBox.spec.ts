import { expect, test } from '@playwright/test'

test.use({ viewport: { width: 375, height: 667 } })
test('should open searchBox for mobile.', async ({ page }) => {
  await page.goto('/')
  const mobileNav = page.getByRole('navigation')
  const hamburgerButton = mobileNav.getByRole('button')

  await hamburgerButton.click()

  const sideMenu = page.getByTestId('sidemenu')
  const searchBar = sideMenu.getByRole('button', { name: /\w/i })
  const searchBox = page
    .locator('section')
    .filter({ has: page.getByRole('form') })

  await searchBar.click()
  await expect(searchBox).toBeVisible()
})
