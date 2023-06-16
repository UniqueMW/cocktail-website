import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiUser } from 'react-icons/bi'
import { globalStateContext } from 'pages/_app.page'
import { useAuth } from 'hooks'

interface IUserProfileProps {
  isAuthenticated: boolean
}

function UserProfile(props: IUserProfileProps): JSX.Element {
  const globalContext = React.useContext(globalStateContext)
  const [, user] = useAuth()
  const handleOpenAuthBox = (): void => {
    if (typeof globalContext !== 'undefined') {
      globalContext.dispatch({ type: 'OPENAUTHBOX', payload: true })
    }
  }

  if (props.isAuthenticated) {
    const userImageUrl = user?.photoURL
    if (typeof userImageUrl === 'string') {
      return (
        <Link href="/profile" className="min-w-fit min-h-fit">
          <Image
            src={userImageUrl}
            alt="User Profile Image"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      )
    }
    return (
      <Link href="/profile" className="min-w-fit min-h-fit">
        <BiUser className="text-6xl" />
      </Link>
    )
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
