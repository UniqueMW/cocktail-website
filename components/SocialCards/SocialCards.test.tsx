import React from 'react'
import { render } from '@testing-library/react'
import SocialCards from './SocialCards'

test('Should render SocialCards.', () => {
  const { container } = render(<SocialCards title="test" description="test" />)

  const metaTags = container.getElementsByTagName('meta')

  expect(metaTags.length).toBeGreaterThan(0)
})
