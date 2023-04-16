import React from 'react'
import Link from 'next/link'

function Logo(): JSX.Element {
  return (
    <Link
      href="/"
      className="text-action text-2xl font-heading tracking-wider max-w-fit font-semibold"
    >
      UniqueMW
    </Link>
  )
}

export default Logo
