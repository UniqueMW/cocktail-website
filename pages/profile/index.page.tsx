import React from 'react'
import Image from 'next/image'
import { HiLogout } from 'react-icons/hi'
import { deleteUser, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from 'firebase.config'
import { globalStateContext } from 'pages/_app.page'
import { useRouter } from 'next/router'
import { ProfileField } from 'components'
import { BsTrash } from 'react-icons/bs'

function ProfilePage(): JSX.Element {
  const [user, setUser] = React.useState(auth.currentUser)
  const [deleteCount, setDeleteCount] = React.useState(0)
  const globalContext = React.useContext(globalStateContext)
  const router = useRouter()

  const handleUserLogout = (): void => {
    router
      .push('/')
      .then(() => {
        console.log('Redirecting......')
        signOut(auth)
          .then(() => {
            console.log('Logging Out!!!!')
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleDeleteUser = (): void => {
    setDeleteCount(deleteCount + 1)
    const user = auth.currentUser
    if (deleteCount >= 2 && user !== null) {
      deleteUser(user)
        .then(() => {
          console.log('user deleted')
          router
            .push('/')
            .then(() => {
              console.log('redirecting deleted user')
            })
            .catch((error) => {
              console.log(error)
            })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user === null) {
        router
          .push('/')
          .then(() => {
            console.log('redirecting unauthenticated user!!!')
          })
          .catch((error) => {
            console.log(error)
          })

        if (typeof globalContext !== 'undefined') {
          globalContext.dispatch({ type: 'OPENAUTHBOX', payload: true })
        }
        setUser(null)
      } else {
        setUser(user)
      }
    })
  }, [])

  if (user !== null) {
    return (
      <div className="min-h-screen md:px-10 px-2 flex flex-col items-center space-y-10">
        <section className=" flex sm:flex-row flex-col md:justify-center items-center md:space-x-20">
          <Image
            src={user?.photoURL as string}
            alt={`${user?.displayName as string} profile image`}
            width={200}
            height={200}
          />
          <div className="space-y-4">
            <ProfileField
              fieldName="Name"
              fieldValue={user.displayName as string}
            />
            <ProfileField fieldName="Email" fieldValue={user.email as string} />
            <button
              className="py-2 px-4 bg-action flex flex-row items-center font-heading tracking-wide"
              onClick={handleUserLogout}
            >
              Logout
              <HiLogout className="ml-2" />
            </button>
          </div>
        </section>
        {deleteCount > 0 && (
          <h1 className="text-action tracking-wider font-paragraph capitalize text-left">
            Click one more time to confirm account deletion And make sure you
            have recently logged in
          </h1>
        )}
        <button
          className="flex flex-row items-center bg-red-500 text-heading font-heading tracking-wider capitalize px-6 py-2"
          onClick={handleDeleteUser}
        >
          Delete account
          <BsTrash className="ml-2" />
        </button>
      </div>
    )
  }

  return (
    <section className="min-h-screen">
      <h1 className="text-heading tracking-wide text-xl font-heading text-center w-full">
        Login First
      </h1>
    </section>
  )
}

export default ProfilePage
