import type { IRandomDrink } from 'types'
import React from 'react'

function useSearchSuggestion(res: {
  data: { drinks: IRandomDrink[] }
}): IRandomDrink[] | [] {
  const [searchSuggestions, setSearchSuggestionsByName] =
    React.useState<IRandomDrink[]>()

  React.useEffect(() => {
    if (typeof res.data !== 'undefined') {
      setSearchSuggestionsByName(res.data.drinks)
    }
  }, [res.data])

  if (typeof searchSuggestions === 'undefined' || searchSuggestions === null) {
    return []
  }

  return searchSuggestions
}

export default useSearchSuggestion
