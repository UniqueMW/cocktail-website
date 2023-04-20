import React from 'react'
import axios from 'axios'
import type { GetStaticProps } from 'next'
import { PageFilterGrid } from 'components'
import type {
  ICardDrink,
  ICategoryListObj,
  IIngredientListObj,
  IGlassListObj
} from 'types'

interface IGlassesPageProps {
  drinks: ICardDrink[]
  filterList: Array<IIngredientListObj & ICategoryListObj & IGlassListObj>
  defaultGlass: string
}

// TODO don't repeat pages implementation
function GlassesPage(props: IGlassesPageProps): JSX.Element {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g='

  return (
    <section className="lg:px-20 px-2 space-y-10">
      <PageFilterGrid
        drinks={props.drinks}
        filterList={props.filterList}
        defaultCard={props.defaultGlass}
        url={url}
      >
        <h1 className="text-xl text-heading font-heading font-semibold tracking-wide">
          By Glasses:
        </h1>
      </PageFilterGrid>
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
