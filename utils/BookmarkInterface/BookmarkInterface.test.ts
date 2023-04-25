import { drinksList } from 'testProps'
import addAndRemove, { checkDrinkInBookmark } from './BookmarkInterface'

const setItemSpyFn = jest.fn()
const mockedGetItemReturnValue = JSON.stringify(drinksList)
const testDrink = {
  strDrink: 'A. J.',
  strDrinkThumb:
    'https://www.thecocktaildb.com/images/media/drink/l74qo91582480316.jpg',
  idDrink: '17833'
}

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: { getItem: () => mockedGetItemReturnValue, setItem: setItemSpyFn }
  })
})

test('Should call setItem', () => {
  addAndRemove(testDrink)

  expect(setItemSpyFn).toBeCalled()
})

test('Should check if drinks is in the drinksList.', () => {
  const positiveResult = checkDrinkInBookmark(testDrink, 'uniqueMWDrinks')
  const negativeResult = checkDrinkInBookmark({
    strDrink: 'test',
    strDrinkThumb: 'image',
    idDrink: 'test'
  })

  expect(positiveResult).toBe(true)
  expect(negativeResult).toBe(false)
})
