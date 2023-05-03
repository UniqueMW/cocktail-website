import React from 'react'
import { SuggestionCard } from 'components'
import { FaRegFolderOpen } from 'react-icons/fa'
import type { ICardDrink, IRandomDrink } from 'types'

interface ISuggestionsProps {
  drinks: IRandomDrink[] | ICardDrink[] | []
  children: React.ReactNode
}

function Suggestions(props: ISuggestionsProps): JSX.Element {
  const suggestionResults = React.useMemo(() => {
    if (props.drinks?.length <= 0) {
      return (
        <div className="flex flex-row justify-center items-center space-x-1 w-full text-center text-xl tracking-wider font-heading font-semibold">
          <h1>No Results</h1>
          <FaRegFolderOpen />
        </div>
      )
    }
    return props.drinks?.map((suggestion) => (
      <SuggestionCard drink={suggestion} key={suggestion.idDrink} />
    ))
  }, [props.drinks])

  return (
    <div className="px-1 pt-4 space-y-2">
      {props.children}
      {suggestionResults}
    </div>
  )
}

export default Suggestions
