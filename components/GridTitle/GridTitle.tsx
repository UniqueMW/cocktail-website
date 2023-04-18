import React from 'react'
interface IGridTitleProps {
  children: React.ReactNode
}
function GridTitle(props: IGridTitleProps): JSX.Element {
  return (
    <section className="flex flex-row justify-evenly items-center w-full">
      <div className="md:w-[25%] w-[18%] bg-action h-1" />
      <h1 className="text-heading text-center font-heading tracking-wider lg:text-4xl text-2xl capitalize md:w-[30%] w-[40%]">
        {props.children}
      </h1>
      <div className="md:w-[25%] w-[18%] bg-action h-1" />
    </section>
  )
}

export default GridTitle
