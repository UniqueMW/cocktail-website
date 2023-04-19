import React from 'react'

interface IFilterCardProps {
  children: React.ReactNode
  setActiveCard: (args: string) => void
  activeCard: string
}

function FilterCard(props: IFilterCardProps): JSX.Element {
  const handleActive = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const textContent = event.currentTarget.textContent
    if (typeof textContent === 'string') {
      console.log('setting')
      props.setActiveCard(textContent)
    }
  }
  return (
    <button
      className={`text-lg  font-paragraph border ${
        props.children === props.activeCard
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
