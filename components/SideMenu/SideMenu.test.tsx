import React from 'react'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { searchBoxContext } from 'pages/_app.page'
import SideMenu from './SideMenu'

jest.mock('components', () => ({
  Logo: () => <h1>Logo</h1>,
  NavLink: () => <h1>NavLink</h1>,
  SearchBar: () => <h1>SearchBar</h1>
}))

const handleMenuSpyFn = jest.fn()
const setOpenSearchBoxSpyFn = jest.fn()

test('Should render SideMenu component.', () => {
  render(
    <searchBoxContext.Provider
      value={{ setOpenSearchBox: setOpenSearchBoxSpyFn, openSearchBox: false }}
    >
      <SideMenu setOpenMenu={handleMenuSpyFn} openMenu />
    </searchBoxContext.Provider>
  )

  const logo = screen.getByRole('heading', { name: /logo/i })
  const navLink = screen.getAllByRole('heading', { name: /navLink/i })
  const searchBar = screen.getByRole('heading', { name: /searchBar/i })
  const closeMenuButton = screen.getByRole('button')

  expect(logo).toBeInTheDocument()
  expect(navLink.length).toBeGreaterThan(0)
  expect(searchBar).toBeInTheDocument()
  expect(closeMenuButton).toBeInTheDocument()
})

test('Should call event handler if button is clicked.', async () => {
  render(<SideMenu setOpenMenu={handleMenuSpyFn} openMenu />)

  const closeMenuButton = screen.getByRole('button')
  await user.click(closeMenuButton)

  expect(handleMenuSpyFn).toBeCalledWith(false)
})
