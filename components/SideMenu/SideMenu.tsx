import React from 'react'
import { NavLink, SearchBar, Logo } from 'components'

function SideMenu(): JSX.Element {
  return (
    <section className="flex flex-col lg:hidden absolute top-0 left-0 z-10 items-center justify-between w-[80vw] border min-h-screen bg-background py-6 px-3">
      <SearchBar />
      <div className="flex flex-col items-center space-y-6">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/">Category</NavLink>
        <NavLink href="/">Ingredients</NavLink>
        <NavLink href="/">Glasses</NavLink>
      </div>
      <Logo />
    </section>
  )
}

export default SideMenu
