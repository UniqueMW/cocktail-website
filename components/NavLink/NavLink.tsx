import React from 'react'
import Link from 'next/link'

// handle icons for nav link

interface INavLinkProps {
  text: string
  href: string
  icon?: boolean
  children?: React.ReactNode
}

function NavLink(props: INavLinkProps): JSX.Element {
  if (typeof props.icon === 'boolean' && props.icon) {
    return (
      <Link
        href={props.href}
        className="text-xl font-heading tracking-wider capitalize text-paragraph h-8 px-2 border border-action flex items-center"
      >
        {props.children}
      </Link>
    )
  }
  return (
    <Link
      href={props.href}
      className="text-xl capitalize font-heading tracking-wider text-paragraph"
    >
      {props.text}
    </Link>
  )
}

export default NavLink
