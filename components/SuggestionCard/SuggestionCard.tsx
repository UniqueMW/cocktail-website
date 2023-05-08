import React from 'react'
import Link from 'next/link'
import type { ICardDrink, IRandomDrink } from 'types'
import { searchBoxContext } from '@/pages/_app.page'

interface ISuggestionCardProps {
  drink: IRandomDrink | ICardDrink
}

function SuggestionCard(props: ISuggestionCardProps): JSX.Element {
  let alcoholicStatus: string | null = null
  if ('strAlcoholic' in props.drink) {
    alcoholicStatus = props.drink.strAlcoholic
  }

  const searchBox = React.useContext(searchBoxContext)

  const handleHideSearchBox = (): void => {
    searchBox?.setOpenSearchBox(false)
  }

  return (
    <section className="border border-paragraph">
      <Link href={`/${props.drink.idDrink}`} onClick={handleHideSearchBox}>
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
