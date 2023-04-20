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

interface ICategoryPageProps {
  drinks: ICardDrink[]
  filterList: Array<IIngredientListObj & ICategoryListObj & IGlassListObj>
  defaultCategory: string
}

function CategoryPage(props: ICategoryPageProps): JSX.Element {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c='
  return (
    <section className="lg:px-20 px-2">
      <PageFilterGrid
        drinks={props.drinks}
        filterList={props.filterList}
        defaultCard={props.defaultCategory}
        url={url}
      >
        <h1 className="text-xl text-heading font-heading font-semibold tracking-wide">
          By Category:
        </h1>
      </PageFilterGrid>
    </section>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const defaultCategory = 'Shot'
  const categoryDrinksRes = await axios(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${defaultCategory}`
  )

  const filterList = await axios(
    'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
  )
  return {
    props: {
      drinks: categoryDrinksRes.data.drinks,
      filterList: filterList.data.drinks,
      defaultCategory
    }
  }
}

export default CategoryPage
