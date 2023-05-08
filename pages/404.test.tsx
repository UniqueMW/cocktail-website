import React from 'react'
import { render, screen } from '@testing-library/react'
import Page404 from './404.page'

jest.mock(
  'next/head',
  () =>
    function Head() {
      return <h1>Head</h1>
    }
)

test('should render 404 page.', () => {
  const { container } = render(<Page404 />)

  const head = screen.getByRole('heading', { name: /head/i })
  const text404 = screen.getByRole('heading', { name: /404/i })
  const button = screen.getByRole('button')
  const paragraph = container.getElementsByTagName('p')

  expect(head).toBeInTheDocument()
  expect(text404).toBeInTheDocument()
  expect(button).toBeInTheDocument()
  expect(paragraph[0]).toBeInTheDocument()
})
