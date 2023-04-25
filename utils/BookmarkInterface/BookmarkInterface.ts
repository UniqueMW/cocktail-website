import type { IRandomDrink } from 'types'

// TODO: Create a github gist for this script.
function addAndRemove(
  drink: IRandomDrink,
  key: string = 'uniqueMWDrinks'
): void {
  const stringifiedBookmarks = localStorage.getItem(key)

  if (typeof stringifiedBookmarks === 'string') {
    const bookmarkList: IRandomDrink[] = JSON.parse(stringifiedBookmarks)
    if (checkDrinkInBookmark(drink, key)) {
      const filteredBookmarks = bookmarkList.filter(
        (drinkItem) => drinkItem.idDrink !== drink.idDrink
      )
      localStorage.setItem(key, JSON.stringify(filteredBookmarks))
    } else {
      bookmarkList.push(drink)
      localStorage.setItem(key, JSON.stringify(bookmarkList))
    }
  } else {
    localStorage.setItem(key, JSON.stringify([drink]))
  }
}

export function checkDrinkInBookmark(
  drink: IRandomDrink,
  key: string = 'uniqueMWDrinks'
): boolean {
  const stringifiedBookmarks = localStorage.getItem(key)
  if (typeof stringifiedBookmarks === 'string') {
    const getBookmarkList: IRandomDrink[] = JSON.parse(stringifiedBookmarks)
    const filterBookmarkList = getBookmarkList.filter(
      (drinkItem) => drinkItem.idDrink === drink.idDrink
    )
    return filterBookmarkList.length > 0
  } else {
    throw new Error(`Could not find localStorage item with key ${key}.`)
  }
}

export default addAndRemove
