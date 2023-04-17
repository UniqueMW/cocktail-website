import axios from 'axios'
import type { GetStaticProps } from 'next'
import React from 'react'
import { Hero } from 'components'
import type { IRandomDrink } from 'types'

interface IHomeProps {
  randomDrink: IRandomDrink
}

export default function Home(props: IHomeProps): JSX.Element {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between lg:px-20 px-2">
        <Hero randomDrink={props.randomDrink} />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const randomDrinkRes = await axios(
    'https://www.thecocktaildb.com/api/json/v1/1/random.php'
  )

  return {
    props: { randomDrink: randomDrinkRes.data.drinks[0] }
  }
}
