import Image from 'next/image'
import React from 'react'
import emptyImage from 'public/empty.svg'

interface IEmptyProps {
  text: string
}

function Empty(props: IEmptyProps): JSX.Element {
  return (
    <section className="flex flex-col items-center space-y-2">
      <Image
        src={emptyImage}
        height={300}
        width={300}
        alt="empty"
        className="object-cover"
      />
      <h1 className="text-heading font-heading text-lg tracking-wider">
        {`No Results try ${props.text}`}
      </h1>
    </section>
  )
}

export default Empty
