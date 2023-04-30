import React from 'react'
import Link from 'next/link'
import type { IRandomDrink } from '@/types'

interface ISuggestionCardProps {
  drink: IRandomDrink
}

function SuggestionCard(props: ISuggestionCardProps): JSX.Element {
  return (
    <Link href={`/${props.drink.idDrink}`}>
      <section className="border border-paragraph">
        <h1 className="text-lg text-paragraph font-paragraph tracking-wide">
          {props.drink.strDrink}
        </h1>
        <h3 className="text-base text-action italic font-paragraph tracking-wide">
          {props.drink.strAlcoholic}
        </h3>
      </section>
    </Link>
  )
}

export default SuggestionCard
