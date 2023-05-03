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

interface IIngredientsPageProps {
  drinks: ICardDrink[]
  filterList: Array<IIngredientListObj & ICategoryListObj & IGlassListObj>
  defaultIngredient: string
}

function IngredientsPage(props: IIngredientsPageProps): JSX.Element {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='

  return (
    <section className="lg:px-20 px-2">
      <PageFilterGrid
        drinks={props.drinks}
        filterList={props.filterList}
        defaultCard={props.defaultIngredient}
        url={url}
      >
        <h1 className="text-xl text-heading font-heading font-semibold tracking-wide">
          By Ingredients:
        </h1>
      </PageFilterGrid>
    </section>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const defaultIngredient = 'Gin'
  const ingredientDrinksRes = await axios(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${defaultIngredient}`
  )

  const filterList = await axios(
    'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
  )
  return {
    props: {
      drinks: ingredientDrinksRes.data.drinks,
      filterList: filterList.data.drinks,
      defaultIngredient
    }
  }
}

export default IngredientsPage
