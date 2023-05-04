import debounce from './debounce'
const debounceCallback = jest.fn()

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.useRealTimers()
})

test('Should check if debounce works correctly.', () => {
  debounce(debounceCallback, 10)()
  jest.runAllTimers()

  expect(debounceCallback).toBeCalled()
})
