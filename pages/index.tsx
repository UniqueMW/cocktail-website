import axios from 'axios'
import type { GetStaticProps } from 'next'
import React from 'react'
import { Hero, Grid, GridTitle } from 'components'
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
      <div className=" lg:space-y-16 space-y-12 lg:px-20 px-2 pb-6">
        <Hero randomDrink={props.randomDrink} />
        <Grid drinks={props.category.drinks} amount={8}>
          <GridTitle>{props.category.title}</GridTitle>
        </Grid>
        <Grid drinks={props.ingredient.drinks} amount={8}>
          <GridTitle>{`Made with ${props.ingredient.title}`}</GridTitle>
        </Grid>
        <Grid drinks={props.glass.drinks} amount={8}>
          <GridTitle>{`served on ${props.glass.title}`}</GridTitle>
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

  /**
   * select random category
   * fetch the selected category
   * pass the selected category and the fetched drinks as props
   */

  // TODO add revalidate
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
    }
  }
}
