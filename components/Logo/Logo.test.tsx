import React from 'react'
import { render, screen } from '@testing-library/react'
import Logo from './Logo'

test('Should render the Logo component.', () => {
  render(<Logo />)

  const logo = screen.getByRole('link', { name: /uniqueMW/i })

  expect(logo).toBeInTheDocument()
})
