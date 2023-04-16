import React from 'react'
import { FiSearch } from 'react-icons/fi'

function SearchBar(): JSX.Element {
  return (
    <form className="text-heading font-heading text-lg flex flex-row items-center">
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent border border-paragraph h-8 px-1"
      />
      <button type="submit" className="bg-action h-8 px-2">
        <FiSearch />
      </button>
    </form>
  )
}

export default SearchBar
