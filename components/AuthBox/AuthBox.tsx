import React from 'react'
import { globalStateContext } from 'pages/_app.page'
import { BsTwitter } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  sendSignInLinkToEmail,
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
  const [isEmailSent, setIsEmailSent] = React.useState(false)
  const globalContext = React.useContext(globalStateContext)

  const actionCodeSettings = {
    url: 'https://uniquecocktailapp.netlify.app/',
    handleCodeInApp: true
  }

  const handleHideAuthBox = (): void => {
    globalContext?.dispatch({ type: 'OPENAUTHBOX', payload: false })
  }

  const handleSignIn = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    if (formRef.current === null) {
      throw new Error('No form')
    }
    const email = formRef.current.userEmail.value
    console.log(email, 'entered')

    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        console.log('Email sent')
        setIsEmailSent(true)
        localStorage.setItem('userEmail', email)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleGoogleAuth = (): void => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((user) => {
        console.log('user signed in with google', user)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleTwitterAuth = (): void => {
    const provider = new TwitterAuthProvider()
    signInWithPopup(auth, provider)
      .then((user) => {
        console.log('user signed in with twitter.', user)
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
        className=" z-40 text-heading bg-background shadow-lg md:w-1/3 w-11/12 py-5 px-10 space-y-6"
        onClick={(event) => {
          event.stopPropagation()
        }}
      >
        <form
          className=" flex flex-col items-center p-1 text-base space-y-6 w-full"
          role="form"
          ref={formRef}
        >
          <div className="w-full">
            <h1 className="md:text-lg text-base font-heading tracking-wider text-left font- w-full capitalize">
              Welcome!
            </h1>
            <p className="text-paragraph md:text-base text-sm font-paragraph tracking-wide">
              Sign in or up to continue.
            </p>
          </div>
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
          </div>
          {isEmailSent ? (
            <p className="text-sm text-action tracking-wide text-left">
              Click the link sent to your Email to continue.If you have not
              received any Email try signing in or up again.
            </p>
          ) : null}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2 text-heading font-paragraph text-sm tracking-wider">
            <button
              className="px-6 bg-action py-3 uppercase"
              onClick={handleSignIn}
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
          <div className="flex flex-row items-center space-x-2">
            <div className=" border-b border-action h-1 w-32"></div>
            <h1 className="text-lg text-heading font-heading">or</h1>
            <div className=" border-b border-action h-1 w-32"></div>
          </div>
        </form>
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-paragraph font-paragraph text-base tracking-wide capitalize">
            Social Media Sign up or in
          </h2>
          <div className="space-x-2">
            <button onClick={handleTwitterAuth}>
              <BsTwitter className="text-[#1DA1F2] text-3xl" />
            </button>
            <button onClick={handleGoogleAuth}>
              <FcGoogle className="text-3xl" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AuthBox
