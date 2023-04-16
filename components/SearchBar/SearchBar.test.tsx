import React from 'react'
import { screen, render } from '@testing-library/react'
import SearchBar from './SearchBar'

test('Should render SearchBar component.', () => {
  render(<SearchBar />)

  const submitButton = screen.getByRole('button')
  const searchInput = screen.getByRole('textbox')

  expect(submitButton).toBeInTheDocument()
  expect(submitButton).toHaveAttribute('type', 'submit')

  expect(searchInput).toBeInTheDocument()
  expect(searchInput).toHaveAttribute('type', 'text')
})
