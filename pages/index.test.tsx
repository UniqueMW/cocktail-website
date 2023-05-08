import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './index.page'
import { drinksList, randomDrink } from '@/testProps'

jest.mock(
  'next/head',
  () =>
    function Head() {
      return <h1>Head</h1>
    }
)
jest.mock('components', () => ({
  Hero: () => <h1>Hero</h1>,
  Grid: () => <h1>Grid</h1>,
  GridTitle: () => <h1></h1>,
  SocialCards: () => <h1>SocialCards</h1>
}))

test('Should render Home page', () => {
  render(
    <Home
      randomDrink={randomDrink}
      category={{ title: 'test', drinks: drinksList }}
      glass={{ title: 'test', drinks: drinksList }}
      ingredient={{ title: 'test', drinks: drinksList }}
    />
  )

  const hero = screen.getByRole('heading', { name: /hero/i })
  const grid = screen.getAllByRole('heading', { name: /grid/i })
  const head = screen.getByRole('heading', { name: /head/i })

  expect(hero).toBeInTheDocument()
  expect(grid.length).toBeGreaterThan(0)
  expect(head).toBeInTheDocument()
})
