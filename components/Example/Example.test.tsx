import { render, screen } from '@testing-library/react'
import React from 'react'
import Example from './Example'

test('Should test example component', () => {
  render(<Example />)

  const heading = screen.getByRole('heading', { name: /Example component/i })

  expect(heading).toBeInTheDocument()
})
