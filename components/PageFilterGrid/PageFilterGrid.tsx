import React from 'react'
import useSWR from 'swr'
import { FilterCardList, Grid } from 'components'
import { fetcher } from 'utils'
import type {
  ICardDrink,
  IIngredientListObj,
  ICategoryListObj,
  IGlassListObj,
  IDrinks,
  IFilterCardContext
} from 'types'

interface IPageFilterGridProps {
  drinks: ICardDrink[]
  filterList: Array<IIngredientListObj & ICategoryListObj & IGlassListObj>
  defaultCard: string
  url: string
  children: React.ReactNode
}

export const FilterCardContext = React.createContext<
  IFilterCardContext | undefined
>(undefined)

function PageFilterGrid(props: IPageFilterGridProps): JSX.Element {
  const [drinks, setDrinks] = React.useState(props.drinks)
  const [activeCard, setActiveCard] = React.useState(props.defaultCard)
  const { data }: { data: IDrinks } = useSWR(
    `${props.url}${activeCard}`,
    fetcher
  )

  React.useEffect(() => {
    if (typeof data !== 'undefined') {
      setDrinks(data.drinks)
    }
  }, [activeCard, data])

  return (
    <FilterCardContext.Provider value={{ activeCard, setActiveCard }}>
      <section className="space-y-10">
        <FilterCardList filterList={props.filterList}>
          {props.children}
        </FilterCardList>
        <Grid drinks={drinks} />
      </section>
    </FilterCardContext.Provider>
  )
}

export default PageFilterGrid
