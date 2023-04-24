import axios from 'axios'
import { Button, IngredientsSection } from 'components'
import { BiBookmarks, BiTime } from 'react-icons/bi'
import { GiWineGlass } from 'react-icons/gi'
import type { IRandomDrink } from 'types'
import type { GetServerSideProps } from 'next'
import React from 'react'
import Image from 'next/image'
import { groupValues } from 'utils'

interface IDrinkDetailPageProps {
  drink: IRandomDrink
}

// TODO break this page to components

function DrinkDetailPage({ drink }: IDrinkDetailPageProps): JSX.Element {
  const ingredientList = React.useMemo(() => {
    const groupArray = groupValues(drink, 'strIngredient')
    const measurements = groupValues(drink, 'strMeasure')
    return groupArray.map((ingredient, index) => {
      return (
        <li
          key={ingredient}
          className="text-xl text-paragraph font-paragraph tracking-wider"
        >
          {`${index + 1}. ${ingredient} ${
            typeof measurements[index] === 'string' ? measurements[index] : ''
          }`}
        </li>
      )
    })
  }, [])

  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 items-center justify-between lg:gap-6 lg:px-10 px-2 ">
      <section className="flex flex-col justify-center space-y-10 lg:order-1 order-2">
        <div className="space-y-3">
          <h1 className="text-4xl text-heading font-heading font-semibold tracking-wider">
            {drink.strDrink}
          </h1>
          <h3 className="text-action text-lg italic">{drink.strAlcoholic}</h3>
          {/* TODO:make Heading detail component */}
          <section className="flex flex-row flex-wrap text-paragraph font-paragraph">
            {/* TODO: make tag component */}
            <h2 className="flex flex-row items-center mr-4">
              <BiTime /> {drink.dateModified}
            </h2>
            <h2 className="mr-4">
              {typeof drink.strTags === 'string'
                ? drink.strTags
                : drink.strCategory}
            </h2>
            <h2 className="flex flex-row items-center">
              <GiWineGlass />
              {drink.strGlass}
            </h2>
          </section>
        </div>
        {/* TODO:make instruction component */}
        <section className="space-y-3">
          <h3 className="text-heading text-2xl tracking-wider font-heading border-b-2 border-action">
            Instructions
          </h3>
          <p className="text-paragraph text-xl tracking-wide font-paragraph">
            {drink.strInstructions}
          </p>
        </section>
        {/* TODO: Make ingredient components */}
        <IngredientsSection>{ingredientList}</IngredientsSection>
        <Button>
          <BiBookmarks />
          <h1>Bookmark</h1>
        </Button>
      </section>

      <Image
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
        width="800"
        height="600"
        className="h-full w-full object-cover lg:order-2 order-1"
      />
    </section>
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
