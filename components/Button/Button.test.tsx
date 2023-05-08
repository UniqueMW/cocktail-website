import React from 'react'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import Button from './Button'

const eventHandlerSpy = jest.fn()

test('Should render Button component.', () => {
  render(<Button>Test</Button>)

  const button = screen.getByRole('button', { name: /test/i })

  expect(button).toBeInTheDocument()
})

test('Should call event handle on click', async () => {
  render(<Button clickEvent={eventHandlerSpy}>Test</Button>)

  const button = screen.getByRole('button', { name: /test/i })
  await user.click(button)

  expect(button).toBeInTheDocument()
  expect(eventHandlerSpy).toBeCalled()
})
