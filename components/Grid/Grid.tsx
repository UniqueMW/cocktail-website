import React from 'react'
import { Card } from 'components'
import type { ICardDrink } from 'types'

interface IGridProps {
  drinks: ICardDrink[]
  children?: React.ReactNode
  amount?: number
}
/**
 * receive a list of drinks
 * render a list of card and the drink title
 */

// TODO handle empty drinks list
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
      <section className="grid lg:grid-cols-4 grid-cols-2 gap-x-6 gap-y-8">
        {cardArr}
      </section>
    </section>
  )
}

export default Grid
