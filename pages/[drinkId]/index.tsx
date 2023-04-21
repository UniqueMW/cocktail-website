import axios from 'axios'
import type { IRandomDrink } from 'types'
import type { GetServerSideProps } from 'next'
import React from 'react'

interface IDrinkDetailPageProps {
  drink: IRandomDrink
}

function DrinkDetailPage(props: IDrinkDetailPageProps): JSX.Element {
  return (
    <h1 className="text-lg text-heading font-heading">
      {props.drink.strDrink}
    </h1>
  )
}

export const getServerSideProps: GetServerSideProps = async function (context) {
  const drinkId = context.params?.drinkId as string

  const drinkDetailRes = await axios(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
  )

  return {
    props: {
      drink: drinkDetailRes.data.drinks[0]
    }
  }
}

export default DrinkDetailPage
