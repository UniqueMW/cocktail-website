import React from 'react'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { FilterCardContext } from 'components'
import FilterCard from './FilterCard'

const setActiveSpyFn = jest.fn()

test('Should render FilterCard component.', () => {
  render(
    <FilterCardContext.Provider
      value={{ setActiveCard: setActiveSpyFn, activeCard: 'test' }}
    >
      <FilterCard>test</FilterCard>
    </FilterCardContext.Provider>
  )

  const filterCardButton = screen.getByRole('button', { name: /test/i })
  expect(filterCardButton).toBeInTheDocument()
})

test('Should call setActiveCard on click.', async () => {
  render(
    <FilterCardContext.Provider
      value={{ setActiveCard: setActiveSpyFn, activeCard: 'test' }}
    >
      <FilterCard>test</FilterCard>
    </FilterCardContext.Provider>
  )

  const filterCardButton = screen.getByRole('button', { name: /test/i })

  await user.click(filterCardButton)

  expect(setActiveSpyFn).toBeCalledWith('test')
})
