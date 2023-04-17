import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './Button'

test('Should render Button component.', () => {
  render(<Button>Test</Button>)

  const button = screen.getByRole('button', { name: /test/i })

  expect(button).toBeInTheDocument()
})
