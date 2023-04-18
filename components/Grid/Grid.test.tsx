import React from 'react'
import { render, screen } from '@testing-library/react'
import Grid from './Grid'
import { drinksList } from 'testProps'

jest.mock('components', () => ({ Card: () => <h1>Card</h1> }))

test('Should render Grid Component without a children component.', () => {
  render(<Grid drinks={drinksList} />)

  const cards = screen.getAllByRole('heading', { name: /card/i })

  expect(cards.length).toBe(drinksList.length)
})

test('Should render Grid Component with a children component.', () => {
  render(
    <Grid drinks={drinksList}>
      <h1>Grid title</h1>
    </Grid>
  )

  const cards = screen.getAllByRole('heading', { name: /card/i })
  const gridTitle = screen.getByRole('heading', { name: /grid title/i })

  expect(cards.length).toBe(drinksList.length)
  expect(gridTitle).toBeInTheDocument()
})
