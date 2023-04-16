import React from 'react'
import { render, screen } from '@testing-library/react'
import Nav from './Nav'

jest.mock('components', () => ({
  SearchBar: () => <h1>Search bar</h1>,
  NavLink: () => <h1>Nav Link</h1>
}))

test('Should render nav.', () => {
  render(<Nav />)

  const links = screen.getAllByRole('heading', { name: /nav link/i })
  const searchBar = screen.getByRole('heading', { name: /search bar/i })

  expect(links.length).toBeGreaterThan(0)
  expect(searchBar).toBeInTheDocument()
})
