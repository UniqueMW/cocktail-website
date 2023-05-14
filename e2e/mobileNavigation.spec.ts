import { test, expect } from '@playwright/test'

test.describe('Mobile and Tablet Navigation', () => {
  test.use({ viewport: { width: 375, height: 667 } })

  test('Navigating to Home page.', async ({ page }) => {
    await page.goto('/')
    const mobileNav = page.getByRole('navigation')
    await mobileNav.getByRole('button').click()
    const sideMenu = page.getByTestId('sidemenu')
    await sideMenu.getByRole('link', { name: /home/i }).click()

    await expect(page).toHaveURL('/')
    await expect(page).toHaveTitle(/UniqueMW/i)
  })

  test('Navigating to Category page.', async ({ page }) => {
    await page.goto('/')
    const mobileNav = page.getByRole('navigation')
    await mobileNav.getByRole('button').click()
    const sideMenu = page.getByTestId('sidemenu')
    await sideMenu.getByRole('link', { name: /category/i }).click()

    await expect(page).toHaveURL('/category')
    await expect(page).toHaveTitle(/category/i)
  })

  test('Navigating to Ingredients page.', async ({ page }) => {
    await page.goto('/')
    const mobileNav = page.getByRole('navigation')
    await mobileNav.getByRole('button').click()
    const sideMenu = page.getByTestId('sidemenu')
    await sideMenu.getByRole('link', { name: /ingredients/i }).click()

    await expect(page).toHaveURL('/ingredients')
    await expect(page).toHaveTitle(/ingredient/i)
  })

  test('Navigating to glasses page.', async ({ page }) => {
    await page.goto('/')
    const mobileNav = page.getByRole('navigation')
    await mobileNav.getByRole('button').click()
    const sideMenu = page.getByTestId('sidemenu')
    await sideMenu.getByRole('link', { name: /glasses/i }).click()

    await expect(page).toHaveURL('/glasses')
    await expect(page).toHaveTitle(/glasses/i)
  })

  test('Navigating to Bookmark page.', async ({ page }) => {
    await page.goto('/')
    const mobileNav = page.getByRole('navigation')
    const bookmarkLink = mobileNav
      .getByRole('link')
      .filter({ hasNot: page.getByText(/[a-zA-Z]/) })

    await bookmarkLink.click()
    await expect(page).toHaveURL('/bookmark')
    await expect(page).toHaveTitle(/bookmark/i)
  })
})
