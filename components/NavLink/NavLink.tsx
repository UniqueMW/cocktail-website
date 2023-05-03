import React from 'react'
import Link from 'next/link'

// handle icons for nav link

interface INavLinkProps {
  href: string
  icon?: boolean
  children?: React.ReactNode
}

function NavLink(props: INavLinkProps): JSX.Element {
  if (typeof props.icon === 'boolean' && props.icon) {
    return (
      <Link
        href={props.href}
        className="text-xl font-heading tracking-wider capitalize text-paragraph h-11 px-2 border border-heading flex items-center"
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
      {props.children}
    </Link>
  )
}

export default NavLink
