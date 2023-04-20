import React from 'react'
import { TfiMenu } from 'react-icons/tfi'
import { BiBookmarks } from 'react-icons/bi'
import { Logo, NavLink } from 'components'
interface IMobileNavProps {
  setOpenMenu: (arg: boolean) => void
}
function MobileNav(props: IMobileNavProps): JSX.Element {
  const handleMenu = (): void => {
    props.setOpenMenu(true)
  }
  return (
    <nav
      className={`flex lg:hidden flex-row justify-between items-center px-2 h-fit`}
    >
      <button className="text-heading text-lg" onClick={handleMenu}>
        <TfiMenu />
      </button>
      <Logo />
      <NavLink href="/category" icon>
        <BiBookmarks />
      </NavLink>
    </nav>
  )
}

export default MobileNav
