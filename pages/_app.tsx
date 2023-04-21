import React from 'react'
import '@/styles/globals.css'
import { Fraunces, DM_Sans } from 'next/font/google'
import type { AppProps } from 'next/app'
import { Nav, MobileNav, SideMenu } from 'components'
import '@/global.css'

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' })
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700']
})

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const [openMenu, setOpenMenu] = React.useState(false)
  return (
    <main
      className={`${fraunces.variable} ${dmSans.variable} bg-background min-h-[100vh]`}
    >
      <Nav />
      <MobileNav setOpenMenu={setOpenMenu} />
      <SideMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Component {...pageProps} />
    </main>
  )
}
