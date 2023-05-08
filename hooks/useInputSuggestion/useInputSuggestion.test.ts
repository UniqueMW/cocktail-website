import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { renderHook, waitFor } from '@testing-library/react'
import { randomDrink } from 'testProps'
import useInputSuggestion from './useInputSuggestion'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

const server = setupServer(
  rest.get(url, async (req, res, ctx) => {
    return await res(ctx.status(200), ctx.json({ drinks: [randomDrink] }))
  })
)

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

test('useInputSuggestion should return a random suggestion.', async () => {
  const { result } = renderHook(() => useInputSuggestion(url, 100))

  await waitFor(() => {
    expect(result.current).toBe('Pysch Vitamin Light')
  })
})
