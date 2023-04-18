import React from 'react'
import Image from 'next/image'
import * as _ from 'lodash'
import type { ICardDrink } from 'types'
interface ICardProps {
  drink: ICardDrink
}

// TODO add bookmark functionality

function Card(props: ICardProps): JSX.Element {
  return (
    <section>
      <Image
        src={props.drink.strDrinkThumb}
        alt={props.drink.strDrink}
        width={270}
        height={300}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg"
        className="object-cover"
      />
      <h1 className="text-heading text-center font-heading text-lg tracking-wide">
        {_.truncate(props.drink.strDrink, { length: 20, omission: '...' })}
      </h1>
    </section>
  )
}

export default Card
