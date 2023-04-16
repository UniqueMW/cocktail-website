import React from 'react'
import { Example } from 'components'

export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="mt-20 text-paragraph">Cliff</h1>
      <Example />
    </main>
  )
}
