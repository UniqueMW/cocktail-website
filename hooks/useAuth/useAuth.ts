import React from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'firebase.config'

import type { User } from 'firebase/auth'

function useAuth(): [boolean, User | null] {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  const [user, setUser] = React.useState<User | null>(null)

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        setIsAuthenticated(true)
        setUser(user)
      } else {
        setIsAuthenticated(false)
        setUser(null)
      }
    })
  }, [])

  return [isAuthenticated, user]
}

export default useAuth
