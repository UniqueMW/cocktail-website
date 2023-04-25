import Image from 'next/image'
import React from 'react'
import * as _ from 'lodash'
import { BiDetail } from 'react-icons/bi'
import { BsBookmarks, BsBookmarksFill } from 'react-icons/bs'
import { addAndRemove, checkDrinkInBookmark } from 'utils'
import { Button } from 'components'

import type { IRandomDrink } from 'types'
import { useRouter } from 'next/router'
interface IHeroProps {
  randomDrink: IRandomDrink
}
function Hero({ randomDrink }: IHeroProps): JSX.Element {
  const [isBookmarked, setIsBookmarked] = React.useState<boolean>()

  const router = useRouter()
  const handleDetails = (): void => {
    // eslint-disable-next-line
    router.push(`/${randomDrink.idDrink}`)
  }

  React.useEffect(() => {
    setIsBookmarked(checkDrinkInBookmark(randomDrink))
  }, [])

  const handleLocalStorage = (): void => {
    addAndRemove(randomDrink)
    setIsBookmarked(checkDrinkInBookmark(randomDrink))
  }

  return (
    <section className="grid lg:grid-cols-2 grid-rows-1 sm:gap-2 gap-1 lg:gap-0  lg:justify-center lg:items-center py-4">
      <Image
        src={randomDrink.strDrinkThumb}
        alt={randomDrink.strDrink}
        width={500}
        height={500}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg"
        className="object-cover rounded-full justify-self-center"
      />
      <section className="flex flex-col lg:items-start items-center space-y-6">
        <div className="w-20 bg-action h-1 hidden lg:block" />
        <h1 className="text-heading text-4xl text-center lg:text-left font-heading tracking-wider">
          {randomDrink.strDrink}
        </h1>
        <h2 className="text-action italic text-center lg:text-left font-paragraph text-base">
          {randomDrink.strAlcoholic}
        </h2>
        <p
          className="text-paragraph text-xl text-center lg:text-left font-paragraph tracking-wide"
          role="paragraph"
        >
          {_.truncate(randomDrink.strInstructions, {
            length: 200,
            omission: '...'
          })}
        </p>
        <section className=" flex xs:flex-row flex-col justify-between items-center xs:space-y-0 space-y-2 xs:space-x-6">
          <Button clickEvent={handleLocalStorage}>
            {/* eslint-disable-next-line */}
            {isBookmarked ? (
              <BsBookmarksFill className="text-heading" />
            ) : (
              <BsBookmarks />
            )}
            <h1>Bookmark</h1>
          </Button>
          <Button clickEvent={handleDetails}>
            <BiDetail />
            <h1>Details</h1>
          </Button>
        </section>
      </section>
    </section>
  )
}

export default Hero
