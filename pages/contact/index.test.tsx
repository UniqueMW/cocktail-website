import React from 'react'
import { render, screen } from '@testing-library/react'
import ContactPage from './index.page'

jest.mock(
  'next/head',
  () =>
    function Head() {
      return <h1>Head</h1>
    }
)

jest.mock('components', () => ({
  ContactInput: () => <h1>ContactInput</h1>,
  SocialCards: () => <h1>SocialCards</h1>
}))

test('Should render Contact page', () => {
  render(<ContactPage />)

  const contactInputs = screen.getAllByRole('heading', {
    name: /contactInput/i
  })
  const head = screen.getByRole('heading', { name: /head/i })
  const formTitle = screen.getByRole('heading', { name: /contact me/i })
  const form = screen.getByRole('form')
  const submitButton = screen.getByRole('button')
  const textArea = screen.getByPlaceholderText(/your message.../i)

  expect(contactInputs.length).toBeGreaterThan(0)
  expect(formTitle).toBeInTheDocument()
  expect(head).toBeInTheDocument()
  expect(form).toBeInTheDocument()
  expect(submitButton).toBeInTheDocument()
  expect(textArea).toBeInTheDocument()
})
