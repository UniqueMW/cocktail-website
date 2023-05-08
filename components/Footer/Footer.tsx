import React from 'react'
import { Logo, NavLink } from 'components'
import { BsGithub, BsTwitter } from 'react-icons/bs'

function Footer(): JSX.Element {
  return (
    <footer className="lg:px-10 px-2 w-full">
      <section className="flex md:flex-row flex-col justify-start items-center w-full space-x-4">
        <Logo />
        <NavLink href="/contact">Contact Me</NavLink>
        <NavLink href="/privacy">Privacy Policy</NavLink>
      </section>
      <section className="flex md:flex-row flex-col-reverse items-center justify-between border-t-2 border-t-action py-2">
        <h1 className="text-base text-center text-heading tracking-wider font-heading">
          &copy; {new Date().getFullYear()} UniqueMW. All right reserved.
        </h1>
        <div className="flex flex-row items-center text-xl text-heading font-heading tracking-wider space-x-4">
          <BsGithub />
          <BsTwitter />
        </div>
      </section>
    </footer>
  )
}

export default Footer
