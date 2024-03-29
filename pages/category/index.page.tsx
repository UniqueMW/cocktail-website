import React from 'react'
import axios from 'axios'
import Head from 'next/head'
import type { GetStaticProps } from 'next'
import { PageFilterGrid, SocialCards } from 'components'
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
    <>
      <Head>
        <title>category</title>
        <meta
          name="description"
          content="Search through a database of cocktails by category e.g punch/party drink."
        />
        <SocialCards
          title="category"
          description="Search through a database of cocktails by category e.g punch/party drink."
        />
      </Head>
      <section className="lg:px-20 px-2 min-h-screen">
        <PageFilterGrid
          drinks={props.drinks}
          filterList={props.filterList}
          defaultCard={props.defaultCategory}
          url={url}
        >
          <h1 className="text-lg text-heading font-heading font-semibold tracking-wide">
            By Category:
          </h1>
        </PageFilterGrid>
      </section>
    </>
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
