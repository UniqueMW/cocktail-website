import React from 'react'
import { screen, render } from '@testing-library/react'
import Hero from './Hero'
import { randomDrink } from 'testProps'

test('Should render Hero component.', () => {
  render(<Hero randomDrink={randomDrink} />)

  const image = screen.getByRole('img')
  const heading = screen.getAllByRole('heading')
  const instruction = screen.getByRole('paragraph')
  const bookmark = screen.getByRole('button')

  expect(image).toBeInTheDocument()
  expect(heading.length).toBeGreaterThan(0)
  expect(instruction).toBeInTheDocument()
  expect(bookmark).toBeInTheDocument()
})
