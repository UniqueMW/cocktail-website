import React from 'react'
import { render, screen } from '@testing-library/react'
import PageFilterGrid from './PageFilterGrid'
import { filterListTest, drinksList } from 'testProps'
import type { IGlassListObj, IIngredientListObj, ICategoryListObj } from 'types'

jest.mock('components', () => ({
  Grid: () => <h1>Grid</h1>,
  FilterCardList: () => <h1>FilterCardList</h1>
}))

test('Should render PageFilterGrid component', () => {
  render(
    <PageFilterGrid
      filterList={
        filterListTest as Array<
          IGlassListObj & IIngredientListObj & ICategoryListObj
        >
      }
      url="test"
      defaultCard="test"
      drinks={drinksList}
    >
      test
    </PageFilterGrid>
  )

  const grid = screen.getByRole('heading', { name: /grid/i })
  const filterCardList = screen.getByRole('heading', {
    name: /FilterCardList/i
  })

  expect(grid).toBeInTheDocument()
  expect(filterCardList).toBeInTheDocument()
})
