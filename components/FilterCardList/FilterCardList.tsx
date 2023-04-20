import React from 'react'
import { FilterCard } from 'components'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
import type { ICategoryListObj, IGlassListObj, IIngredientListObj } from 'types'

interface IFilterCardListProps {
  filterList: Array<ICategoryListObj & IIngredientListObj & IGlassListObj>
  setActiveCard: (args: string) => void
  activeCard: string
  children: React.ReactNode
}
// TODO resolve prop drilling
function FilterCardList(props: IFilterCardListProps): JSX.Element {
  const [expand, setExpand] = React.useState(false)

  const handleExpand = (): void => {
    setExpand(!expand)
  }
  const filterCardArr = React.useMemo(() => {
    return props.filterList.map((filter) => (
      <FilterCard
        key={filter.strCategory}
        setActiveCard={props.setActiveCard}
        activeCard={props.activeCard}
      >
        {typeof filter.strCategory === 'string'
          ? filter.strCategory
          : typeof filter.strIngredient1 === 'string'
          ? filter.strIngredient1
          : filter.strGlass}
      </FilterCard>
    ))
  }, [props.activeCard])
  return (
    <section className="space-y-4">
      {props.children}
      <section
        className={`flex flex-row flex-wrap space-y-2 space-x-2 items-center ${
          expand ? 'h-fit' : 'h-16'
        } overflow-clip`}
      >
        {filterCardArr}
      </section>
      <button
        className={`relative flex flex-col ${
          props.filterList.length < 12 ? 'md:hidden' : ''
        } text-2xl justify-center items-center text-action left-1/2`}
        onClick={handleExpand}
      >
        {expand ? <SlArrowUp /> : <SlArrowDown />}
      </button>
    </section>
  )
}

export default FilterCardList
