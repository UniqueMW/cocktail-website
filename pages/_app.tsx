import React from 'react'
import '@/styles/globals.css'
import { Fraunces, DM_Sans } from 'next/font/google'
import type { AppProps } from 'next/app'
import type { ISearchBoxContext } from 'types'
import { Nav, MobileNav, SideMenu, SearchBox } from 'components'
import '@/global.css'

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' })
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700']
})

export const searchBoxContext = React.createContext<
  ISearchBoxContext | undefined
>(undefined)

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const [openMenu, setOpenMenu] = React.useState(false)
  const [openSearchBox, setOpenSearchBox] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setOpenSearchBox(false)
        document.body.className = 'overflow-auto'
      } else if (event.key === '/') {
        setOpenSearchBox(true)
      }
    })
  }, [])

  React.useEffect(() => {
    if (openSearchBox || openMenu) {
      document.body.className = 'overflow-hidden'
      // document.body.setAttribute('inert', 'true')
    } else {
      document.body.className = 'overflow-auto'
      // document.body.setAttribute('inert', 'false')
    }
  }, [openSearchBox, openMenu])

  return (
    <main
      className={`${fraunces.variable} ${dmSans.variable} bg-background min-h-[100vh]`}
    >
      <searchBoxContext.Provider value={{ openSearchBox, setOpenSearchBox }}>
        <Nav />
        <SearchBox />
        <SideMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </searchBoxContext.Provider>
      <MobileNav setOpenMenu={setOpenMenu} />
      <Component {...pageProps} />
    </main>
  )
}
