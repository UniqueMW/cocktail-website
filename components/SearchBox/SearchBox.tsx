import React from 'react'
import useSWR from 'swr'
import { fetcher, debounce } from 'utils'
import { searchBoxContext } from 'pages/_app'
import { RiSearch2Line } from 'react-icons/ri'
import type { ISearchBoxContext, IFetchedDrink } from 'types'
import { SuggestionCard, Empty } from 'components'
import { useInputSuggestion, useSearchSuggestion } from 'hooks'
import { useRouter } from 'next/router'

// TODO handle no results.
// TODO show ingredients suggestions
function SearchBox(): JSX.Element {
  const context = React.useContext(searchBoxContext) as ISearchBoxContext
  const [searchBoxSuggestionsUrl, setSearchBoxSuggestionsUrl] = React.useState(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin'
  )
  const [searchValue, setSearchValue] = React.useState<string>()
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
  const router = useRouter()

  const handleHideSearchBox = (): void => {
    context.setOpenSearchBox(false)
  }

  const handleSearchInput = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    const target = event.target as HTMLInputElement
    debounce(() => {
      setSearchValue(target?.value)
      setSearchBoxSuggestionsUrl(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${target?.value}`
      )
    }, 100)()
  }

  const handleSearch = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    // eslint-disable-next-line
    router.push(`/search/${searchValue}`)
  }

  const randomDrink: IFetchedDrink = useSWR(url, fetcher)
  const searchSuggestionsByNameRes = useSWR(searchBoxSuggestionsUrl, fetcher)

  const inputSuggestion = useInputSuggestion(randomDrink)

  const searchSuggestionsByName = useSearchSuggestion(
    searchSuggestionsByNameRes
  )

  const suggestionResults = React.useMemo(() => {
    if (searchSuggestionsByName?.length <= 0) {
      return <Empty text={inputSuggestion} />
    }
    return searchSuggestionsByName?.map((suggestion) => (
      <SuggestionCard drink={suggestion} key={suggestion.idDrink} />
    ))
  }, [searchSuggestionsByName])

  return (
    <div
      className={`${
        context.openSearchBox ? 'flex' : 'hidden'
      } flex-col fixed left-0 top-0 z-30 justify-start py-16 items-center w-full  h-[150vh] bg-gray-600/80`}
      onClick={handleHideSearchBox}
    >
      <section
        className=" z-40 text-heading bg-background shadow-lg md:w-1/2 w-5/6 p-5"
        onClick={(event) => {
          event.stopPropagation()
        }}
      >
        <form
          className=" flex flex-row items-center space-x-2 p-1"
          role="form"
          onSubmit={handleSearch}
        >
          <button type="submit">
            <RiSearch2Line className="text-2xl text-heading h-11" />
          </button>
          <input
            placeholder={`Try ${inputSuggestion}`}
            className="bg-background w-full px-1 h-11 text-lg tracking wide text-heading font-heading border border-heading focus:outline"
            onKeyDown={handleSearchInput}
          />
          <button
            className="p-2 border border-heading text-heading h-11"
            onClick={handleHideSearchBox}
            type="button"
          >
            ESC
          </button>
        </form>
        <div className="px-1 pt-4 space-y-2 h-fit max-h-[60vh] overflow-y-auto scrollbar-thumb-action scrollbar-thin">
          {suggestionResults}
        </div>
      </section>
    </div>
  )
}

export default SearchBox
