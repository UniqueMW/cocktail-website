import React from 'react'

interface ISocialCardsProps {
  title: string
  description: string
}

function SocialCards(props: ISocialCardsProps): JSX.Element {
  return (
    <>
      {/* Facebook tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content="@UniqueMW265" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
    </>
  )
}

export default SocialCards
