import React from 'react'

interface IIngredientsSectionProps {
  children: React.ReactNode
}

function IngredientsSection(props: IIngredientsSectionProps): JSX.Element {
  return (
    <section>
      <h3 className="text-heading text-xl text-center lg:text-left tracking-wider font-heading border-b-2 border-action">
        Ingredients
      </h3>
      <ol className="grid md:grid-cols-2 grid-cols-1 text-heading space-y-1 text-base">
        {props.children}
      </ol>
    </section>
  )
}

export default IngredientsSection
