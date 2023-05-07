import React from 'react'
import axios from 'axios'
import Head from 'next/head'
import type { GetServerSideProps } from 'next'
import { Grid } from 'components'
import type { ICardDrink, IRandomDrink } from 'types'

interface ISearchPageProps {
  drinksByName: IRandomDrink[]
  drinksByIngredient: ICardDrink[]
  searchValue: string
}

function SearchPage(props: ISearchPageProps): JSX.Element {
  const [drinks, setDrinks] = React.useState<IRandomDrink[] | ICardDrink[]>(
    props.drinksByName
  )
  const [activeFilter, setActiveFilter] = React.useState('By Name')

  const handleSearchFilter = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    const text = event.currentTarget.innerText
    if (text === 'By Ingredient') {
      setDrinks(props.drinksByIngredient)
      setActiveFilter(text)
    } else {
      setDrinks(props.drinksByName)
      setActiveFilter(text)
    }
  }

  React.useEffect(() => {
    if (activeFilter === 'By Name') {
      setDrinks(props.drinksByName)
    } else {
      setDrinks(props.drinksByIngredient)
    }
  }, [props.searchValue])

  return (
    <>
      <Head>
        <title>search</title>
        <meta
          name="description"
          content="Search through a database of cocktails by name and ingredient."
        />
      </Head>
      <section className="px-2 lg:px-10">
        <Grid drinks={drinks}>
          <section className="space-y-4">
            <h1 className="md:text-4xl text-2xl text-paragraph text-center font-paragraph tracking-wider">
              Search Results Of: {props.searchValue}
            </h1>
            <div className="text-heading font-paragraph tracking-wider md:text-xl text-lg text-bold flex flex-row justify-center space-x-6">
              <button
                className={`${activeFilter === 'By Name' ? 'text-action' : ''}`}
                onClick={handleSearchFilter}
              >
                By Name
              </button>
              <button
                className={`${
                  activeFilter === 'By Ingredient' ? 'text-action' : ''
                }`}
                onClick={handleSearchFilter}
              >
                By Ingredient
              </button>
            </div>
          </section>
        </Grid>
      </section>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const searchValue = context.params?.searchValue as string

  const searchNameRes = await axios(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`
  )

  const searchIngredientRes = await axios(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchValue}`
  )

  return {
    props: {
      // eslint-disable-next-line
      drinksByName: searchNameRes.data.drinks || [],
      // eslint-disable-next-line
      drinksByIngredient: searchIngredientRes.data.drinks || [],
      searchValue
    }
  }
}

export default SearchPage
