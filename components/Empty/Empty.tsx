import Image from 'next/image'
import React from 'react'
import emptyImage from 'public/empty.svg'

interface IEmptyProps {
  text?: string
}

// TODO make image responsive
function Empty(props: IEmptyProps): JSX.Element {
  return (
    <section className="flex flex-col items-center justify-center space-y-4 mt-12 min-w-full col-span-full">
      <Image
        src={emptyImage}
        height={400}
        width={400}
        alt="empty"
        className="object-cover"
      />
      <h1 className="text-heading font-heading text-lg tracking-wider capitalize">
        {`No Matching Results try ${
          typeof props.text !== 'undefined' ? props.text : ''
        }`}
      </h1>
    </section>
  )
}

export default Empty
