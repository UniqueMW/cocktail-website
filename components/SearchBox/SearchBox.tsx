import React from 'react'
import { searchBoxContext } from 'pages/_app'
import { RiSearch2Line } from 'react-icons/ri'
import type { ISearchBoxContext } from 'types'

function SearchBox(): JSX.Element {
  const context = React.useContext(searchBoxContext) as ISearchBoxContext

  const handleHideSearchBox = (): void => {
    context.setOpenSearchBox(false)
  }

  return (
    <section
      className={`${
        context.openSearchBox ? 'flex' : 'hidden'
      } flex-col absolute left-0 top-0 z-30 justify-start py-16 items-center w-full  h-[100vh] bg-gray-600/80`}
      onClick={handleHideSearchBox}
    >
      <section
        className=" z-40 text-heading bg-background shadow-lg md:w-1/2 w-5/6 p-5"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <section className=" p-2 bg-background">
          <form className="border border-heading flex flex-row items-center p-1">
            <RiSearch2Line className="text-2xl text-heading" />
            <input
              placeholder="Search for a drink"
              className="bg-background w-full px-1 text-lg tracking wide text-heading font-heading outline-none"
            />
            <button
              className="p-2 border border-heading text-heading"
              onClick={handleHideSearchBox}
              type="button"
            >
              ESC
            </button>
          </form>
        </section>
      </section>
    </section>
  )
}

export default SearchBox
