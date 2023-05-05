import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { renderHook, waitFor } from '@testing-library/react'
import { randomDrink } from 'testProps'
import useSearchSuggestion from './useSearchSuggestion'

const randomDrinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
const searchDrinkUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=sex'

const searchDrinkUrlNoParams =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php'

const server = setupServer(
  rest.get(randomDrinkUrl, async (req, res, ctx) => {
    return await res(ctx.status(200), ctx.json({ drinks: [randomDrink] }))
  }),
  rest.get(searchDrinkUrlNoParams, async (req, res, ctx) => {
    req.url.searchParams.get('s')
    return await res(ctx.status(200), ctx.json({ drinks: null }))
  })
)

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

test('useSearchSuggestion should return an array of drinks.', async () => {
  const { result } = renderHook(() => useSearchSuggestion(randomDrinkUrl))

  await waitFor(() => {
    expect(result.current[0].strDrink).toBe('Pysch Vitamin Light')
    expect(result.current.length).toBe(1)
  })
})

test('useSearchSuggestion should return an empty array if fetched drinks is null.', async () => {
  const { result } = renderHook(() => useSearchSuggestion(searchDrinkUrl))

  await waitFor(() => {
    expect(result.current.length).toBe(0)
  })
})
