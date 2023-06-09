import React from 'react'
import { TfiMenu } from 'react-icons/tfi'
import { BiBookmarks } from 'react-icons/bi'
import { FaRegUser } from 'react-icons/fa'
import { Logo, NavLink } from 'components'
import { globalStateContext } from 'pages/_app.page'
interface IMobileNavProps {
  setOpenMenu: (arg: boolean) => void
}
function MobileNav(props: IMobileNavProps): JSX.Element {
  const globalContext = React.useContext(globalStateContext)
  const handleOpenAuthBox = (): void => {
    globalContext?.dispatch({ type: 'OPENAUTHBOX', payload: true })
  }

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
      <div className="w-fit flex flex-row space-x-3">
        <NavLink href="/bookmark" icon>
          <BiBookmarks />
        </NavLink>
        <button
          className="border border-heading rounded-full text-heading font-heading min-w-fit p-3 flex flex-row items-center tracking-wider"
          onClick={handleOpenAuthBox}
        >
          <FaRegUser />
        </button>
      </div>
    </nav>
  )
}

export default MobileNav
