import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

jest.mock('components', () => ({
  Logo: () => <h1>Logo</h1>,
  NavLink: () => <h1>NavLink</h1>
}))

test('Should render Footer.', () => {
  render(<Footer />)

  const navLink = screen.getAllByRole('heading', { name: /navlink/i })
  const logo = screen.getByRole('heading', { name: /logo/i })
  const copyright = screen.getByRole('heading', { name: /uniquemw/i })

  expect(logo).toBeInTheDocument()
  expect(copyright).toBeInTheDocument()
  expect(navLink.length).toBe(2)
})
