import React from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'firebase.config'
import { TfiMenu } from 'react-icons/tfi'
import { BiBookmarks } from 'react-icons/bi'
import { Logo, NavLink, UserProfile } from 'components'
interface IMobileNavProps {
  setOpenMenu: (arg: boolean) => void
}
function MobileNav(props: IMobileNavProps): JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  const handleMenu = (): void => {
    props.setOpenMenu(true)
  }

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
        <UserProfile isAuthenticated={isAuthenticated} />
      </div>
    </nav>
  )
}

export default MobileNav
