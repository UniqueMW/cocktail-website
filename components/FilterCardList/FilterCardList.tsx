import React from 'react'
import { FilterCard } from 'components'
import type { ICategoryListObj, IGlassListObj, IIngredientListObj } from 'types'

interface IFilterCardListProps {
  filterList: Array<ICategoryListObj & IIngredientListObj & IGlassListObj>
  setActiveCard: (args: string) => void
  activeCard: string
  children: React.ReactNode
}
// TODO resolve prop drilling
function FilterCardList(props: IFilterCardListProps): JSX.Element {
  /**
   * add events to each filter card
   * show filter is active based on selected filter
   */

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
      <section className="flex flex-row flex-wrap space-y-2 space-x-2 items-center">
        {filterCardArr}
      </section>
    </section>
  )
}

export default FilterCardList
