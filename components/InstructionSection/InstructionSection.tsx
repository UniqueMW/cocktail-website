import React from 'react'

interface IInstructionProps {
  instruction: string
}

function InstructionSection(props: IInstructionProps): JSX.Element {
  return (
    <section className="space-y-3">
      <h3 className="text-heading text-center lg:text-left text-2xl tracking-wider font-heading border-b-2 border-action">
        Instructions
      </h3>
      <p
        className="text-paragraph text-xl tracking-wide font-paragraph"
        role="paragraph"
      >
        {props.instruction}
      </p>
    </section>
  )
}

export default InstructionSection
