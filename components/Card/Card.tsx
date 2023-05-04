import React from 'react'
import Image from 'next/image'
import * as _ from 'lodash'
import Link from 'next/link'
import type { ICardDrink } from 'types'
interface ICardProps {
  drink: ICardDrink
}

function Card(props: ICardProps): JSX.Element {
  const [heading, setHeading] = React.useState<string>()

  React.useEffect(() => {
    const length = 20
    const shortHeading = _.trimEnd(_.truncate(props.drink.strDrink, { length }))

    if (shortHeading.length <= length) {
      setHeading(shortHeading)
    } else {
      setHeading(`${shortHeading}...`)
    }
  }, [])
  return (
    <Link href={`/${props.drink.idDrink}`}>
      <Image
        src={props.drink.strDrinkThumb}
        alt={props.drink.strDrink}
        width={270}
        height={300}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg"
        className="object-cover w-auto h-auto"
      />
      <h1 className="text-heading text-center font-heading text-lg tracking-wide">
        {heading}
      </h1>
    </Link>
  )
}

export default Card
