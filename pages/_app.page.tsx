import React from 'react'
import Head from 'next/head'
import { Fraunces, DM_Sans } from 'next/font/google'
import type { AppProps } from 'next/app'
import {
  Nav,
  MobileNav,
  SideMenu,
  SearchBox,
  Footer,
  AuthBox
} from 'components'
import { reducer } from 'utils'
import FocusLock from 'react-focus-lock'
import '@/global.css'
import type { IGlobalStateContext } from 'types'

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' })
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700']
})

export const globalStateContext = React.createContext<
  IGlobalStateContext | undefined
>(undefined)

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const [openMenu, setOpenMenu] = React.useState(false)

  const [globalState, dispatch] = React.useReducer(reducer, {
    openAuthBox: false,
    openSearchBox: false
  })

  React.useEffect(() => {
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        dispatch({ type: 'OPENSEARCHBOX', payload: false })
        document.body.className = 'overflow-auto'
      } else if (event.key === '/') {
        dispatch({ type: 'OPENSEARCHBOX', payload: true })
      }
    })
  }, [])

  React.useEffect(() => {
    if (globalState.openSearchBox || openMenu || globalState.openAuthBox) {
      document.body.className = 'overflow-hidden'
    } else {
      document.body.className = 'overflow-auto'
    }
  }, [globalState])

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="ly_KtSg21BuYucURvCZ2pP140H5zLMpXCCVx9lWHLZ0"
        />
      </Head>
      <main
        className={`${fraunces.variable} ${dmSans.variable} bg-background min-h-[100vh]`}
      >
        <globalStateContext.Provider value={{ globalState, dispatch }}>
          <Nav />
          <FocusLock>
            <SearchBox />
            <SideMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <AuthBox />
          </FocusLock>
          <MobileNav setOpenMenu={setOpenMenu} />
          <Component {...pageProps} />
          <Footer />
        </globalStateContext.Provider>
      </main>
    </>
  )
}
