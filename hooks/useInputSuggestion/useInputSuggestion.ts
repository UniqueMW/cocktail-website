import React from 'react'
import * as _ from 'lodash'
import type { IFetchedDrink } from 'types'

function useInputSuggestion(
  fetchedDrink: IFetchedDrink,
  length: number = 20
): string {
  const [inputSuggestion, setInputSuggestion] = React.useState('Gin')

  React.useEffect(() => {
    if (typeof fetchedDrink.data !== 'undefined') {
      setInputSuggestion(
        _.truncate(fetchedDrink.data.drinks[0].strDrink, {
          length,
          omission: '...'
        })
      )
    }
  }, [fetchedDrink.data])

  return inputSuggestion
}

export default useInputSuggestion
