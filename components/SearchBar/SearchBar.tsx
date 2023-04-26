import React from 'react'
import { RxSlash } from 'react-icons/rx'
import { RiSearch2Line } from 'react-icons/ri'
function SearchBar(): JSX.Element {
  return (
    <button
      type="submit"
      className="flex flex-row items-center justify-between space-x-4 text-lg text-heading font-heading tracking-wider bg-transparent border border-paragraph w-full sm:max-w-[70%] py-2 px-2 "
    >
      <RiSearch2Line className="text-xl" />
      <h3>Try gin...</h3>
      <div className="border p-1 border-heading">
        <RxSlash />
      </div>
    </button>
  )
}

export default SearchBar
