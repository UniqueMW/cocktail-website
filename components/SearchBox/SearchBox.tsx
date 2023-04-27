import React from 'react'
import { searchBoxContext } from 'pages/_app'
import { RiSearch2Line } from 'react-icons/ri'
import type { ISearchBoxContext } from 'types'

// TODO Implement modal focus.
function SearchBox(): JSX.Element {
  const context = React.useContext(searchBoxContext) as ISearchBoxContext
  const handleHideSearchBox = (): void => {
    context.setOpenSearchBox(false)
  }

  return (
    <div
      className={`${
        context.openSearchBox ? 'flex' : 'hidden'
      } flex-col fixed left-0 top-0 z-30 justify-start py-16 items-center w-full  h-[100vh] bg-gray-600/80`}
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
            placeholder="Search for a drink"
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
