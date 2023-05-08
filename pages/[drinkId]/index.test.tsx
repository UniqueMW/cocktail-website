import React from 'react'
import { render, screen } from '@testing-library/react'
import DrinkDetailPage from './index.page'
import { randomDrink } from 'testProps'

jest.mock(
  'next/head',
  () =>
    function Head() {
      return <h1>Head</h1>
    }
)
jest.mock('components', () => ({
  DrinkDetailSection: () => <h1>DrinkDetailSection</h1>,
  InstructionSection: () => <h1>InstructionSection</h1>,
  IngredientsSection: () => <h1>IngredientsSection</h1>,
  Button: () => <h1>Button</h1>,
  SocialCards: () => <h1>SocialCards</h1>
}))

test('Should render [drinkId] page.', () => {
  render(<DrinkDetailPage drink={randomDrink} />)

  const head = screen.getByRole('heading', { name: /head/i })
  const drinkName = screen.getByRole('heading', { name: randomDrink.strDrink })
  const alcoholicStatus = screen.getByRole('heading', {
    name: randomDrink.strAlcoholic
  })
  const drinkDetailSection = screen.getByRole('heading', {
    name: /drinkDetailSection/i
  })
  const instructionSection = screen.getByRole('heading', {
    name: /instructionSection/i
  })
  const ingredientSection = screen.getByRole('heading', {
    name: /IngredientsSection/i
  })
  const image = screen.getByRole('img')
  const button = screen.getByRole('heading', { name: /button/i })

  expect(head).toBeInTheDocument()
  expect(drinkDetailSection).toBeInTheDocument()
  expect(instructionSection).toBeInTheDocument()
  expect(ingredientSection).toBeInTheDocument()
  expect(image).toBeInTheDocument()
  expect(button).toBeInTheDocument()
  expect(drinkName).toBeInTheDocument()
  expect(alcoholicStatus).toBeInTheDocument()
})
