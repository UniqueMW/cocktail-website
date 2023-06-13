import React from 'react'
import Image from 'next/image'
import { auth } from 'firebase.config'
import { BiUser } from 'react-icons/bi'
import { globalStateContext } from 'pages/_app.page'

interface IUserProfileProps {
  isAuthenticated: boolean
}

function UserProfile(props: IUserProfileProps): JSX.Element {
  const globalContext = React.useContext(globalStateContext)
  const handleOpenAuthBox = (): void => {
    if (typeof globalContext !== 'undefined') {
      globalContext.dispatch({ type: 'OPENAUTHBOX', payload: true })
    }
    console.log('clicked')
  }

  if (props.isAuthenticated) {
    const userImageUrl = auth.currentUser?.photoURL
    if (typeof userImageUrl === 'string') {
      return (
        <Image
          src={userImageUrl}
          alt="User Profile Image"
          width={48}
          height={48}
          className="rounded-full"
        />
      )
    }
    return <BiUser className="text-6xl" />
  }

  return (
    <button
      className="text-heading text-sm font-semibold font-heading min-w-fit p-3 bg-blue-400 hover:bg-action hover:shadow-xl hover:shadow-action flex flex-row items-center tracking-wider"
      onClick={handleOpenAuthBox}
    >
      LOGIN
    </button>
  )
}

export default UserProfile
