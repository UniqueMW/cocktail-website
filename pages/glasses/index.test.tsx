import React from 'react'
import { render, screen } from '@testing-library/react'
import GlassesPage from './index.page'
import { drinksList, filterListTest } from 'testProps'
import type { ICategoryListObj, IIngredientListObj, IGlassListObj } from 'types'

jest.mock(
  'next/head',
  () =>
    function Head() {
      return <h1>Head</h1>
    }
)
jest.mock('components', () => ({
  PageFilterGrid: () => <h1>PageFilterGrid</h1>,
  SocialCards: () => <h1>SocialCards</h1>
}))

test('Should render Category page.', () => {
  render(
    <GlassesPage
      drinks={drinksList}
      defaultGlass="gin"
      filterList={
        filterListTest as Array<
          IIngredientListObj & ICategoryListObj & IGlassListObj
        >
      }
    />
  )

  const head = screen.getByRole('heading', { name: /head/i })
  const pageFilterGrid = screen.getByRole('heading', {
    name: /pageFilterGrid/i
  })

  expect(head).toBeInTheDocument()
  expect(pageFilterGrid).toBeInTheDocument()
})
