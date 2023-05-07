import React from 'react'
import Head from 'next/head'
import { Grid } from 'components'
import type { IRandomDrink } from 'types'

function BookmarkPage(): JSX.Element {
  const [drinks, setDrinks] = React.useState<IRandomDrink[]>([])

  React.useEffect(() => {
    const stringifiedDrinks = localStorage.getItem('uniqueMWDrinks')
    if (typeof stringifiedDrinks === 'string') {
      const drinksList = JSON.parse(stringifiedDrinks)
      setDrinks(drinksList)
    }
  }, [])
  return (
    <>
      <Head>
        <title>bookmark</title>
        <meta
          name="description"
          content="Scroll through a list of your favorite drinks."
        />
      </Head>
      <section className="lg:px-20 px-2 min-h-screen">
        <Grid drinks={drinks}>
          <h1 className="text-xl text-heading text-start w-full font-heading font-semibold tracking-wide">
            Bookmarked Drinks:
          </h1>
        </Grid>
      </section>
    </>
  )
}

export default BookmarkPage
