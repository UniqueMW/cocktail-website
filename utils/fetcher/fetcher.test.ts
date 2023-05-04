import { rest } from 'msw'
import { setupServer } from 'msw/node'
import fetcher from './fetcher'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

const server = setupServer(
  rest.get(url, async (req, res, ctx) => {
    return await res(
      ctx.status(200),
      ctx.json({
        test: 'test'
      })
    )
  })
)

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

test('fetcher should make a request.', async () => {
  const fetchedData = await fetcher(url)
  expect(fetchedData.test).toBe('test')
})
