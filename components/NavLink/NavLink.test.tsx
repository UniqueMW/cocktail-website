import React from 'react'
import { screen, render } from '@testing-library/react'
import NavLink from './NavLink'

test('Should render NavLink.', () => {
  render(<NavLink href="test">test</NavLink>)

  const link = screen.getByRole('link')
  const getLinkByText = screen.getByText('test')

  expect(link).toBeInTheDocument()
  expect(getLinkByText).toBeInTheDocument()
})

test('Should render an icon if provided as a child.', () => {
  render(
    <NavLink href="test" icon>
      <h1>child</h1>
    </NavLink>
  )

  const child = screen.getByRole('heading', { name: /child/i })

  expect(child).toBeInTheDocument()
})
