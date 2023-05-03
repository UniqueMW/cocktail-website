import React from 'react'
import { render, screen } from '@testing-library/react'
import IngredientsSection from './IngredientsSection'

test('Should render IngredientsSection', () => {
  render(
    <IngredientsSection>
      <li>test</li>
    </IngredientsSection>
  )

  const ingredientsHeading = screen.getByRole('heading', {
    name: /ingredients/i
  })

  const ingredientsList = screen.getByRole('list')
  const ingredient = screen.getByRole('listitem')

  expect(ingredientsHeading).toBeInTheDocument()
  expect(ingredientsList).toBeInTheDocument()
  expect(ingredient).toBeInTheDocument()
})
