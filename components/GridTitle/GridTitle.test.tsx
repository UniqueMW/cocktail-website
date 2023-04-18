import React from 'react'
import { render, screen } from '@testing-library/react'
import GridTitle from './GridTitle'

test('Should render GridTitle Component.', () => {
  render(<GridTitle>test</GridTitle>)

  const heading = screen.getByRole('heading', { name: /test/i })

  expect(heading).toBeInTheDocument()
})
