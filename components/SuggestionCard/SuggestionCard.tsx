import React from 'react'
import Link from 'next/link'
import type { ICardDrink, IRandomDrink } from 'types'
import { globalStateContext } from 'pages/_app.page'

interface ISuggestionCardProps {
  drink: IRandomDrink | ICardDrink
}

function SuggestionCard(props: ISuggestionCardProps): JSX.Element {
  let alcoholicStatus: string | null = null
  if ('strAlcoholic' in props.drink) {
    alcoholicStatus = props.drink.strAlcoholic
  }

  const searchBox = React.useContext(globalStateContext)

  const handleHideSearchBox = (): void => {
    searchBox?.dispatch({ type: 'OPENSEARCHBOX', payload: false })
  }

  return (
    <section className="border border-paragraph">
      <Link href={`/${props.drink.idDrink}`} onClick={handleHideSearchBox}>
        <h1 className="text-sm text-paragraph font-paragraph tracking-wide">
          {props.drink.strDrink}
        </h1>
        <h3 className="text-xs text-action italic font-paragraph tracking-wide">
          {alcoholicStatus}
        </h3>
      </Link>
    </section>
  )
}

export default SuggestionCard
