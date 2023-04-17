import React from 'react'
import { TfiMenu } from 'react-icons/tfi'
import { BiBookmarks } from 'react-icons/bi'
import { NavLink } from 'components'
interface IMobileNavProps {
  setOpenMenu: (arg: boolean) => void
}
function MobileNav(props: IMobileNavProps): JSX.Element {
  const handleMenu = (): void => {
    props.setOpenMenu(true)
  }
  return (
    <nav
      className={`flex lg:hidden flex-row justify-between items-center py-4 px-2`}
    >
      <button className="text-heading text-lg" onClick={handleMenu}>
        <TfiMenu />
      </button>
      <NavLink href="/">UniqueMW</NavLink>
      <NavLink href="/category" icon>
        <BiBookmarks />
      </NavLink>
    </nav>
  )
}

export default MobileNav
