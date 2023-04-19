import React from 'react'
import axios from 'axios'
import useSWR from 'swr'
import type { GetStaticProps } from 'next'
import { Grid, FilterCardList } from 'components'
import type {
  ICardDrink,
  ICategoryListObj,
  IDrinks,
  IIngredientListObj,
  IGlassListObj
} from 'types'
import { fetcher } from 'utils'

interface IGlassesPageProps {
  drinks: ICardDrink[]
  filterList: Array<IIngredientListObj & ICategoryListObj & IGlassListObj>
  defaultGlass: string
}

function GlassesPage(props: IGlassesPageProps): JSX.Element {
  /**
   * fetch new drinks on the client side based on selected filter.
   * show the active selected filterCard
   */
  const [drinks, setDrinks] = React.useState(props.drinks)
  const [activeCard, setActiveCard] = React.useState(props.defaultGlass)
  const { data }: { data: IDrinks } = useSWR(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${activeCard}`,
    fetcher
  )

  React.useEffect(() => {
    if (typeof data !== 'undefined') {
      setDrinks(data.drinks)
    }
  }, [activeCard, data])
  return (
    <section className="lg:px-20 px-2 space-y-10">
      <FilterCardList
        filterList={props.filterList}
        setActiveCard={setActiveCard}
        activeCard={activeCard}
      >
        <h1 className="text-xl text-heading font-heading font-semibold tracking-wide">
          By Glass:
        </h1>
      </FilterCardList>
      <Grid drinks={drinks} />
    </section>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const defaultGlass = 'Cocktail glass'
  const glassDrinksRes = await axios(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${defaultGlass}`
  )

  const filterList = await axios(
    'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list'
  )
  return {
    props: {
      drinks: glassDrinksRes.data.drinks,
      filterList: filterList.data.drinks,
      defaultGlass
    }
  }
}

export default GlassesPage
