import React from 'react'
import { screen, render } from '@testing-library/react'
import user from '@testing-library/user-event'
import { searchBoxContext } from '@/pages/_app.page'
import SearchBar from './SearchBar'

const setOpenSearchBoxSpyFn = jest.fn()

test('Should render SearchBar component.', () => {
  render(
    <searchBoxContext.Provider
      value={{ setOpenSearchBox: setOpenSearchBoxSpyFn, openSearchBox: false }}
    >
      <SearchBar />
    </searchBoxContext.Provider>
  )

  const submitButton = screen.getByRole('button')

  expect(submitButton).toBeInTheDocument()
  expect(submitButton).toHaveAttribute('type', 'submit')
})

test('Check if SearchBox can be opened.', async () => {
  render(
    <searchBoxContext.Provider
      value={{ setOpenSearchBox: setOpenSearchBoxSpyFn, openSearchBox: false }}
    >
      <SearchBar />
    </searchBoxContext.Provider>
  )

  const submitButton = screen.getByRole('button')
  await user.click(submitButton)

  expect(setOpenSearchBoxSpyFn).toBeCalledWith(true)
})
