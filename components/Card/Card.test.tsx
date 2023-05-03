import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from './Card'
import { cardDrink } from '@/testProps'

test('Should render Card Component.', () => {
  render(<Card drink={cardDrink} />)

  const image = screen.getByRole('img')
  const heading = screen.getByRole('heading', { name: cardDrink.strDrink })

  expect(image).toBeInTheDocument()
  expect(heading).toBeInTheDocument()
})
