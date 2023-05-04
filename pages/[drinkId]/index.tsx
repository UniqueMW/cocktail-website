import axios from 'axios'
import {
  Button,
  IngredientsSection,
  InstructionSection,
  DrinkDetailSection
} from 'components'
import { BsBookmarks, BsBookmarksFill } from 'react-icons/bs'
import type { IRandomDrink } from 'types'
import type { GetServerSideProps } from 'next'
import React from 'react'
import Image from 'next/image'
import { addAndRemove, checkDrinkInBookmark, groupValues } from 'utils'

interface IDrinkDetailPageProps {
  drink: IRandomDrink
}

function DrinkDetailPage({ drink }: IDrinkDetailPageProps): JSX.Element {
  const [isBookmarked, setIsBookmarked] = React.useState<boolean>()

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

  React.useEffect(() => {
    setIsBookmarked(checkDrinkInBookmark(drink))
  }, [])

  const handleLocalStorage = (): void => {
    addAndRemove(drink)
    setIsBookmarked(checkDrinkInBookmark(drink))
  }

  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 items-center justify-between lg:gap-6 lg:px-10 px-2 min-h-screen">
      <section className="flex flex-col justify-center space-y-10 lg:order-1 order-2">
        <div className="space-y-3 pt-6 lg:pt-0">
          <h1 className="text-4xl text-heading text-center lg:text-left font-heading font-semibold tracking-wider">
            {drink.strDrink}
          </h1>
          <h3 className="text-action text-lg text-center lg:text-left italic ">
            {drink.strAlcoholic}
          </h3>
          <DrinkDetailSection
            date={drink.dateModified}
            category={drink.strCategory}
            tag={drink.strTags}
            glass={drink.strGlass}
          />
        </div>
        <InstructionSection instruction={drink.strInstructions} />
        <IngredientsSection>{ingredientList}</IngredientsSection>
        <div className="flex flex-row justify-center">
          <Button clickEvent={handleLocalStorage}>
            {/* eslint-disable-next-line */}
            {isBookmarked ? (
              <BsBookmarksFill className="text-heading" />
            ) : (
              <BsBookmarks />
            )}
            <h1>Bookmark</h1>
          </Button>
        </div>
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

  console.log(drinkDetailRes.data, 'response')
  const isDrinkDetailAvailable = Boolean(drinkDetailRes.data)

  if (!isDrinkDetailAvailable || drinkDetailRes.data.drinks === null) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      drink: drinkDetailRes.data.drinks[0]
    }
  }
}

export default DrinkDetailPage
