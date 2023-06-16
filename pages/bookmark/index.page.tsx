import React from 'react'
import Head from 'next/head'
import { Grid, SocialCards } from 'components'
import type { IRandomDrink } from 'types'
import { useAuth } from 'hooks'
import { getAllDrinksInDatabase } from 'utils'

function BookmarkPage(): JSX.Element {
  const [drinks, setDrinks] = React.useState<IRandomDrink[]>([])
  const [isAuthenticated, user] = useAuth()

  React.useEffect(() => {
    console.log(isAuthenticated)
    if (isAuthenticated && user !== null) {
      getAllDrinksInDatabase(user.uid)
        .then((value) => {
          setDrinks(value)
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      const stringifiedDrinks = localStorage.getItem('uniqueMWDrinks')
      if (typeof stringifiedDrinks === 'string') {
        const drinksList = JSON.parse(stringifiedDrinks)
        setDrinks(drinksList)
      }
    }
  }, [isAuthenticated, user])
  return (
    <>
      <Head>
        <title>bookmark</title>
        <meta
          name="description"
          content="Scroll through a list of your favorite drinks."
        />
        <SocialCards
          title="bookmark"
          description="Scroll through a list of your favorite drinks."
        />
      </Head>
      <section className="lg:px-20 px-2 min-h-screen">
        <Grid drinks={drinks}>
          <h1 className="text-lg text-heading text-start w-full font-heading font-semibold tracking-wide">
            Bookmarked Drinks:
          </h1>
        </Grid>
      </section>
    </>
  )
}

export default BookmarkPage
