import randomize from './randomize'
import { drinksList } from 'testProps'
import type { ICardDrink } from 'types'

test('Should select one random drink object.', () => {
  const randomDrink = randomize<ICardDrink>(drinksList)

  expect(randomDrink).toBeDefined()
  expect(randomDrink.idDrink).toBeDefined()
  expect(randomDrink.strDrink).toBeDefined()
  expect(randomDrink.strDrinkThumb).toBeDefined()
})
