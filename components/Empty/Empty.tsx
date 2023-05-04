import Image from 'next/image'
import React from 'react'
import emptyImage from 'public/empty.svg'

function Empty(): JSX.Element {
  return (
    <section className="flex flex-col items-center justify-center space-y-4 mt-12 min-w-full col-span-full">
      <Image
        src={emptyImage}
        height={400}
        width={400}
        alt="empty"
        className="object-cover"
      />
    </section>
  )
}

export default Empty
