import React from 'react'
import { render, screen } from '@testing-library/react'
import SearchPage from './index.page'
import { drinksList, randomDrink } from '@/testProps'

jest.mock(
  'next/head',
  () =>
    function Head() {
      return <h1>Head</h1>
    }
)

jest.mock('components', () => ({
  Grid: () => <h1>Grid</h1>,
  SocialCards: () => <h1>SocialCards</h1>
}))

test('Should render search page.', () => {
  render(
    <SearchPage
      drinksByName={[randomDrink]}
      drinksByIngredient={drinksList}
      searchValue="test"
    />
  )

  const head = screen.getByRole('heading', { name: /head/i })
  const grid = screen.getByRole('heading', { name: /grid/i })

  expect(head).toBeInTheDocument()
  expect(grid).toBeInTheDocument()
})
