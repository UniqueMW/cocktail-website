import React from 'react'
import { globalStateContext } from 'pages/_app.page'
import GoogleButton from 'react-google-button'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth'
import { auth } from 'firebase.config'

/**
 * should have a seperate sign up page
 * which requires a fullname
 * should have a profile page
 * add remember me feature
 * forget password feature
 * add facebook sign in
 * show user image on nav
 */

function AuthBox(): JSX.Element {
  const formRef = React.useRef<HTMLFormElement>(null)
  const globalContext = React.useContext(globalStateContext)
  const handleHideAuthBox = (): void => {
    globalContext?.dispatch({ type: 'OPENAUTHBOX', payload: false })
  }

  const handleSignIn = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    if (formRef.current === null) {
      throw new Error('No form')
    }
    const password = formRef.current.userPassword.value
    const email = formRef.current.userEmail.value

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('user signed in')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleSignUp = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    if (formRef.current === null) {
      throw new Error('No form')
    }
    const password = formRef.current.userPassword.value
    const email = formRef.current.userEmail.value
    console.log(password, email)

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('user created')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleGoogleAuth = (): void => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((user) => {
        console.log('user signed in with google')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div
      className={`${
        globalContext?.globalState.openAuthBox === true ? 'flex' : 'hidden'
      } flex-col fixed left-0 top-0 z-30 justify-start py-16 items-center w-full  h-[150vh] bg-gray-600/80`}
      onClick={handleHideAuthBox}
    >
      <section
        className=" z-40 text-heading bg-background shadow-lg md:w-1/3 w-11/12 py-5 px-10"
        onClick={(event) => {
          event.stopPropagation()
        }}
      >
        <form
          className=" flex flex-col items-center p-1 text-base space-y-6 w-full"
          role="form"
          ref={formRef}
        >
          <h1 className="md:text-lg text-base font-heading tracking-wider text-left font- w-full capitalize">
            Sign In/Up to UniqueMW
          </h1>
          <div className="flex flex-col space-y-2 w-full">
            <div>
              <label
                htmlFor="email"
                className="text-base font-heading tracking-wider"
              >
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="Enter Your Email"
                className="bg-transparent border border-heading w-full outline-none h-fit text-base py-2 px-1"
                id="userEmail"
                name="userEmail"
              />
            </div>
            <div>
              <label
                htmlFor="userPassword"
                className="text-base font-heading tracking-wider"
              >
                Password
              </label>
              <input
                type="password"
                required
                placeholder="Enter Your Password"
                className="bg-transparent border border-heading w-full outline-none h-fit text-base py-2 px-1"
                id="userPassword"
                name="userPassword"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2 text-heading font-paragraph text-sm tracking-wider">
            <button
              className="px-6 bg-action py-3 uppercase"
              onClick={handleSignUp}
            >
              sign up
            </button>
            <button
              className="border border-heading px-6 py-3 uppercase"
              onClick={handleSignIn}
            >
              sign in
            </button>
          </div>
          <GoogleButton onClick={handleGoogleAuth} />
        </form>
      </section>
    </div>
  )
}

export default AuthBox
