import React from 'react'
import { render, screen } from '@testing-library/react'
import DrinkDetailSection from './DrinkDetailSection'

test('Should render DrinkDetailSection', () => {
  render(
    <DrinkDetailSection date="test" glass="test" category="test" tag="test" />
  )
  const headings = screen.getAllByRole('heading')

  expect(headings.length).toBe(3)
})
