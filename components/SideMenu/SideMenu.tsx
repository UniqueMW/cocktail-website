import React from 'react'
import { NavLink, SearchBar, Logo } from 'components'
interface ISideMenuProps {
  openMenu: boolean
  setOpenMenu: (args: boolean) => void
}

function SideMenu(props: ISideMenuProps): JSX.Element {
  // Changes back body overflow
  const handleMenu = (): void => {
    props.setOpenMenu(false)
  }
  return (
    <div
      className={`${
        props.openMenu ? 'flex' : 'hidden'
      } flex-row justify-between lg:hidden fixed top-0 left-0 z-10 h-full`}
    >
      <section className="flex flex-col  items-center justify-between w-[80vw] border h-full bg-background py-6 px-3">
        <SearchBar />
        <div className="flex flex-col items-center space-y-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/category">Category</NavLink>
          <NavLink href="/ingredients">Ingredients</NavLink>
          <NavLink href="/glasses">Glasses</NavLink>
        </div>
        <Logo />
      </section>
      <button className=" w-[20vw]" onClick={handleMenu} />
    </div>
  )
}

export default SideMenu
