import React from 'react'
import '@/styles/globals.css'
import { Fraunces, DM_Sans } from 'next/font/google'
import type { AppProps } from 'next/app'
import { Nav, MobileNav, SideMenu } from 'components'

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' })
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700']
})

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  // opens and closes menu
  const [openMenu, setOpenMenu] = React.useState(false)
  return (
    <main className={`${fraunces.variable} ${dmSans.variable} bg-background`}>
      <Nav />
      <MobileNav setOpenMenu={setOpenMenu} />
      <SideMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Component {...pageProps} />
    </main>
  )
}
