import React from 'react'
import { NavLink, SearchBar, Logo } from 'components'
import { BiBookmarks } from 'react-icons/bi'
import { FaRegUser } from 'react-icons/fa'
import { globalStateContext } from 'pages/_app.page'
function Nav(): JSX.Element {
  const globalContext = React.useContext(globalStateContext)
  const handleOpenAuthBox = (): void => {
    globalContext?.dispatch({ type: 'OPENAUTHBOX', payload: true })
  }
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
        <button
          className="text-heading font-heading min-w-fit p-3 flex flex-row items-center tracking-wider"
          onClick={handleOpenAuthBox}
        >
          <FaRegUser />
        </button>
      </div>
    </nav>
  )
}

export default Nav
