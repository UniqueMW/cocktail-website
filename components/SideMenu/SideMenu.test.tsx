import React from 'react'
import { render, screen } from '@testing-library/react'
import SideMenu from './SideMenu'

jest.mock('components', () => ({
  Logo: () => <h1>Logo</h1>,
  NavLink: () => <h1>NavLink</h1>,
  SearchBar: () => <h1>SearchBar</h1>
}))

test('Should render SideMenu component.', () => {
  render(<SideMenu />)

  const logo = screen.getByRole('heading', { name: /logo/i })
  const navLink = screen.getAllByRole('heading', { name: /navLink/i })
  const searchBar = screen.getByRole('heading', { name: /searchBar/i })

  expect(logo).toBeInTheDocument()
  expect(navLink.length).toBeGreaterThan(0)
  expect(searchBar).toBeInTheDocument()
})
