import React from 'react'
import * as _ from 'lodash'
import useSWR from 'swr'
import { fetcher } from 'utils'
import type { IFetchedDrink } from 'types'

function useInputSuggestion(url: string, length: number = 20): string {
  const [inputSuggestion, setInputSuggestion] = React.useState('Gin')

  const fetchedDrink: IFetchedDrink = useSWR(url, fetcher)

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
