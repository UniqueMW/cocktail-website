import React from 'react'
import { FiSearch } from 'react-icons/fi'

function SearchBar(): JSX.Element {
  return (
    <form className="flex flex-row justify-center text-heading font-heading text-lg items-center w-full">
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent border border-paragraph h-10 px-1 w-[70%]"
      />
      <button type="submit" className="bg-action h-10 px-2">
        <FiSearch />
      </button>
    </form>
  )
}

export default SearchBar
