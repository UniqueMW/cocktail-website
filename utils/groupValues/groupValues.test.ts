import { randomDrink } from 'testProps'
import groupValues from './groupValues'

test('groupValues should work correctly.', () => {
  const groupedValues = groupValues(randomDrink, 'strIngredient')
  expect(groupedValues.length).toBe(5)
})
