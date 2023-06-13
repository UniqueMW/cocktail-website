import React from 'react'
import { NavLink, SearchBar, Logo, UserProfile } from 'components'
import { BiBookmarks } from 'react-icons/bi'
import { auth } from 'firebase.config'
import { onAuthStateChanged } from 'firebase/auth'
function Nav(): JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        setIsAuthenticated(true)
        console.log('user added!!!!', user)
      } else {
        setIsAuthenticated(false)
      }
    })
  }, [])

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
        <UserProfile isAuthenticated={isAuthenticated} />
      </div>
    </nav>
  )
}

export default Nav
