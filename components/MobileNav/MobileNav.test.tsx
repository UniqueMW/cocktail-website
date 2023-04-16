import React from 'react'
import { screen, render } from '@testing-library/react'
import MobileNav from './MobileNav'

test('Should render MobileNav component.', () => {
  render(<MobileNav />)

  const hamburgerButton = screen.getByRole('button')
  const links = screen.getAllByRole('link')

  expect(hamburgerButton).toBeInTheDocument()
  expect(links.length).toBeGreaterThan(0)
})
