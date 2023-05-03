import React from 'react'
import useSWR from 'swr'
import { fetcher } from 'utils'
import type { ICardDrink, IRandomDrink } from 'types'

function useSearchSuggestion(url: string): IRandomDrink[] | ICardDrink[] | [] {
  const [searchSuggestions, setSearchSuggestionsByName] = React.useState<
    IRandomDrink[] | ICardDrink[]
  >()

  const searchSuggestionsRes = useSWR(url, fetcher)

  React.useEffect(() => {
    if (typeof searchSuggestionsRes.data !== 'undefined') {
      setSearchSuggestionsByName(searchSuggestionsRes.data.drinks)
    }
  }, [searchSuggestionsRes.data])

  if (typeof searchSuggestions === 'undefined' || searchSuggestions === null) {
    return []
  }

  return searchSuggestions
}

export default useSearchSuggestion
