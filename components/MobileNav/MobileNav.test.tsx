import React from 'react'
import { screen, render } from '@testing-library/react'
import user from '@testing-library/user-event'
import MobileNav from './MobileNav'

const spyFn = jest.fn()
jest.mock('components', () => ({
  Logo: () => <h1>Logo</h1>,
  NavLink: () => <h1>NavLink</h1>
}))
test('Should render MobileNav component.', () => {
  render(<MobileNav setOpenMenu={spyFn} />)

  const hamburgerButton = screen.getByRole('button')
  const homeLink = screen.getByRole('heading', { name: /navlink/i })
  const logo = screen.getByRole('heading', { name: /logo/i })

  expect(hamburgerButton).toBeInTheDocument()
  expect(homeLink).toBeInTheDocument()
  expect(logo).toBeInTheDocument()
})

test('Should call a event handler if hamburger menu is clicked.', async () => {
  render(<MobileNav setOpenMenu={spyFn} />)

  const hamburgerButton = screen.getByRole('button')
  await user.click(hamburgerButton)

  expect(spyFn).toBeCalledWith(true)
})
