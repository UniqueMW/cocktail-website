import React from 'react'
import { render, screen } from '@testing-library/react'
import { drinksList } from 'testProps'
import Suggestions from './Suggestions'

jest.mock('components', () => ({
  SuggestionCard: () => <h1>SuggestionCard</h1>
}))

test('Should render suggestions.', () => {
  render(
    <Suggestions drinks={drinksList}>
      <h1>Test</h1>
    </Suggestions>
  )

  const suggestionCards = screen.getAllByRole('heading', {
    name: /SuggestionCard/i
  })
  const suggestionChildren = screen.getByRole('heading', { name: /test/i })

  expect(suggestionCards.length).toBe(3)
  expect(suggestionChildren).toBeInTheDocument()
})

test('Should not render SuggestionCard if drinks props is empty.', () => {
  render(
    <Suggestions drinks={[]}>
      <h1>Test</h1>
    </Suggestions>
  )

  const suggestionChildren = screen.getByRole('heading', { name: /test/i })
  const suggestionCards = screen.queryAllByRole('heading', {
    name: /SuggestionCard/i
  })
  const emptyStateReturn = screen.getByRole('heading', { name: /no results/i })

  expect(suggestionCards.length).toBe(0)
  expect(suggestionChildren).toBeInTheDocument()
  expect(emptyStateReturn).toBeInTheDocument()
})
