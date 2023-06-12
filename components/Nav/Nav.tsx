import React from 'react'
import { NavLink, SearchBar, Logo } from 'components'
import { BiBookmarks } from 'react-icons/bi'
import { globalStateContext } from 'pages/_app.page'
import { auth } from 'firebase.config'
import { signOut } from 'firebase/auth'
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
        {auth.currentUser !== null ? (
          <h1
            onClick={(): void => {
              signOut(auth)
                .then(() => {
                  console.log('logged out')
                })
                .catch((err) => {
                  console.log(err)
                })
            }}
          >
            user
          </h1>
        ) : (
          <button
            className="text-heading text-sm font-semibold font-heading min-w-fit p-3 bg-blue-400 hover:bg-action hover:shadow-xl hover:shadow-action flex flex-row items-center tracking-wider"
            onClick={handleOpenAuthBox}
          >
            LOGIN
          </button>
        )}
      </div>
    </nav>
  )
}

export default Nav
