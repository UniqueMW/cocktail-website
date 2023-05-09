import axios from 'axios'
import Head from 'next/head'
import type { GetStaticProps } from 'next'
import React from 'react'
import { Hero, Grid, GridTitle, SocialCards } from 'components'
import { randomize } from 'utils'
import type {
  IRandomDrink,
  ICategoryListObj,
  IIngredientListObj,
  ICardDrink,
  IGlassListObj
} from 'types'

interface IHomeProps {
  randomDrink: IRandomDrink
  category: { title: string; drinks: ICardDrink[] }
  ingredient: { title: string; drinks: ICardDrink[] }
  glass: { title: string; drinks: ICardDrink[] }
}

export default function Home(props: IHomeProps): JSX.Element {
  return (
    <>
      <Head>
        <title>UniqueMW</title>
        <meta
          name="description"
          content="Scroll through a database of cocktails organized by category,ingredients and glasses."
        />
        <SocialCards
          title="UniqueMW"
          description="Scroll through a database of cocktails organized by category,ingredients and glasses."
        />
      </Head>
      <div className=" lg:space-y-16 space-y-12 lg:px-20 px-2 pb-6 min-h-screen">
        <Hero randomDrink={props.randomDrink} />
        <Grid drinks={props.category.drinks} amount={10}>
          <GridTitle>{props.category.title}</GridTitle>
        </Grid>
        <Grid drinks={props.ingredient.drinks} amount={10}>
          <GridTitle>{`Made with ${props.ingredient.title}`}</GridTitle>
        </Grid>
        <Grid drinks={props.glass.drinks} amount={10}>
          <GridTitle>{`served on a ${props.glass.title}`}</GridTitle>
        </Grid>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const randomDrinkRes = await axios(
    'https://www.thecocktaildb.com/api/json/v1/1/random.php'
  )

  const listOfAllCategoriesRes = await axios(
    'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
  )

  const listOfAllIngredientsRes = await axios(
    'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
  )

  const listOfAllGlassesRes = await axios(
    'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list'
  )

  const selectedCategory = randomize<ICategoryListObj>(
    listOfAllCategoriesRes.data.drinks
  )

  const selectedIngredient = randomize<IIngredientListObj>(
    listOfAllIngredientsRes.data.drinks
  )

  const selectedGlass = randomize<IGlassListObj>(
    listOfAllGlassesRes.data.drinks
  )

  const categoryDrinksRes = await axios(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${selectedCategory.strCategory}`
  )

  const ingredientDrinkRes = await axios(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${selectedIngredient.strIngredient1}`
  )

  const glassDrinkRes = await axios(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${selectedGlass.strGlass}`
  )

  return {
    props: {
      randomDrink: randomDrinkRes.data.drinks[0],
      category: {
        title: selectedCategory.strCategory,
        drinks: categoryDrinksRes.data.drinks
      },
      ingredient: {
        title: selectedIngredient.strIngredient1,
        drinks: ingredientDrinkRes.data.drinks
      },
      glass: {
        title: selectedGlass.strGlass,
        drinks: glassDrinkRes.data.drinks
      }
    },
    revalidate: 7200
  }
}
