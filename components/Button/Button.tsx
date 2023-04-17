import React from 'react'

interface IButton {
  children: React.ReactNode
}

function Button(props: IButton): JSX.Element {
  return (
    <button className="flex flex-row justify-between items-center space-x-6 px-6 py-3 hover:bg-action text-heading text-lg font-heading font-semibold tracking-wide w-fit border-action border-2">
      {props.children}
    </button>
  )
}

export default Button
