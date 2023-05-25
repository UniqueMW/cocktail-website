import React from 'react'
import { NavLink, SearchBar, Logo } from 'components'
import { BiBookmarks } from 'react-icons/bi'
import { CiLogin } from 'react-icons/ci'

function Nav(): JSX.Element {
  return (
    <nav className="lg:flex hidden flex-row justify-between items-center lg:px-10 px-10">
      <Logo />
      <div className="flex flex-row justify-evenly items-center space-x-4">
        <NavLink href="/">home</NavLink>
        <NavLink href="/category">Category</NavLink>
        <NavLink href="/ingredients">Ingredients</NavLink>
        <NavLink href="/glasses">Glasses</NavLink>

        <SearchBar />
        <NavLink href="/bookmark" icon>
          <BiBookmarks />
        </NavLink>
        <button className="border border-heading text-heading font-heading min-w-fit h-11 px-2 flex flex-row items-center tracking-wider">
          Sign In
          <CiLogin className="ml-2" />
        </button>
      </div>
    </nav>
  )
}

export default Nav
