import _ from 'lodash'

function groupValues(fetchedObject: object, keyStartWith: string): string[] {
  const groupArray: string[] = []

  // Iterates through properties in an object.
  _.forIn(fetchedObject, (value, key) => {
    // Choose a certain properties based on their starting word
    if (
      new RegExp(`^${keyStartWith}`).test(key) &&
      typeof value === 'string' &&
      value
    ) {
      groupArray.push(value)
    }
  })
  return groupArray
}

export default groupValues
