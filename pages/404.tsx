import React from 'react'
import Head from 'next/head'
import { IoMdArrowBack } from 'react-icons/io'
import { useRouter } from 'next/router'

function Page404(): JSX.Element {
  const router = useRouter()
  const handleBackHome = (): void => {
    // eslint-disable-next-line
    router.push('/')
  }
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <section className="flex flex-col justify-center space-y-4 items-center h-screen">
        <h1 className="text-heading text-8xl tracking-wider font-heading font-semibold">
          404
        </h1>
        <p className="text-lg tracking-wider font-paragraph text-paragraph capitalize">
          Page not found
        </p>
        <button
          className="flex flex-row space-x-2 items-center text-lg text-heading font-heading tracking-wider bg-action px-6 py-3"
          onClick={handleBackHome}
        >
          <IoMdArrowBack />
          Go Back Home
        </button>
      </section>
    </>
  )
}

export default Page404
