import React from 'react'
import { render, screen } from '@testing-library/react'
import ContactInput from './ContactInput'

test('Should render ContactInput component.', () => {
  render(
    <ContactInput name="test" id="test" placeholder="test" inputType="text" />
  )

  const inputElement = screen.getByRole('textbox')

  expect(inputElement).toBeInTheDocument()
})
