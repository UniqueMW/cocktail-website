import React from 'react'

interface ContactInputProps {
  name: string
  placeholder: string
  id: string
  inputType: 'email' | 'text'
  children?: React.ReactNode
}

function ContactInput(props: ContactInputProps): JSX.Element {
  return (
    <label
      className="flex flex-row bg-background text-base text-heading tracking-wider font-heading border border-heading h-12 pl-2 space-x-2 items-center w-full"
      htmlFor={props.id}
    >
      {props.children}
      <input
        placeholder={props.placeholder}
        name={props.name}
        type={props.inputType}
        className="w-full outline-none bg-background border-l-2 border-l-heading pl-2"
        id={props.id}
        required
      />
    </label>
  )
}

export default ContactInput
