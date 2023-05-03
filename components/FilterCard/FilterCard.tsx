import React from 'react'
import { FilterCardContext } from 'components'
import type { IFilterCardContext } from 'types'

interface IFilterCardProps {
  children: React.ReactNode
}

function FilterCard(props: IFilterCardProps): JSX.Element {
  const { activeCard, setActiveCard } = React.useContext<
    IFilterCardContext | undefined
  >(FilterCardContext) as IFilterCardContext

  const handleActive = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const textContent = event.currentTarget.textContent
    if (typeof textContent === 'string') {
      setActiveCard(textContent)
    }
  }
  return (
    <button
      className={`text-lg  font-paragraph border h-12 ${
        props.children === activeCard
          ? 'border-action text-action'
          : 'border-paragraph text-paragraph'
      } rounded-3xl p-2`}
      onClick={handleActive}
    >
      {props.children}
    </button>
  )
}

export default FilterCard
