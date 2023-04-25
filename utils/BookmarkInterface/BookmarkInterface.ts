import type { ICardDrink, IRandomDrink } from 'types'

// TODO: Create a github gist for this script.
function addAndRemove(
  drink: IRandomDrink | ICardDrink,
  key: string = 'uniqueMWDrinks'
): void {
  const stringifiedBookmarks = localStorage.getItem(key)

  if (typeof stringifiedBookmarks === 'string') {
    const bookmarkList: Array<IRandomDrink | ICardDrink> =
      JSON.parse(stringifiedBookmarks)
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
  drink: IRandomDrink | ICardDrink,
  key: string = 'uniqueMWDrinks'
): boolean {
  const stringifiedBookmarks = localStorage.getItem(key)
  if (typeof stringifiedBookmarks === 'string') {
    const getBookmarkList: Array<IRandomDrink | ICardDrink> =
      JSON.parse(stringifiedBookmarks)
    const filterBookmarkList = getBookmarkList.filter(
      (drinkItem) => drinkItem.idDrink === drink.idDrink
    )
    return filterBookmarkList.length > 0
  }
  return false
}

export default addAndRemove
