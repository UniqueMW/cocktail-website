import React from 'react'
import { RiLockPasswordLine } from 'react-icons/ri'
import { AiOutlineMail } from 'react-icons/ai'
import { ContactInput } from 'components'
import { globalStateContext } from 'pages/_app.page'
import GoogleButton from 'react-google-button'

function AuthBox(): JSX.Element {
  const globalContext = React.useContext(globalStateContext)
  const handleHideAuthBox = (): void => {
    globalContext?.dispatch({ type: 'OPENAUTHBOX', payload: false })
  }

  return (
    <div
      className={`${
        globalContext?.globalState.openAuthBox === true ? 'flex' : 'hidden'
      } flex-col fixed left-0 top-0 z-30 justify-start py-16 items-center w-full  h-[150vh] bg-gray-600/80`}
      onClick={handleHideAuthBox}
    >
      <section
        className=" z-40 text-heading bg-background shadow-lg  md:w-fit w-11/12 py-5 px-10"
        onClick={(event) => {
          event.stopPropagation()
        }}
      >
        <form
          className=" flex flex-col items-center p-1 text-base space-y-6"
          role="form"
        >
          <h1 className="md:text-lg text-base font-heading tracking-wider text-left font- w-full">
            Sign In/Up to UniqueMW
          </h1>
          <div className="flex flex-col space-y-2">
            <ContactInput
              name="email"
              placeholder="Email"
              id="userEmail"
              inputType="email"
            >
              <AiOutlineMail />
            </ContactInput>
            <ContactInput
              name="password"
              placeholder="Password"
              id="userPassword"
              inputType="password"
            >
              <RiLockPasswordLine />
            </ContactInput>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2 text-heading font-paragraph text-sm tracking-wider">
            <button className="px-6 bg-action py-3 uppercase">sign up</button>
            <button className="border border-heading px-6 py-3 uppercase">
              sign in
            </button>
          </div>
          <GoogleButton />
        </form>
      </section>
    </div>
  )
}

export default AuthBox
