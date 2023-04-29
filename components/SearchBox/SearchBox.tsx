import React from 'react'
import useSWR from 'swr'
import * as _ from 'lodash'
import { fetcher } from 'utils'
import { searchBoxContext } from 'pages/_app'
import { RiSearch2Line } from 'react-icons/ri'
import type { ISearchBoxContext, IFetchedDrink } from 'types'

// TODO Implement modal focus.
function SearchBox(): JSX.Element {
  const context = React.useContext(searchBoxContext) as ISearchBoxContext
  const [suggestion, setSuggestion] = React.useState('Gin')
  const handleHideSearchBox = (): void => {
    context.setOpenSearchBox(false)
  }
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
  const { data }: IFetchedDrink = useSWR(url, fetcher)

  React.useEffect(() => {
    if (typeof data !== 'undefined') {
      setSuggestion(
        _.truncate(data.drinks[0].strDrink, { length: 20, omission: '...' })
      )
    }
  }, [data])

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
        <form className=" flex flex-row items-center space-x-2 p-1" role="form">
          <RiSearch2Line className="text-2xl text-heading h-11" />
          <input
            placeholder={`Try ${suggestion}`}
            className="bg-background w-full px-1 h-11 text-lg tracking wide text-heading font-heading border border-heading focus:outline"
          />
          <button
            className="p-2 border border-heading text-heading h-11"
            onClick={handleHideSearchBox}
            type="button"
          >
            ESC
          </button>
        </form>
      </section>
    </div>
  )
}

export default SearchBox
