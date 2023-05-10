import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface INavLinkProps {
  href: string
  icon?: boolean
  children: React.ReactNode
}

function NavLink(props: INavLinkProps): JSX.Element {
  const [activePage, setActivePage] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    if (router.pathname === props.href) {
      setActivePage(true)
    } else {
      setActivePage(false)
    }
  }, [router.pathname])

  if (typeof props.icon === 'boolean' && props.icon) {
    return (
      <Link
        data-testId={props.href}
        href={props.href}
        className={`text-base font-heading tracking-wider capitalize ${
          activePage ? 'text-heading' : 'text-paragraph'
        } h-11 px-2 border border-heading flex items-center font-heading`}
      >
        {props.children}
      </Link>
    )
  }
  return (
    <Link
      href={props.href}
      className={`text-base capitalize font-heading tracking-wider ${
        activePage ? 'text-heading' : 'text-paragraph'
      }`}
    >
      {props.children}
    </Link>
  )
}

export default NavLink
