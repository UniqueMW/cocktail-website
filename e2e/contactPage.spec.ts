import { test, expect } from '@playwright/test'

test('should be able to send an email.', async ({ page }) => {
  await page.goto('/contact')

  const fullnameInput = page.getByPlaceholder(/full name/i)
  const emailInput = page.getByPlaceholder(/email/i)
  const subjectInput = page.getByPlaceholder(/subject/i)
  const messageInput = page.getByPlaceholder(/your message/i)
  const submitButton = page.getByRole('button', { name: /submit/i })

  await fullnameInput.type('cliff e2e')
  await emailInput.type('e2e@gmail.com')
  await subjectInput.type('e2e subject')
  await messageInput.type('e2e testing')
  await submitButton.click()

  await expect(page).toHaveURL('https://formsubmit.co/clifflikovo@gmail.com')
})
