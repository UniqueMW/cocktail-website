import React from 'react'
import useSWR from 'swr'
import { FilterCardList, Grid } from 'components'
import { fetcher } from 'utils'
import type {
  ICardDrink,
  IIngredientListObj,
  ICategoryListObj,
  IGlassListObj,
  IDrinks
} from 'types'

interface IPageFilterGridProps {
  drinks: ICardDrink[]
  filterList: Array<IIngredientListObj & ICategoryListObj & IGlassListObj>
  defaultCard: string
  url: string
}

function PageFilterGrid(props: IPageFilterGridProps): JSX.Element {
  const [drinks, setDrinks] = React.useState(props.drinks)
  // change defaultCard to just default
  const [activeCard, setActiveCard] = React.useState(props.defaultCard)
  // require a url,default,filterList and drinks to fetch from the props
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
    <section className="space-y-10">
      <FilterCardList
        filterList={props.filterList}
        setActiveCard={setActiveCard}
        activeCard={activeCard}
      >
        <h1 className="text-xl text-heading font-heading font-semibold tracking-wide">
          By Category:
        </h1>
      </FilterCardList>
      <Grid drinks={drinks} />
    </section>
  )
}

export default PageFilterGrid
