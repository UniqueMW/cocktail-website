import React from 'react'
import { render, screen } from '@testing-library/react'
import type {
  IIngredientListObj,
  ICategoryListObj,
  IGlassListObj
} from '@/types'
import FilterCardList from './FilterCardList'
import { filterListTest } from '@/testProps'

jest.mock('components', () => ({ FilterCard: () => <h1>FilterCard</h1> }))

test('Should render FilterCardList', () => {
  render(
    <FilterCardList
      filterList={
        filterListTest as Array<
          IIngredientListObj & ICategoryListObj & IGlassListObj
        >
      }
    >
      test
    </FilterCardList>
  )

  const filterCards = screen.getAllByRole('heading', { name: /FilterCard/i })
  const expandButton = screen.getByRole('button')

  expect(filterCards.length).toBeGreaterThan(0)
  expect(expandButton).toBeInTheDocument()
})
