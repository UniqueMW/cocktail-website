import React from 'react'

interface IButton {
  children: React.ReactNode
  clickEvent?: () => void
}

function Button(props: IButton): JSX.Element {
  const handleClick = (): void => {
    const eventHandler = props.clickEvent
    if (typeof eventHandler !== 'undefined') {
      eventHandler()
    }
  }
  return (
    <button
      className="flex flex-row items-center justify-between space-x-2 px-6 py-3 hover:bg-action text-heading text-base font-heading font-semibold tracking-wide w-fit border-action border-2"
      onClick={handleClick}
    >
      {props.children}
    </button>
  )
}

export default Button
