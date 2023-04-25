import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import { GiWineGlass } from 'react-icons/gi'

interface IDrinkDetailSection {
  date: string
  glass: string
  category: string
  tag: string
}

function DrinkDetailSection(props: IDrinkDetailSection): JSX.Element {
  return (
    <section className="flex flex-row justify-center lg:justify-start flex-wrap text-paragraph font-paragraph">
      <h2 className="flex flex-row items-center mr-4">
        <AiOutlineCalendar /> {props.date}
      </h2>
      <h2 className="mr-4">
        {typeof props.tag === 'string' ? props.tag : props.category}
      </h2>
      <h2 className="flex flex-row items-center">
        <GiWineGlass />
        {props.glass}
      </h2>
    </section>
  )
}

export default DrinkDetailSection
