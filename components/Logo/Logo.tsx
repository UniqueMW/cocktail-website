import React from 'react'
import Link from 'next/link'
function Logo(): JSX.Element {
  return (
    <Link href="/" className="text-7xl font-heading tracking-wider max-w-fit ">
      <svg viewBox="0 0 600 300" className="w-fit h-20 md:h-24">
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="50%" dy=".35em">
            UniqueMW
          </text>
        </symbol>
        <use className="logo" xlinkHref="#s-text"></use>
        <use className="logo" xlinkHref="#s-text"></use>
        <use className="logo" xlinkHref="#s-text"></use>
        <use className="logo" xlinkHref="#s-text"></use>
        <use className="logo" xlinkHref="#s-text"></use>
      </svg>
    </Link>
  )
}

export default Logo
