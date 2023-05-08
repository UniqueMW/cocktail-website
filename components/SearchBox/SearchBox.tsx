import React from 'react'
import { debounce } from 'utils'
import { searchBoxContext } from 'pages/_app.page'
import { RiSearch2Line } from 'react-icons/ri'
import type { ISearchBoxContext } from 'types'
import { Suggestions } from 'components'
import { useInputSuggestion, useSearchSuggestion } from 'hooks'
import { useRouter } from 'next/router'

function SearchBox(): JSX.Element {
  const context = React.useContext(searchBoxContext) as ISearchBoxContext
  const [searchBoxSuggestionsUrl, setSearchBoxSuggestionsUrl] = React.useState({
    byName: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin',
    byIngredient: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin'
  })
  const [searchValue, setSearchValue] = React.useState<string>()
  const randomDrinkUrl =
    'https://www.thecocktaildb.com/api/json/v1/1/random.php'
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
      setSearchBoxSuggestionsUrl({
        byName: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${target.value}`,
        byIngredient: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${target.value}`
      })
    }, 100)()
  }

  const handleSearch = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    // eslint-disable-next-line
    router.push(`/search/${searchValue || 'Gin'}`)
    handleHideSearchBox()
  }

  const inputSuggestion = useInputSuggestion(randomDrinkUrl)

  const searchSuggestionsByName = useSearchSuggestion(
    searchBoxSuggestionsUrl.byName
  )

  const searchSuggestionsByIngredient = useSearchSuggestion(
    searchBoxSuggestionsUrl.byIngredient
  )

  return (
    <div
      className={`${
        context.openSearchBox ? 'flex' : 'hidden'
      } flex-col fixed left-0 top-0 z-30 justify-start py-16 items-center w-full  h-[150vh] bg-gray-600/80`}
      onClick={handleHideSearchBox}
    >
      <section
        className=" z-40 text-heading bg-background shadow-lg md:w-1/2 w-11/12 p-5"
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
        <section className=" h-fit max-h-[60vh] space-y-4 overflow-y-auto scrollbar-thumb-action scrollbar-thin">
          <Suggestions drinks={searchSuggestionsByName}>
            <h1 className="text-heading text-lg tracking-wider font-heading font-semibold">
              By Name:
            </h1>
          </Suggestions>
          <Suggestions drinks={searchSuggestionsByIngredient}>
            <h1 className="text-heading text-lg tracking-wider font-heading font-semibold">
              By Ingredient:
            </h1>
          </Suggestions>
        </section>
      </section>
    </div>
  )
}

export default SearchBox
