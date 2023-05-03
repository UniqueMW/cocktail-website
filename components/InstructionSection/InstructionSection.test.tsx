import React from 'react'
import { render, screen } from '@testing-library/react'
import InstructionSection from './InstructionSection'

test('Should render InstructionSection.', () => {
  render(<InstructionSection instruction="test" />)

  const instructionHeading = screen.getByRole('heading', {
    name: /instructions/i
  })
  const instructions = screen.getByText(/test/i)

  expect(instructionHeading).toBeInTheDocument()
  expect(instructions).toBeInTheDocument()
})
