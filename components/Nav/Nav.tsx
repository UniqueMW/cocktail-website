import React from 'react'
import { NavLink, SearchBar, Logo } from 'components'
import { BiBookmarks } from 'react-icons/bi'

function Nav(): JSX.Element {
  return (
    <nav className="lg:flex hidden flex-row justify-between items-center lg:px-16 px-10">
      <Logo />
      <div className="flex flex-row justify-evenly items-center space-x-4">
        <NavLink href="/">home</NavLink>
        <NavLink href="/category">Category</NavLink>
        <NavLink href="/ingredients">Ingredients</NavLink>
        <NavLink href="/glasses">Glasses</NavLink>

        <SearchBar />
        <NavLink href="/category" icon>
          <BiBookmarks />
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav
