import React from 'react'
import { render, screen } from '@testing-library/react'
import Empty from './Empty'

test('Should render Empty Component.', () => {
  render(<Empty />)

  const emptyImage = screen.getByRole('img')

  expect(emptyImage).toBeInTheDocument()
})
