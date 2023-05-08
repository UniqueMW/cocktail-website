import React from 'react'
import { screen, render } from '@testing-library/react'
import user from '@testing-library/user-event'
import SuggestionCard from './SuggestionCard'
import { searchBoxContext } from 'pages/_app.page'
import { randomDrink, cardDrink } from 'testProps'

const setOpenSearchBoxSpy = jest.fn()

test('Should render SuggestionCard, With alcoholic status if drink has the property.', async () => {
  render(
    <searchBoxContext.Provider
      value={{ openSearchBox: false, setOpenSearchBox: setOpenSearchBoxSpy }}
    >
      <SuggestionCard drink={randomDrink} />
    </searchBoxContext.Provider>
  )

  const drinkName = screen.getByRole('heading', {
    name: /Pysch Vitamin Light/i
  })
  const alcoholicStatus = screen.getByRole('heading', {
    name: /Non alcoholic/i
  })

  const suggestionCard = screen.getByRole('link')

  await user.click(suggestionCard)

  expect(drinkName).toBeInTheDocument()
  expect(alcoholicStatus).toBeInTheDocument()
  expect(suggestionCard).toBeInTheDocument()
  expect(setOpenSearchBoxSpy).toBeCalledWith(false)
})

test('Should render SuggestionCard, With no alcoholic status if drink does not have the property.', async () => {
  render(
    <searchBoxContext.Provider
      value={{ openSearchBox: false, setOpenSearchBox: setOpenSearchBoxSpy }}
    >
      <SuggestionCard drink={cardDrink} />
    </searchBoxContext.Provider>
  )

  const drinkName = screen.getByRole('heading', {
    name: /a1/i
  })
  const alcoholicStatus = screen.queryByRole('heading', {
    name: /alcoholic/i
  })

  const suggestionCard = screen.getByRole('link')

  await user.click(suggestionCard)

  expect(drinkName).toBeInTheDocument()
  expect(alcoholicStatus).not.toBeInTheDocument()
  expect(suggestionCard).toBeInTheDocument()
  expect(setOpenSearchBoxSpy).toBeCalledWith(false)
})
