import React from 'react'
import { NavLink, SearchBar } from 'components'
import Link from 'next/link'
import { BiBookmarks } from 'react-icons/bi'

function Nav(): JSX.Element {
  return (
    <nav className="lg:flex hidden flex-row justify-between items-center lg:px-20 px-10 py-6">
      <Link
        href="/"
        className="text-action text-2xl font-heading tracking-wider max-w-fit font-semibold"
      >
        UniqueMW
      </Link>
      <div className="flex flex-row justify-evenly items-center space-x-4">
        <NavLink text="Home" href="/" />
        <NavLink text="Category" href="/category" />
        <NavLink text="Ingredients" href="/category" />
        <NavLink text="Glasses" href="/category" />
        <SearchBar />
        <NavLink text="Bookmark" href="/category" icon>
          <BiBookmarks />
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav
