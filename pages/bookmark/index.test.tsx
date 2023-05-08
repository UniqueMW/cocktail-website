import React from 'react'
import { render, screen } from '@testing-library/react'
import BookmarkPage from './index.page'

jest.mock('components', () => ({
  Grid: () => <h1>Grid</h1>,
  SocialCards: () => <h1>SocialCards</h1>
}))

jest.mock(
  'next/head',
  () =>
    function Head() {
      return <h1>Head</h1>
    }
)

jest.mock('utils')

test('Should render bookmark page', () => {
  render(<BookmarkPage />)

  const grid = screen.getByRole('heading', { name: /grid/i })
  const head = screen.getByRole('heading', { name: /head/i })

  expect(grid).toBeInTheDocument()
  expect(head).toBeInTheDocument()
})
