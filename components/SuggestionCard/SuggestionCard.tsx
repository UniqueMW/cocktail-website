import React from 'react'
import Link from 'next/link'
import type { ICardDrink, IRandomDrink } from '@/types'

interface ISuggestionCardProps {
  drink: IRandomDrink | ICardDrink
}

function SuggestionCard(props: ISuggestionCardProps): JSX.Element {
  let alcoholicStatus: string | null = null
  if ('strAlcoholic' in props.drink) {
    alcoholicStatus = props.drink.strAlcoholic
  }

  return (
    <section className="border border-paragraph">
      <Link href={`/${props.drink.idDrink}`}>
        <h1 className="text-lg text-paragraph font-paragraph tracking-wide">
          {props.drink.strDrink}
        </h1>
        <h3 className="text-base text-action italic font-paragraph tracking-wide">
          {alcoholicStatus}
        </h3>
      </Link>
    </section>
  )
}

export default SuggestionCard
