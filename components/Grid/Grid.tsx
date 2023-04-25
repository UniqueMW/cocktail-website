import React from 'react'
import { Card } from 'components'
import type { ICardDrink, IRandomDrink } from 'types'

interface IGridProps {
  drinks: Array<ICardDrink | IRandomDrink>
  children?: React.ReactNode
  amount?: number
}

// TODO handle empty drinks list eg empty bookmark
function Grid(props: IGridProps): JSX.Element {
  const cardArr = React.useMemo(() => {
    let controlledDrinkAmount = props.drinks
    const amount = props.amount
    if (typeof amount === 'number') {
      controlledDrinkAmount = props.drinks.filter((drink, index) => {
        return index < amount
      })
    }

    return controlledDrinkAmount.map((drink) => (
      <Card drink={drink} key={drink.idDrink} />
    ))
  }, [props.drinks, props.children])

  return (
    <section className="flex flex-col items-center space-y-8">
      {props.children}
      <section className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:gap-x-6 md:gap-y-8 gap-x-3 gap-y-4">
        {cardArr}
      </section>
    </section>
  )
}

export default Grid
