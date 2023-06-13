import React from 'react'
import Image from 'next/image'
import { HiLogout } from 'react-icons/hi'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from 'firebase.config'
import { globalStateContext } from 'pages/_app.page'
import { useRouter } from 'next/router'

function ProfilePage(): JSX.Element {
  const [user, setUser] = React.useState(auth.currentUser)
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
      <div className="min-h-screen md:px-10 px-2">
        <section className=" flex flex-row justify-center space-x-20">
          <Image
            src={user?.photoURL as string}
            alt={`${user?.displayName as string} profile image`}
            width={200}
            height={200}
          />
          <div className="space-y-4">
            <section>
              <h1 className="text-heading text-lg font-heading tracking-wider">
                Name:
              </h1>
              <h2 className="text-paragrah font-paragraph tracking-wide">
                {user?.displayName}
              </h2>
            </section>
            <section>
              <h1 className="text-heading text-lg font-heading tracking-wider">
                Email:
              </h1>
              <h2 className="text-paragrah font-paragraph tracking-wide">
                {user?.email}
              </h2>
            </section>
            <button
              className="py-2 px-4 bg-action flex flex-row items-center font-heading tracking-wide"
              onClick={handleUserLogout}
            >
              Logout
              <HiLogout className="ml-2" />
            </button>
          </div>
        </section>
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
