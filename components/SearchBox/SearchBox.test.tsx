import React from 'react'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { searchBoxContext } from 'pages/_app'
import SearchBox from './SearchBox'

const setOpenSearchBoxSpyFn = jest.fn()

test('Check if component render correct.', () => {
  render(
    <searchBoxContext.Provider
      value={{ setOpenSearchBox: setOpenSearchBoxSpyFn, openSearchBox: false }}
    >
      <SearchBox />
    </searchBoxContext.Provider>
  )

  const escButton = screen.getByRole('button', { name: /esc/i })
  const searchInput = screen.getByRole('textbox')
  const searchForm = screen.getByRole('form')

  expect(escButton).toBeInTheDocument()
  expect(searchInput).toBeInTheDocument()
  expect(searchForm).toBeInTheDocument()
})

test('Check if SearchBox can be closed.', async () => {
  render(
    <searchBoxContext.Provider
      value={{
        setOpenSearchBox: setOpenSearchBoxSpyFn,
        openSearchBox: false
      }}
    >
      <SearchBox />
    </searchBoxContext.Provider>
  )

  const escButton = screen.getByRole('button', { name: /esc/i })
  await user.click(escButton)

  expect(setOpenSearchBoxSpyFn).toBeCalledWith(false)
})
