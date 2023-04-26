import React from 'react'
import { render, screen } from '@testing-library/react'
import { searchBoxContext } from '@/pages/_app'
import Nav from './Nav'

jest.mock('components', () => ({
  SearchBar: () => <h1>Search bar</h1>,
  NavLink: () => <h1>Nav Link</h1>,
  Logo: () => <h1>Logo</h1>
}))

const setOpenSearchBoxSpyFn = jest.fn()

test('Should render nav.', () => {
  render(
    <searchBoxContext.Provider
      value={{ setOpenSearchBox: setOpenSearchBoxSpyFn, openSearchBox: false }}
    >
      <Nav />
    </searchBoxContext.Provider>
  )

  const links = screen.getAllByRole('heading', { name: /nav link/i })
  const searchBar = screen.getByRole('heading', { name: /search bar/i })
  const logo = screen.getByRole('heading', { name: /logo/i })

  expect(links.length).toBeGreaterThan(0)
  expect(searchBar).toBeInTheDocument()
  expect(logo).toBeInTheDocument()
})
