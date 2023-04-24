import React from 'react'

interface IngredientsSectionProps {
  children: React.ReactNode
}

function IngredientsSection(props: IngredientsSectionProps): JSX.Element {
  return (
    <section>
      <h3 className="text-heading text-2xl tracking-wider font-heading border-b-2 border-action">
        Ingredients
      </h3>
      <ol className="grid md:grid-cols-2 grid-cols-1 text-heading space-y-1">
        {props.children}
      </ol>
    </section>
  )
}

export default IngredientsSection
