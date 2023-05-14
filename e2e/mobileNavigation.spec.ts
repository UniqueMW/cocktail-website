import { test, expect } from '@playwright/test'

test.describe.only('Mobile and Tablet Navigation', () => {
  test.use({ viewport: { width: 375, height: 667 } })

  test('Navigating to Category page.', async ({ page }) => {
    await page.goto('/')
    const mobileNav = page.getByRole('navigation')
    await mobileNav.getByRole('button').click()
    const sideMenu = page.getByTestId('sidemenu')
    await sideMenu.getByRole('link', { name: /category/i }).click()

    await expect(page).toHaveURL('/category')
    await expect(page).toHaveTitle(/category/i)
  })
})
