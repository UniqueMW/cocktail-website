import React from 'react'
import '@/styles/globals.css'
import { Fraunces, DM_Sans } from 'next/font/google'
import type { AppProps } from 'next/app'

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' })
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700']
})

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <main className={`${fraunces.variable} ${dmSans.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
