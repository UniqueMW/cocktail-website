import React from 'react'
import { render, screen } from '@testing-library/react'
import PrivacyPolicyPage from './index.page'

jest.mock(
  'next/head',
  () =>
    function Head() {
      return <h1>Head</h1>
    }
)

test('Should render PrivacyPage.', () => {
  const { container } = render(<PrivacyPolicyPage />)

  const head = screen.getByRole('heading', { name: /head/i })
  const headings = screen.getAllByRole('heading')
  const paragraphs = container.getElementsByTagName('p')
  const listItems = screen.getAllByRole('listitem')
  const lists = screen.getAllByRole('list')

  expect(head).toBeInTheDocument()
  expect(headings.length).toBeGreaterThan(0)
  expect(paragraphs.length).toBeGreaterThan(0)
  expect(listItems.length).toBeGreaterThan(0)
  expect(lists.length).toBeGreaterThan(0)
})
